import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import footerBg from './../assets/bg.jpg'; // same as Footer

const Nav = styled(motion.header)`
  position: sticky;
  top: 0;
  z-index: 100;
  background: 
    linear-gradient(rgba(0, 67, 78, 0.8), rgba(0, 67, 78, 0.8)),
    url(${props => props.$bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2.5rem;
  border-radius: 15px;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 400px) {
    padding: 0.5rem 1rem;
  }
`;

const Logo = styled.a`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #f4d48b;
  text-decoration: none;
  span {
    display: block;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  @media (max-width: 992px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    transition: all 0.3s ease;
  }
`;

const Sidebar = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 260px;
  background: #00434e;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 200;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.2);

  @media (min-width: 993px) {
    display: none;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 992px) {
    display: none;
  }
`;

const MenuLink = styled.li`
  a {
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    position: relative;

    &.active::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background: #f4d48b;
      bottom: -8px;
      left: 0;
    }

    &:hover {
      color: #f4d48b;
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const CTA = styled.a`
  background: #f4d48b;
  color: #00434e;
  padding: 0.6rem 1.6rem;
  font-weight: 700;
  border-radius: 8px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.3s ease;

  &:hover {
    background: #f7e2a0;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const GTA = styled.a`
  background: #f4d48b;
  color: #00434e;
  padding: 0.3rem 1rem;
  width: fit-content;
  font-weight: 700;
  border-radius: 8px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.3s ease;

  &:hover {
    background: #f7e2a0;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
        $bg={footerBg}
      >
        <Logo href="/">
          <span>Maleeha</span>
          <span>Maam</span>
        </Logo>
        <Menu>
          <MenuLink>
            <a href="/" className={isActive('/') ? 'active' : ''}>Home</a>
          </MenuLink>
          <MenuLink>
            <a href="/elearning" className={isActive('/elearning') ? 'active' : ''}>E‑Learning</a>
          </MenuLink>
          <MenuLink>
            <a href="/about" className={isActive('/about') ? 'active' : ''}>About Me</a>
          </MenuLink>
        </Menu>
        <Right>
          <CTA href="/consult">Consult Now</CTA>
          <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </Hamburger>
        </Right>
      </Nav>

      <AnimatePresence>
        {menuOpen && (
          <Sidebar
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <MenuLink>
                <a href="/" onClick={() => setMenuOpen(false)} className={isActive('/') ? 'active' : ''}>Home</a>
              </MenuLink>
              <MenuLink>
                <a href="/elearning" onClick={() => setMenuOpen(false)} className={isActive('/elearning') ? 'active' : ''}>E‑Learning</a>
              </MenuLink>
              <MenuLink>
                <a href="/about" onClick={() => setMenuOpen(false)} className={isActive('/about') ? 'active' : ''}>About Me</a>
              </MenuLink>
              <GTA href="/consult" onClick={() => setMenuOpen(false)}>Consult Now</GTA>
            </ul>
          </Sidebar>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import footerBg from './../assets/bg.jpg'; // Adjust the path based on your structure

const FooterContainer = styled.footer`
  background: 
    linear-gradient(rgba(52, 115, 119, 0.6), rgba(52, 115, 119, 0.6)),
    url(${props => props.$bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  padding: 3rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  border-radius: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 1.5rem;
  }
`;

const Section = styled(motion.div)`
  flex: 1;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #f4d48b;
  line-height: 1.2;
`;

const SubText = styled.p`
  font-size: 0.95rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.95rem;

    &:hover {
      color: #f4d48b;
    }
  }
`;

const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    color: #f4d48b;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    background: #f4d48b;
    color: #00434e;
    padding: 0.4rem 0.6rem;
    border-radius: 6px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;

    &:hover {
      background: #f7e2a0;
    }
  }
`;

const Footer = () => {
  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: false, margin: '-50px' });

  return (
    <FooterContainer ref={ref} $bg={footerBg}>
      <Section
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
      >
        <Logo>
          Maleeha<br />Maam
        </Logo>
        <SubText>Psychic Tarot Reader | Runes Reader |</SubText>
        <SubText>Candle Magic & Healing</SubText>
      </Section>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3>Browse</h3>
        <List>
          <ListItem><a href="/">Home</a></ListItem>
          <ListItem><a href="/elearning">E-Learning</a></ListItem>
          <ListItem><a href="/about">About Me</a></ListItem>
        </List>
      </Section>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3>Contact</h3>
        <ContactLink href="mailto:info@tarotripti.com">info@tarotripti.com</ContactLink>
        <ContactLink href="tel:+918815354168">+91-8815354168</ContactLink>
      </Section>

      <Section
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3>Social Media Handles</h3>
        <Icons>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </Icons>
      </Section>
    </FooterContainer>
  );
};

export default Footer;

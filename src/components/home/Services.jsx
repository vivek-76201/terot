import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Images from your upload (I uploaded your images to imgur for demo, replace with your paths)
const services = [
  {
    title: "Tarot Card Reading",
    img: "/mnt/data/f624769e-dee5-4a6e-b6f6-40c5d027463a.png",
    animation: { x: -200, opacity: 0 },
  },
  {
    title: "E-Learning",
    img: "https://i.imgur.com/YZghrTQ.jpg", // Replace with your actual image URLs or imports
    animation: { y: 200, opacity: 0 },
  },
  {
    title: "Candle Magic & Healing",
    img: "https://i.imgur.com/UiEyFQq.jpg",
    animation: { x: 200, opacity: 0 },
  },
  {
    title: "Shop",
    img: "https://i.imgur.com/qAlDbiM.jpg",
    animation: { y: -200, opacity: 0 },
  },
];

const Container = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-weight: 900;
  color: #004d4d;
  margin-bottom: 40px;
  font-size: 2.2rem;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
  gap: 30px;
  justify-items: center;
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 10px;
  border: 1px solid #f6c475;
  padding: 20px 15px 30px;
  width: 100%;
  max-width: 260px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CircleImage = styled.div`
  border-radius: 50%;
  border: 2px solid #f6c475;
  padding: 7px;
  width: 140px;
  height: 140px;
  margin-bottom: 15px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  color: #004d4d;
  margin-bottom: 15px;
  font-size: 1.1rem;
`;

const BookButton = styled.button`
  background-color: #f6c475;
  border: none;
  border-radius: 8px;
  padding: 10px 22px;
  font-weight: 700;
  cursor: pointer;
  color: #004d4d;
  transition: background-color 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color: #e0b15a;
  }
`;

export default function Services() {
  return (
    <Container>
      <Heading>Our Services</Heading>
      <CardsWrapper>
        {services.map(({ title, img, animation }, i) => (
          <Card
            key={i}
            initial={animation}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.3, type: "spring", stiffness: 50 }}
          >
            <CircleImage>
              <img src={img} alt={title} />
            </CircleImage>
            <Title>{title}</Title>
            <BookButton>Book Now</BookButton>
          </Card>
        ))}
      </CardsWrapper>
    </Container>
  );
}

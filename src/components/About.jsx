import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer1';
import hero from './../assets/hero.jpeg'

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 3rem 1.5rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const TextBlock = styled(motion.div)`
  flex: 1.5;
  font-size: 1rem;
  color: #165c5d;
  max-width: 700px;

  h2 {
    font-size: 2rem;
    color: #005e63;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  strong {
    font-weight: bold;
  }
`;

const ImageBlock = styled(motion.div)`
  flex: 1;
  min-width: 280px;
  max-width: 600px;

  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const AboutMe = () => {
  const ref = useRef();
  const isInView = useInView(ref, { triggerOnce: false, margin: '-50px' });

  return (
    <>
      <Navbar />
      <Container ref={ref}>
        <TextBlock
          initial={{ opacity: 0, x: -60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -60, scale: 0.95 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 15,
            duration: 0.8,
          }}
        >
          <h2>About Me</h2>
          <p>
            <strong>Maleeha Maam</strong> has a long and illustrious history in astrology and is popular
            for her precise predictions and the most effective remedies. She is regarded as a gem in this unified
            platform’s treasure box, her specialization fields include Tarot Reading, psychics, rune reading,
            candle healing, manifestation, and Vedic numerology.
          </p>
          <p>
            Disseminating the knowledge of Indian Astrology by serving needy people across the globe, the
            distinguished astrologer has continued to give her best in this field for a very long time. With a
            vast clientele base across the country and the globe that includes famous celebrities, business
            magnates, and people from all walks of life, She uses her expertise to help people deal with
            miserable situations and difficulties common in everyday life. A lady with a feminine yet wise
            approach is also a healer. Her remedies are very accurate and effective.
          </p>
        </TextBlock>

        <ImageBlock
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 60, scale: 0.95 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 18,
            duration: 0.9,
            delay: 0.2,
          }}
        >
          <img
            src={hero}
            alt="Maleeha Maam"
          />
        </ImageBlock>
      </Container>
      <Footer />
    </>
  );
};

export default AboutMe;

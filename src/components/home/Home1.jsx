import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import HeroImg from './../../assets/hero.jpeg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const sliderImages = [HeroImg, HeroImg, HeroImg];

// ── Animations ─────────────────────────────────────
const fadeFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeFromBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

// ── Styled Components ──────────────────────────────
const Section = styled(motion.section)`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 5rem 2.5rem;
  margin: 0 auto;
  max-width: 1400px;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 3rem 1.5rem;
  }
`;

const Content = styled(motion.div)`
  flex: 1 1 50%;
  max-width: 560px;
`;

const Eyebrow = styled(motion.h5)`
  font-size: 1.25rem;
  color: #00777b;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw + 1rem, 4.5rem);
  line-height: 1.1;
  color: #00434e;
  font-weight: 800;
  margin: 0 0 1.5rem;
`;

const Para = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.75;
  color: #2c2c2c;
  margin-bottom: 2.5rem;
`;

const Buttons = styled(motion.div)`
  display: flex;
  gap: 1.25rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Btn = styled(motion.a)`
  display: inline-block;
  background: #f4d48b;
  color: #00434e;
  padding: 0.9rem 2.25rem;
  font-weight: 700;
  border-radius: 10px;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    opacity: 0.9;
  }
`;

const Visual = styled(motion.div)`
  flex: 1 1 50%;
  max-width: 600px;
  position: relative;
`;

const Slider = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: 20px;
`;

const SliderImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(244, 212, 139, 0.8);
  color: #00434e;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;

  &:hover {
    background: #f4d48b;
  }
`;

const PrevButton = styled(ArrowButton)`
  left: 10px;
`;

const NextButton = styled(ArrowButton)`
  right: 10px;
`;

// ── Component ──────────────────────────────────────
const Home1 = () => {
  const [index, setIndex] = React.useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <Section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <Content variants={fadeFromLeft}>
        <Eyebrow variants={fadeFromBottom}>
          Unlock the Mysteries of Your Destiny with
        </Eyebrow>

        <Title variants={fadeFromLeft}>Maleeha</Title>

        <Para variants={fadeFromRight}>
          Maleeha has a long and illustrious history in astrology and is
          popular for her precise predictions and the most effective remedies.
          She is regarded as a gem in this unified platform’s treasure box; her
          specialties include Tarot Reading, psychics, rune reading, candle healing,
          manifestation, and Vedic numerology.
        </Para>

        <Buttons variants={fadeFromBottom}>
          <Btn href="/consult" variants={fadeFromLeft}>Consult Now</Btn>
          <Btn
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeFromRight}
          >
            Book on WhatsApp
          </Btn>
        </Buttons>
      </Content>

      <Visual variants={fadeFromRight}>
        <Slider>
          <AnimatePresence mode="wait">
            <SliderImage
              key={index}
              src={sliderImages[index]}
              alt={`Slide ${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>

          <PrevButton onClick={prevSlide}><FaArrowLeft /></PrevButton>
          <NextButton onClick={nextSlide}><FaArrowRight /></NextButton>
        </Slider>
      </Visual>
    </Section>
  );
};

export default Home1;

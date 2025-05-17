import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Container = styled.div`
  padding: 3rem 1.5rem;
  max-width: 1200px;
  margin: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #0f172a;
  font-weight: 800;
  margin-bottom: 3rem;
`;

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Step = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fef3c7;
  border-radius: 1.5rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const Number = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #facc15;
  background: #0f172a;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 1.5rem;
  }
`;

const Text = styled.div`
  flex: 1;
  font-size: 1.1rem;
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 1rem;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 1.5rem;
  }
`;

const BookingSteps = () => {
  const steps = [
    {
      id: 1,
      text: 'Enter your details: Name, Phone Number, Email',
      icon: '/icons/details.png',
      animation: { x: -100, opacity: 0 },
    },
    {
      id: 2,
      text: 'Choose the slot from the calendar as per your convenience and proceed',
      icon: '/icons/calendar.png',
      animation: { x: 100, opacity: 0 },
    },
    {
      id: 3,
      text: 'Choose the mode of payment and proceed with the payment',
      icon: '/icons/wallet.png',
      animation: { y: 100, opacity: 0 },
    },
    {
      id: 4,
      text: 'Thank you for booking a consultation with Celebrity Astrologer Tripti Tiwari. Our team will contact you shortly.',
      icon: '/icons/check.png',
      animation: { y: -100, opacity: 0 },
    },
  ];

  return (
    <Container>
      <Title>How to Book A Consultation?</Title>
      <StepWrapper>
        {steps.map((step, index) => {
          const controls = useAnimation();
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

          if (inView) controls.start({ x: 0, y: 0, opacity: 1 });

          return (
            <Step
              key={step.id}
              ref={ref}
              initial={step.animation}
              animate={controls}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <Number>{step.id}</Number>
              <Text>{step.text}</Text>
              <Icon src={step.icon} alt={`step-${step.id}`} />
            </Step>
          );
        })}
      </StepWrapper>
    </Container>
  );
};

export default BookingSteps;

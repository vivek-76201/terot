import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Styled Components
const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: #004d4d;
  font-weight: 800;
  margin-bottom: 30px;
`;

const NewsContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  background-color: #0f2642;
  border-radius: 12px;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextSection = styled.div`
  flex: 1;
  padding: 40px 30px;
  display: flex;
  align-items: center;
  color: white;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.4;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

const ImageSection = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Component
const NewsMediaLinks = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Section>
      <Title
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        News Media Links
      </Title>

      <NewsContainer
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <TextSection>
          <h3>
            Tech based Astro start-up <br />
            Divine talk onboards <br />
            Celebrity Astrologer <br />
            Maleeha
          </h3>
        </TextSection>
        <ImageSection>
          <img
            src="/mnt/data/60909e8a-cffa-420f-928b-73ff338ed20d.png"
            alt="Maleeha News"
          />
        </ImageSection>
      </NewsContainer>
    </Section>
  );
};

export default NewsMediaLinks;

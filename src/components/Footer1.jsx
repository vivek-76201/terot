import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arunima",
    image: "https://i.imgur.com/j1TqOTk.png",
    rating: 5,
    text: "Tripti Ma’am is a divine soul with much knowledge and wisdom. She opened the door for me to enter the spiritual world with his teachings and messages. I've gained so much insight, especially after reviewing the course where I learned about the Chariot; the light codes, and light language. This has been an unbelievable adventure into who I am. With much gratitude, thank you, ma’am."
  },
  {
    name: "Soundarya",
    image: "https://i.imgur.com/NcQDCgH.png",
    rating: 5,
    text: "What a beautiful course! I loved Tripti Tiwari readings from the beginning and thought I’ll sign up here for the training as her style and delivery was relatable and resonated with me. If you are looking to learn from a good friend, then look no further than Tripti Tiwari. Your success is written on the cards."
  },
  {
    name: "Arjun",
    image: "https://i.imgur.com/L9QlxwM.png",
    rating: 5,
    text: "What a beautiful course! I loved Tripti Tiwari readings from the beginning and thought I’ll sign up here for the training as her style and delivery was relatable and resonated with me. If you are looking to learn from a good friend, then look no further than Tripti Tiwari. Your success is written on the cards."
  },
  {
    name: "Viraj",
    image: "https://i.imgur.com/tQvYIZB.png",
    rating: 5,
    text: "Tripti Ma’am is a divine soul with much knowledge and wisdom. She opened the door for me to enter the spiritual world with his teachings and messages. I've gained so much insight especially after reviewing the course where I learned about the Chariot; the light codes and light language. This has been an unbelievable adventure into who I am. With much gratitude, thank you ma’am."
  },
];

const Section = styled.section`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: #003333;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const Card = styled(motion.div)`
  background-color: #004d4d;
  color: white;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: 1.1rem;
`;

const Stars = styled.div`
  color: #f6c475;
`;

const Text = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
`;

export default function Testimonials() {
  return (
    <Section>
      <Title
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Testimonials
      </Title>
      <Grid>
        {testimonials.map((t, i) => (
          <Card
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: false }}
          >
            <Avatar src={t.image} alt={t.name} />
            <Name>{t.name}</Name>
            <Stars>{"★".repeat(t.rating)}</Stars>
            <Text>{t.text}</Text>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

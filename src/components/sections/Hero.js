import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

// Hero background image (replace with actual hero image URL)
const heroImage = 'https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroOverlay>
        <div className="container">
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <StudioName>
                MD Photo Studio <span>&</span> Frame
              </StudioName>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <TagLine>
                Capturing Moments, Creating Memories
              </TagLine>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <HighlightServices>
                <HighlightItem>👰 Wedding Photography</HighlightItem>
                <HighlightItem>💫 Pre-Wedding Shoots</HighlightItem>
                <HighlightItem>🎬 Wedding Videography</HighlightItem>
                <HighlightItem>📺 Live Streaming</HighlightItem>
              </HighlightServices>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <FastService>
                ✅ Passport Size Photo in Just 5 Minutes
              </FastService>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <WhatsAppButton href="https://wa.me/9779464786" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
                <span>Chat on WhatsApp</span>
              </WhatsAppButton>
            </motion.div>
          </HeroContent>
        </div>
      </HeroOverlay>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  height: 100vh;
  min-height: 650px;
  width: 100%;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(44, 44, 84, 0.8), rgba(44, 44, 84, 0.95));
  display: flex;
  align-items: center;
  text-align: center;
`;

const HeroContent = styled.div`
  color: var(--white);
  max-width: 800px;
  margin: 0 auto;
  padding-top: 100px;
`;

const StudioName = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 15px;
  
  span {
    color: var(--accent-yellow);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const TagLine = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 30px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const HighlightServices = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-bottom: 30px;
`;

const HighlightItem = styled.div`
  background-color: rgba(255, 211, 42, 0.15);
  border: 1px solid var(--accent-yellow);
  color: var(--white);
  padding: 8px 16px;
  border-radius: 30px;
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 7px 14px;
  }
`;

const FastService = styled.div`
  background-color: rgba(255, 63, 52, 0.2);
  border: 1px solid var(--accent-red);
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 1.1rem;
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 8px 16px;
  }
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: #25D366;
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  svg {
    font-size: 1.3rem;
  }
  
  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

export default Hero; 
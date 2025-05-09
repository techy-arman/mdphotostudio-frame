import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Hero carousel images (replace with actual hero images)
const carouselImages = [
  'https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  'https://images.unsplash.com/photo-1519741347686-c1e331c20a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      <HeroCarousel>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="carousel-image"
            style={{ backgroundImage: `url(${carouselImages[currentImage]})` }}
          />
        </AnimatePresence>
        
        <CarouselButton className="left" onClick={prevImage}>
          <FaChevronLeft />
        </CarouselButton>
        
        <CarouselButton className="right" onClick={nextImage}>
          <FaChevronRight />
        </CarouselButton>
        
        <CarouselIndicators>
          {carouselImages.map((_, index) => (
            <CarouselDot 
              key={index} 
              active={index === currentImage}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </CarouselIndicators>
      </HeroCarousel>
      
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
  position: relative;
  overflow: hidden;
`;

const HeroCarousel = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  
  .carousel-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s, transform 0.3s;
  z-index: 10;
  
  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
  }
  
  &.left {
    left: 20px;
  }
  
  &.right {
    right: 20px;
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    
    &.left {
      left: 10px;
    }
    
    &.right {
      right: 10px;
    }
  }
`;

const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
`;

const CarouselDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'var(--accent-yellow)' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(26, 26, 46, 0.8), rgba(26, 26, 46, 0.95));
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 5;
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
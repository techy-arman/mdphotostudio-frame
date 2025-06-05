import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Hero carousel images (replace with actual hero images)
const carouselImages = [
  'https://www.studiomemorylane.com/wp-content/uploads/2019/06/Ethnic-Punjabi-wedding-couple-photography.jpg',
  'https://www.seasons5.com.au/wp-content/uploads/2023/07/Traditions-Punjabi-Wedding.jpg',
  './media/images/img1.jpg',
  './media/images/img6.jpg'
];


const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImage((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImage((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Preload images for smoother transitions
  useEffect(() => {
    carouselImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      <HeroContainer>
        <HeroCarousel>
          <AnimatePresence 
            initial={false}
            mode="sync"
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: { duration: 0.8, ease: "easeInOut" }
              }}
              exit={{ 
                opacity: 0,
                transition: { duration: 0.8, ease: "easeInOut" }
              }}
              className="carousel-image"
            >
              <CarouselImageInner style={{ backgroundImage: `url(${carouselImages[currentImage]})` }} />
            </motion.div>
          </AnimatePresence>
          
          <CarouselButton className="left" onClick={prevImage} disabled={isAnimating}>
            <FaChevronLeft />
          </CarouselButton>
          
          <CarouselButton className="right" onClick={nextImage} disabled={isAnimating}>
            <FaChevronRight />
          </CarouselButton>
          
          <CarouselIndicators>
            {carouselImages.map((_, index) => (
              <CarouselDot 
                key={index} 
                active={index === currentImage}
                onClick={() => {
                  if (isAnimating || index === currentImage) return;
                  setIsAnimating(true);
                  setCurrentImage(index);
                }}
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
                  <HighlightItem aria-label="Wedding Photography Services">👰 Wedding Photography</HighlightItem>
                  <HighlightItem aria-label="Pre-Wedding Photography Shoots">💫 Pre-Wedding Shoots</HighlightItem>
                  <HighlightItem aria-label="Wedding Videography Services">🎬 Wedding Videography</HighlightItem>
                  <HighlightItem aria-label="Live Streaming Services">📺 Live Streaming</HighlightItem>
                </HighlightServices>
              </motion.div>
            </HeroContent>
          </div>
        </HeroOverlay>
      </HeroContainer>
    </>
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
  }
`;

const CarouselImageInner = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  will-change: transform; /* Hardware acceleration hint */
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

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
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
  background-color: ${props => props.active ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.5)'};
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
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
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
  color: var(--white);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  span {
    color: var(--primary-color);
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
  color: var(--white);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  opacity: 0.95;
  
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
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--primary-color);
  color: var(--white);
  padding: 8px 16px;
  border-radius: 30px;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
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

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  max-width: 80%;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

export default Hero; 
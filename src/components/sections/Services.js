import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCamera, FaVideo, FaPhotoVideo, FaGlobe, FaBook, FaPortrait, FaImages, FaLayerGroup, FaMugHot, FaTshirt, FaBed } from 'react-icons/fa';

const services = [
  { id: 1, name: 'Pre-Wedding Photography', icon: <FaCamera /> },
  { id: 2, name: 'Wedding Photography', icon: <FaCamera /> },
  { id: 3, name: 'Wedding Videography', icon: <FaVideo /> },
  { id: 4, name: 'Live Streaming', icon: <FaGlobe /> },
  { id: 5, name: 'Album Designing', icon: <FaBook /> },
  { id: 6, name: 'Video Editing', icon: <FaPhotoVideo /> },
  { id: 7, name: 'Fancy Photo Frames', icon: <FaImages /> },
  { id: 8, name: 'Photo Lamination', icon: <FaLayerGroup /> },
  { id: 9, name: 'Mug Printing', icon: <FaMugHot /> },
  { id: 10, name: 'T-Shirt Printing', icon: <FaTshirt /> },
  { id: 11, name: 'Pillow Printing', icon: <FaBed /> },
  { id: 12, name: 'Passport Size Photos', icon: <FaPortrait /> }
];

const Services = () => {
  return (
    <ServicesSection id="services">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 id="service">Our Services</h2>
          <p>Comprehensive photography and printing solutions</p>
        </motion.div>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard>
                <IconWrapper>
                  {service.icon}
                </IconWrapper>
                <ServiceName>{service.name}</ServiceName>
              </ServiceCard>
            </motion.div>
          ))}
        </ServicesGrid>
      </div>
    </ServicesSection>
  );
};

const ServicesSection = styled.section`
  background-color: var(--dark-secondary);
  
  .section-title p {
    color: var(--dark-gray);
    font-size: 1.1rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }
`;

const ServiceCard = styled.div`
  background-color: var(--dark-light);
  border-radius: 10px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
    border-color: var(--accent-yellow);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--accent-yellow);
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 15px;
  }
`;

const ServiceName = styled.h3`
  font-size: 1.2rem;
  color: var(--white);
  font-weight: 600;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const AdditionalServices = styled.div`
  background-color: var(--dark-light);
  border-radius: 10px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  h3 {
    color: var(--white);
    font-size: 1.5rem;
    margin-bottom: 25px;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background-color: var(--accent-yellow);
    }
  }
  
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;
    
    li {
      background-color: var(--dark-bg);
      padding: 10px 20px;
      border-radius: 5px;
      font-weight: 500;
      color: var(--text-color);
      border: 1px solid rgba(255, 255, 255, 0.05);
      
      @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 8px 16px;
      }
    }
    
    @media (max-width: 768px) {
      gap: 15px;
    }
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export default Services; 
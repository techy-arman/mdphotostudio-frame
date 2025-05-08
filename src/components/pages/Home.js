import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Import sections
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Gallery from '../sections/Gallery';
import Products from '../sections/Products';

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Services />
      <Gallery />
      <Products />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export default Home; 
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMugHot, FaTshirt, FaBed, FaSdCard, FaHdd, FaMemory, FaMobile } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Mug Printing',
    description: 'Custom photo mugs for gifts and memories',
    icon: <FaMugHot />,
    image: 'https://tse3.mm.bing.net/th?id=OIP.ThhC5RKg6s8BUBQq91sNCQHaDr&pid=Api&P=0&h=180',
  },
  {
    id: 2,
    name: 'T-Shirt Printing',
    description: 'Personalized T-shirts with your favorite photos',
    icon: <FaTshirt />,
    image: 'https://tse2.mm.bing.net/th?id=OIP.toIrKugzJKghuuC7il0RsAHaEK&pid=Api&P=0&h=180',
  },
  {
    id: 3,
    name: 'Pillow Printing',
    description: 'Custom photo pillows for your home decor',
    icon: <FaBed />,
    image: 'https://tse4.mm.bing.net/th?id=OIP.pKMBoMPiSur371hAdP5acQHaEJ&pid=Api&P=0&h=180',
  },
  {
    id: 4,
    name: 'Mobile Accessories',
    description: 'Wide range of mobile accessories',
    icon: <FaMobile />,
    image: 'https://tse1.mm.bing.net/th?id=OIP.ENnNCrmZJkRBYJWdJy1XogHaEf&pid=Api&P=0&h=180',
  },
  {
    id: 5,
    name: 'Memory Cards',
    description: 'High-quality memory cards for your devices',
    icon: <FaSdCard />,
    image: 'https://tse1.mm.bing.net/th?id=OIP.T8oXh3nh5sjcivgG3f41KwHaEd&pid=Api&P=0&h=180',
  },
  {
    id: 6,
    name: 'Hard Drives',
    description: 'Reliable hard drives for data storage',
    icon: <FaHdd />,
    image: 'https://tse3.mm.bing.net/th?id=OIP.z-DITbRfDHcTVSqQzHMDQAHaE5&pid=Api&P=0&h=180',
  },
  {
    id: 7,
    name: 'Pen Drives',
    description: 'Variety of pen drives for your storage needs',
    icon: <FaMemory />,
    image: 'https://tse1.mm.bing.net/th?id=OIP.RpAsq6EaSTUVxcQ-HKUjewHaGV&pid=Api&P=0&h=180',
  }
];

const Products = () => {
  return (
    <ProductsSection>
      <div className="container pt-12">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Our Products</h2>
          <p>High-quality printing and accessories</p>
        </motion.div>
        
        <ProductsContainer>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard>
                <ProductImage>
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <IconWrapper>
                    {product.icon}
                  </IconWrapper>
                </ProductImage>
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductDescription>{product.description}</ProductDescription>
                </ProductInfo>
              </ProductCard>
            </motion.div>
          ))}
        </ProductsContainer>
      </div>
    </ProductsSection>
  );
};

const ProductsSection = styled.section`
  background-color: var(--dark-secondary);
  
  .section-title p {
    color: var(--dark-gray);
    font-size: 1.1rem;
  }
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  padding: 0px 0px 80px 0px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
`;

const ProductCard = styled.div`
  background-color: var(--dark-light);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  height: 100%;
  border: 1px solid transparent;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: var(--accent-yellow);
    border: 1px solid  #b5554d;
    
    img {
      transform: scale(1.05);
    }
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  right: 20px;
  background-color: var(--accent-yellow);
  color: var(--primary-dark);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 2;
  transition: transform 0.3s;
  
  ${ProductCard}:hover & {
    transform: scale(1.1) rotate(10deg);
  }
`;

const ProductInfo = styled.div`
  padding: 30px 20px 20px;
  text-align: center;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #b5554d;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  color: var(--dark-gray);
  font-size: 0.9rem;
  line-height: 1.5;
`;

export default Products; 
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
    image: 'https://images.unsplash.com/photo-1506784242126-2a0b2bc9a14c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVnJTIwcHJpbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'T-Shirt Printing',
    description: 'Personalized T-shirts with your favorite photos',
    icon: <FaTshirt />,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0JTIwcHJpbnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Pillow Printing',
    description: 'Custom photo pillows for your home decor',
    icon: <FaBed />,
    image: 'https://images.unsplash.com/photo-1591105327764-4c4b76f9e6a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpbGxvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    name: 'Mobile Accessories',
    description: 'Wide range of mobile accessories',
    icon: <FaMobile />,
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    name: 'Memory Cards',
    description: 'High-quality memory cards for your devices',
    icon: <FaSdCard />,
    image: 'https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbW9yeSUyMGNhcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 6,
    name: 'Hard Drives',
    description: 'Reliable hard drives for data storage',
    icon: <FaHdd />,
    image: 'https://images.unsplash.com/photo-1617471346061-5d329ab9c574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFyZCUyMGRyaXZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 7,
    name: 'Pen Drives',
    description: 'Variety of pen drives for your storage needs',
    icon: <FaMemory />,
    image: 'https://images.unsplash.com/photo-1588186939549-c087e0796efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNiJTIwZHJpdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  }
];

const Products = () => {
  return (
    <ProductsSection>
      <div className="container">
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
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: var(--accent-yellow);
    
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
  color: var(--white);
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  color: var(--dark-gray);
  font-size: 0.9rem;
  line-height: 1.5;
`;

export default Products; 
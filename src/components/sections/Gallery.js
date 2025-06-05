import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Sample gallery images - replace with actual images from the studio
const galleryImages = [
  {
    id: 1,
    category: 'wedding',
    url: 'https://image.wedmegood.com/resized/800X/uploads/images/ef136c9feffe407488f18f5d46dfcac3realwedding/0B1A9063.jpg',
    alt: 'Wedding photo shoot'
  },
  {
    id: 2,
    category: 'pre-wedding',
    url: 'https://wallpapercave.com/wp/wp8057563.jpg',
    alt: 'Pre-wedding photo shoot'
  },
  {
    id: 3,
    category: 'wedding',
    url: 'https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-92783752/92783752.jpg',
    alt: 'Wedding ceremony'
  },
  {
    id: 4,
    category: 'pre-wedding',
    url: './media/images/img3.jpg',
    alt: 'Pre-wedding couple shoot'
  },
  {
    id: 5,
    category: 'wedding',
    url: 'https://media-api.xogrp.com/images/f4570601-a1e6-4802-86fb-ad9e988066fe~rs_768.h',
    alt: 'Wedding photo'
  },
  {
    id: 6,
    category: 'candid',
    url: 'https://5.imimg.com/data5/SELLER/Default/2022/3/FK/RE/HL/3320722/culture-5897051-1920-500x500.jpg',
    alt: 'Candid wedding shot'
  },
  {
    id: 7,
    category: 'candid',
    url: 'https://3.bp.blogspot.com/-Si6613CQRac/WFA-74zUJCI/AAAAAAAAC30/uXD62hG0HJYwcVBKGWp4jq5deIuMZt2VgCLcB/s1600/Beautiful%2BIndian%2BPunjabi%2BGirls%2BWedding%2BWallpaper%2B%252814%2529.jpg',
    alt: 'Candid moment'
  },
  {
    id: 8,
    category: 'pre-wedding',
    url: 'https://i.ytimg.com/vi/-j7pOPYD9Vs/maxresdefault.jpg',
    alt: 'Engagement photo'
  }
];

const categories = ['all', 'wedding', 'pre-wedding', 'candid'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <GallerySection id="gallery">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Our Gallery</h2>
          <p>Memories captured beautifully</p>
        </motion.div>

        <FilterContainer>
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FilterButton 
                active={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </FilterButton>
            </motion.div>
          ))}
        </FilterContainer>

        <MasonryGrid>
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="masonry-item"
                onClick={() => openModal(image)}
              >
                <GalleryImage>
                  <img src={image.url} alt={image.alt} loading="lazy" />
                  <Overlay>
                    <div>
                      <span>{image.category}</span>
                    </div>
                  </Overlay>
                </GalleryImage>
              </motion.div>
            ))}
          </AnimatePresence>
        </MasonryGrid>
      </div>
      
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <Modal
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.url} alt={selectedImage.alt} />
              <CloseButton onClick={closeModal}>&times;</CloseButton>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </GallerySection>
  );
};

const GallerySection = styled.section`
  background-color: var(--dark-bg);
  
  .section-title p {
    color: var(--dark-gray);
    font-size: 1.1rem;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 40px;
`;

const FilterButton = styled.button`
  background-color: ${({ active }) => active ? '#000' : 'transparent'};
  color: ${({ active }) => active ? 'var(--primary-dark)' : 'var(--text-color)'};
  border: 2px solid var(--accent-yellow);
  padding: 8px 20px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-3px);
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 6px 16px;
  }
`;

const MasonryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
  gap: 20px;
  
  .masonry-item {
    cursor: pointer;
    overflow: hidden;
    
    &:nth-child(3n + 1) {
      grid-row: span 2;
    }
    
    &:nth-child(4n + 1) {
      grid-column: span 2;
    }
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 200px;
    
    .masonry-item {
      &:nth-child(4n + 1) {
        grid-column: auto;
      }
    }
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 250px;
    
    .masonry-item {
      &:nth-child(3n + 1) {
        grid-row: auto;
      }
    }
  }
`;

const GalleryImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid transparent;
  transition: border-color 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  
  &:hover {
    border-color: var(--accent-yellow);
    
    img {
      transform: scale(1.05);
    }
    
    div {
      opacity: 1;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(26, 26, 46, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  
  div {
    text-align: center;
    
    span {
      display: inline-block;
      background-color: var(--accent-yellow);
      color: var(--primary-dark);
      padding: 5px 15px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 0.9rem;
      text-transform: uppercase;
    }
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 20px;
  backdrop-filter: blur(8px);
  
  .modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    
    img {
      max-width: 100%;
      max-height: 90vh;
      display: block;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(0, 0, 0, 0.5);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
  
  &:hover {
    color: var(--accent-yellow);
    transform: scale(1.1);
  }
`;

export default Gallery; 
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Sample gallery images - replace with actual images from the studio
const galleryImages = [
  {
    id: 1,
    category: 'wedding',
    url: 'https://images.unsplash.com/photo-1519741347686-c1e331c20a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    alt: 'Wedding photo shoot'
  },
  {
    id: 2,
    category: 'pre-wedding',
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    alt: 'Pre-wedding photo shoot'
  },
  {
    id: 3,
    category: 'wedding',
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    alt: 'Wedding ceremony'
  },
  {
    id: 4,
    category: 'pre-wedding',
    url: 'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    alt: 'Pre-wedding couple shoot'
  },
  {
    id: 5,
    category: 'wedding',
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    alt: 'Wedding photo'
  },
  {
    id: 6,
    category: 'candid',
    url: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    alt: 'Candid wedding shot'
  },
  {
    id: 7,
    category: 'candid',
    url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    alt: 'Candid moment'
  },
  {
    id: 8,
    category: 'pre-wedding',
    url: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
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
  background-color: ${({ active }) => active ? 'var(--primary-color)' : 'var(--white)'};
  color: ${({ active }) => active ? 'var(--white)' : 'var(--primary-color)'};
  border: 2px solid var(--primary-color);
  padding: 8px 20px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: var(--primary-color);
    color: var(--white);
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
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  
  &:hover {
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
  background: rgba(44, 44, 84, 0.7);
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
      color: var(--primary-color);
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
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 20px;
  backdrop-filter: blur(5px);
  
  .modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    
    img {
      max-width: 100%;
      max-height: 90vh;
      display: block;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
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
`;

export default Gallery; 
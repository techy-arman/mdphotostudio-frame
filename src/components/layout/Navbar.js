import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaBars, FaTimes, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <StyledHeader scrolled={scrolled}>
      <div className="container">
        <Nav>
          <Logo scrolled={scrolled}>
            <Link to="/">
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                MD Photo Studio <span>&</span> Frame
              </motion.h1>
            </Link>
          </Logo>

          <MenuToggle scrolled={scrolled} onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuToggle>

          <Menu isOpen={isOpen}>
            <MenuItem scrolled={scrolled}>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </MenuItem>
            <MenuItem scrolled={scrolled}>
              <a href="#service" onClick={(e) => {
                e.preventDefault();
                scrollToSection('service');
              }}>Services</a>
            </MenuItem>
            <MenuItem scrolled={scrolled}>
              <a href="#gallery" onClick={(e) => {
                e.preventDefault();
                scrollToSection('gallery');
              }}>Gallery</a>
            </MenuItem>
            <MenuItem scrolled={scrolled}>
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}>Contact</a>
            </MenuItem>
          </Menu>
        </Nav>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ scrolled }) => (scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent')};
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: all 0.3s ease-in-out;
  padding: ${({ scrolled }) => (scrolled ? '10px 0' : '20px 0')};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.div`
  z-index: 2;
  
  h1 {
    font-size: 1.5rem;
    color: ${({ scrolled }) => (scrolled ? '#b5554d' : 'var(--white)')};
    text-shadow: ${({ scrolled }) => (scrolled ? 'none' : '2px 2px 4px rgba(0, 0, 0, 0.5)')};
    
    span {
      color: ${({ scrolled }) => (scrolled ? 'var(--primary-color)' : 'var(--primary-color)')};
    }
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const MenuToggle = styled.div`
  display: none;
  z-index: 2;
  
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 1.5rem;
    color: ${({ scrolled }) => (scrolled ? '#b5554d' : 'var(--white)')};
    
    /* Ensure toggle is visible on light background when scrolled */
    svg {
      color: ${({ scrolled }) => (scrolled ? '#b5554d' : 'var(--white)')};
      filter: ${({ scrolled }) => (scrolled ? 'none' : 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5))')};
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    flex-direction: column;
    background-color: var(--light-blush);
    padding: 100px 30px 30px;
    z-index: 1;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    justify-content: flex-start;
    gap: 20px;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
`;

const MenuItem = styled.li`
  a {
    color: ${({ scrolled }) => (scrolled ? '#b5554d' : '#fff')};
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    position: relative;
    padding: 5px 0;
    text-shadow: ${({ scrolled }) => (scrolled ? 'none' : '1px 1px 2px rgba(0, 0, 0, 0.5)')};
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${({ scrolled }) => (scrolled ? '#b5554d' : 'var(--primary-color)')};
      transition: width 0.3s;
    }
    
    &:hover::after {
      width: 100%;
    }

    @media (max-width: 768px) {
      color: #b5554d;
      text-shadow: none;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 20px;
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const SocialIcon = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--white);
    transition: all 0.3s;
    
    &:hover {
      background-color: var(--accent-yellow);
      color: var(--primary-dark);
      transform: translateY(-3px);
    }
  }
`;

export default Navbar; 
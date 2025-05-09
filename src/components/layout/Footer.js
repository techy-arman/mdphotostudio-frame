import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <div className="container">
        <FooterContent>
          <FooterInfo>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FooterLogo>MD Photo Studio <span>&</span> Frame</FooterLogo>
              <FooterAddress>
                <AddressItem>
                  <FaMapMarkerAlt />
                  <p>Shop No. 31, Ground Floor, Zirakpur Bazaar<br />Near JP Hospital, Zirakpur (PB)</p>
                </AddressItem>
                <AddressItem>
                  <FaWhatsapp />
                  <a href="https://wa.me/9779464786" target="_blank" rel="noopener noreferrer">
                    9779464786
                  </a>
                </AddressItem>
              </FooterAddress>
            </motion.div>
          </FooterInfo>

          <FooterSocial>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Connect With Us
            </motion.h3>
            <SocialIcons>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <SocialIcon>
                  <a href="https://wa.me/9779464786" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                  </a>
                </SocialIcon>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <SocialIcon>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </SocialIcon>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <SocialIcon>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                </SocialIcon>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <SocialIcon>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                  </a>
                </SocialIcon>
              </motion.div>
            </SocialIcons>
          </FooterSocial>
        </FooterContent>

        <FooterMap>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13716.171902028875!2d76.80954057775049!3d30.651323738546247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feeb1bf3a1dd7%3A0xac2ac7165f30b0a1!2sZirakpur%2C%20Punjab!5e0!3m2!1sen!2sin!4v1716037107046!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MD Photo Studio & Frame location"
            ></iframe>
          </motion.div>
        </FooterMap>

        <Copyright>
          <p>&copy; {new Date().getFullYear()} MD Photo Studio & Frame. All Rights Reserved.</p>
        </Copyright>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: var(--primary-dark);
  color: var(--white);
  padding: 60px 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterInfo = styled.div`
  line-height: 1.6;
`;

const FooterLogo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  
  span {
    color: var(--accent-yellow);
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FooterAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const AddressItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  
  svg {
    margin-top: 4px;
    color: var(--accent-yellow);
  }
  
  a {
    transition: color 0.3s;
    
    &:hover {
      color: var(--accent-yellow);
    }
  }
`;

const FooterSocial = styled.div`
  h3 {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialIcon = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--white);
    font-size: 1.2rem;
    transition: all 0.3s;
    
    &:hover {
      background-color: var(--accent-yellow);
      color: var(--primary-dark);
      transform: translateY(-5px);
    }
  }
`;

const FooterMap = styled.div`
  margin-top: 40px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const Copyright = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

export default Footer; 
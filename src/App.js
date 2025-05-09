import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Components
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        
        {/* Floating Action Buttons */}
        <div className="floating-actions-container">
          {/* WhatsApp Button - Left Side */}
          <motion.a
            href="https://wa.me/9779464786"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn whatsapp left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ left: '30px', right: 'auto' }}
          >
            <FaWhatsapp />
          </motion.a>
          
          {/* Phone Button - Right Side */}
          <motion.a
            href="tel:9779464786"
            className="floating-btn phone right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ right: '30px', left: 'auto' }}
          >
            <FaPhone />
          </motion.a>
        </div>
      </div>
    </Router>
  );
}

export default App;

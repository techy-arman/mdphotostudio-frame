import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Components
import Home from './components/pages/Home';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  // Simple animation that repeats
  const shakeAnimation = {
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 2.5
    }
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        
        {/* Floating Phone Button */}
        {isVisible && (
          <motion.a
            href="tel:9779464786"
            className="floating-phone"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              rotate: [0, -10, 10, -10, 0]
            }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 15,
              rotate: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 2.5
              }
            }}
            whileHover={{ 
              scale: 1.2,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaPhone />
          </motion.a>
        )}
      </div>
    </Router>
  );
}

export default App;

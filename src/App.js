import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [homeworkExists, setHomeworkExists] = useState(false);
  
  return (
    <div className="container">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Schrödinger's Dog Ate My Homework
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Confused Dog
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Wait... was there ever homework?
      </motion.p>

      <div className="toggle-switch-container">
        <label>Toggle Homework Existence:</label>
        <div className="toggle-switch">
          <input 
            type="checkbox" 
            checked={homeworkExists} 
            onChange={() => setHomeworkExists(!homeworkExists)} 
          />
          <span></span>
        </div>
      </div>
      
      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.95 }}
        onClick={() => alert(homeworkExists ? 'Homework exists!' : 'No homework... maybe?')}
      >
        Check Homework Status
      </motion.button>
      
      <footer>
        <p>Powered by Schrödinger's Dog</p>
      </footer>
    </div>
  );
}

export default App;

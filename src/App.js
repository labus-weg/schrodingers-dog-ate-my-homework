import React from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion

function App() {
  return (
    <div className="App" style={{ textAlign: "center", padding: "50px" }}>
      <h1>Schrödinger's Dog Ate My Homework</h1>
      <motion.button
        whileHover={{ scale: 1.2, rotate: 10, backgroundColor: '#FF6347' }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{
          padding: '10px 20px',
          fontSize: '1.5rem',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: '#3f51b5',
          color: 'white'
        }}
      >
        Trigger Uncertainty
      </motion.button>
    </div>
  );
}

export default App;

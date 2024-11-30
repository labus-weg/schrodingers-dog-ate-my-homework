import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  // State for the dog quotes
  const [quote, setQuote] = useState('');

  // Quantum question array
  const quantumQuestions = [
    "Did the dog exist before the homework?",
    "Can homework be in two places at once?",
    "What if the dog is both eating and not eating the homework?",
    "Is the homework in a superposition of eaten and untouched?",
    "What would happen if the dog observed the homework?"
  ];

  // State for the quantum question
  const [quantumQuestion, setQuantumQuestion] = useState('');

  // Function to generate a random quote
  const generateQuote = () => {
    const quotes = [
      "The dog ate the homework, but can it eat the truth?",
      "Quantum mechanics: the homework exists and doesn't exist at the same time.",
      "The dog is confused, but can we be too?"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  // Function to generate a random quantum question
  const generateQuantumQuestion = () => {
    const randomIndex = Math.floor(Math.random() * quantumQuestions.length);
    setQuantumQuestion(quantumQuestions[randomIndex]);
  };

  return (
    <div className="App">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        style={{ fontSize: '2.5rem', color: '#3f51b5', marginTop: '50px' }}
      >
        Schrödinger's Dog Ate My Homework
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.2, rotate: 10, backgroundColor: '#4CAF50' }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{
          padding: '10px 20px',
          fontSize: '1.5rem',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: '#8e44ad',
          color: 'white',
          marginTop: '20px'
        }}
        onClick={generateQuote} // Trigger the quote generation
      >
        Get Dog Quote
      </motion.button>

      {quote && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            marginTop: '20px',
            fontSize: '1.2rem',
            color: '#333',
            fontStyle: 'italic'
          }}
        >
          <p>{quote}</p>
        </motion.div>
      )}

      {/* Quantum Question Button */}
      <motion.button
        whileHover={{ scale: 1.2, rotate: 10, backgroundColor: '#4CAF50' }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{
          padding: '10px 20px',
          fontSize: '1.5rem',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: '#8e44ad',
          color: 'white',
          marginTop: '20px'
        }}
        onClick={generateQuantumQuestion} // Trigger quantum question change
      >
        Enter Quantum Uncertainty
      </motion.button>

      {/* Display the Quantum Question */}
      {quantumQuestion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            marginTop: '20px',
            fontSize: '1.2rem',
            color: '#333',
            fontStyle: 'italic'
          }}
        >
          <p>{quantumQuestion}</p>
        </motion.div>
      )}
    </div>
  );
}

export default App;

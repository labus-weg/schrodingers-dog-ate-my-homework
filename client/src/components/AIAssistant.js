// src/components/AIAssistant.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AIAssistant = () => {
  const [aiResponse, setAIResponse] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/ai-suggestions')
      .then(response => {
        setAIResponse(response.data.suggestion);
      })
      .catch(err => console.error("Error fetching AI suggestion:", err));
  }, []);

  return (
    <div>
      <h2>AI Assistant</h2>
      <p>{aiResponse || 'Loading AI suggestion...'}</p>
      <button onClick={() => window.location.reload()}>Get Another Suggestion</button>
    </div>
  );
};

export default AIAssistant;

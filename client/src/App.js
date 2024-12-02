// src/App.js
import React from 'react';
import './App.css';
import JobDashboard from './components/JobDashboard';  // Import the component correctly
import AIAssistant from './components/AIAssistant';  // Import the component correctly

function App() {
  return (
    <div className="App">
      <h1>Schrödinger's Dog Ate My Homework</h1>
      <JobDashboard />  {/* Show job listings */}
      <AIAssistant />  {/* Show AI suggestions */}
    </div>
  );
}

export default App;

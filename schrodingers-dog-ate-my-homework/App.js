// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import DailyTask from './components/DailyTask';
import Meme from './components/Meme';
import './App.css';

function App() {
  // You can later expand this logic with dynamic content based on mood, etc.
  const [task, setTask] = useState("Solve a binary search problem.");
  const [meme, setMeme] = useState({
    image: "https://via.placeholder.com/400x300",
    altText: "A relatable meme for today."
  });

  return (
    <div className="App">
      <Header />
      <DailyTask task={task} />
      <Meme image={meme.image} altText={meme.altText} />
    </div>
  );
}

export default App;

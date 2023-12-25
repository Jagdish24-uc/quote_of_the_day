// src/App.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDailyQuote } from './redux/actions';
import Navigation from './Navigation';
import CategoryInput from './CategoryInput';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const dailyQuote = useSelector((state) => state.dailyQuote);
  const [selectedCategory, setSelectedCategory] = useState('inspire');
  const [backgroundColor, setBackgroundColor] = useState(generateRandomColor());

  function generateRandomColor() {
    // Generate a random hexadecimal color code
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  const fetchNewQuote = async () => {
    try {
      const response = await fetch(`https://api.quotable.io/random?category=${selectedCategory}`);
      const data = await response.json();
      dispatch(setDailyQuote(data));
      setBackgroundColor(generateRandomColor()); // Change background color on new quote
    } catch (error) {
      console.error('Error fetching new quote:', error);
    }
  };

  useEffect(() => {
    fetchNewQuote();
  }, [selectedCategory]);

  return (
    <div className="App" style={{ backgroundColor }}>
      <Navigation />
      <h1>Daily Quote</h1>
      <CategoryInput onSelectCategory={setSelectedCategory} />
      <blockquote>
        <p>{dailyQuote.content}</p>
        <footer>{dailyQuote.author}</footer>
      </blockquote>
      <button onClick={fetchNewQuote}>Next Quote</button>
    </div>
  );
}

export default App;
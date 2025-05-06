import React from 'react'
import { useState,useEffect } from 'react';
import NavBar from './components/NavBar'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ExchangeTable from './pages/ExchangeTable';
import ErrorPage from './components/ErrorPage';
import About from './pages/About';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
<div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange-rates" element={<ExchangeTable />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="About" element={<About />} />
      </Routes>
    </div>
    
  )
}

export default App
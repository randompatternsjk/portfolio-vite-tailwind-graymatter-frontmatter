// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './styles/globals.css'; // Import global styles
import GoodWork from './pages/GoodWork';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check the initial theme preference
    return (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  useEffect(() => {
    // Apply the theme class to the document element
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.theme = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      {/* Film Grain Background */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="flex flex-col min-h-screen dark:bg-fadedblack bg-dominoivory text-fadedblack dark:text-dominoivory relative">
        {/* Navigation Bar */}
        <Navbar />

        {/* Dark Mode Toggle */}
        <div className="absolute bottom-4 left-1/2 z-50">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 text-dominoivory hover:text-fadedblack rounded outline-dashed dark:hover:outline-dominoivory dark:text-fadedblack hover:text-dominoivory transition duration-300 ease-in-out"
          >
            {isDarkMode ? 'Attention Business Person, Do not click this!' : 'Dweeb Mode: Activated!'}
          </button>
        </div>

        {/* Main Content */}
        <main className="flex-grow text-fadedblack dark:dominoivory relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/goodwork" element={<GoodWork />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./styles/globals.css"; // Import global styles
import GoodWork from "./pages/GoodWork";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check the initial theme preference
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    // Apply the theme class to the document element
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.theme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      {/* Film Grain Background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative flex h-full min-h-screen flex-col gap-8">
        {/* Main Content */}
        <main className="bg-fadedblack relative z-10 flex-grow">
          <Routes>
            {/* Separate Home and GoodWork into their own rows */}
            <Route
              path="/"
              element={
                <div className="flex w-full flex-col gap-2">
                  <div className="w-full">
                    <Home />
                  </div>
                  <div className="w-full">
                    <div className="text-dominoivory font-head text-center text-[4vw] uppercase">
                      Good Work
                    </div>
                    <GoodWork />

                    <div className="text-dominoivory font-head mt-20 mb-80 text-center text-3xl uppercase">
                      <a
                        href="https://jordan-keller.squarespace.com/work"
                        className="underline"
                      >
                        See more
                      </a>
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

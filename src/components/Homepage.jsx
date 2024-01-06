// MainLayout.jsx
import React, { useEffect, useState, useRef } from "react";
import { Navbar, Hero, StarsCanvas, BottomBar } from "./";
import { BrowserRouter as Router } from "react-router-dom";

const Homepage = ({ children }) => {
  const [showBottomBar, setShowBottomBar] = useState(false);
  const loadingBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const isAtBottom = scrollPosition + windowHeight >= documentHeight;

      setShowBottomBar(isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        {children}
        <div className="relative z-0">
          <StarsCanvas />
          {showBottomBar && <BottomBar />}
        </div>
      </div>
    </Router>
  );
};

export default Homepage;

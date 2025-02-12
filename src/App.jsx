import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Experience,
  BottomBar,
  Blogs,
  Error404,
} from './components';

const LandingPage = ({ showBottomBar }) => (
  <div className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
    <Works />
    <Experience />
    <Tech />
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
      {showBottomBar && <BottomBar />}
    </div>
  </div>
);

const BlogsPage = () => (
  <div className="relative z-0 bg-primary">
    <Blogs />
  </div>
);

const ErrorPage = () => (
  <div className="relative z-0 bg-primary">
    <Error404 />
  </div>
);

const App = () => {
  const [showBottomBar, setShowBottomBar] = useState(false);

  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    // Ensuring we correctly determine if the user is at the bottom
    setShowBottomBar(scrollPosition + windowHeight >= documentHeight - 1);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" element={<LandingPage showBottomBar={showBottomBar} />} />
        <Route path="/blog/:customSlug" element={<BlogsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;

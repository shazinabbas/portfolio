import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
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
} from "./components";
import LoadingBar from 'react-top-loading-bar';


const App = () => {
  const [showBottomBar, setShowBottomBar] = useState(false);
  const { progress } = useProgress();
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
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <LoadingBar color='#915eff' ref={loadingBarRef} /> 
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Experience />
        <Tech />
        
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          {showBottomBar && <BottomBar />}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useProgress } from "@react-three/drei";
import {
  About,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Experience,
  BottomBar,
} from "./components";

import { loader } from "./assets";


const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <video
        autoPlay
        loop
        muted
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      >
        <source src={loader} type="video/mp4" />
      </video>
    </div>
  );
};

const App = () => {
  const [showBottomBar, setShowBottomBar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { progress } = useProgress();

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

  useEffect(() => {
    if (progress === 100) {
      setIsLoading(false);
    }
  }, [progress]);

  if (isLoading) {
    return (
      <>
        <LoadingPage />
        <Preload3DObjects onComplete={() => setIsLoading(false)} />
      </>
    );
  }

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
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

const Preload3DObjects = ({ onComplete }) => {
  const { progress } = useProgress();

  useEffect(() => {
    // Simulating the loading of 3D objects
    const loadingTimeout = setTimeout(() => {
      onComplete();
    }, 3000); // Replace this with your actual loading logic

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return null;
};

export default App;

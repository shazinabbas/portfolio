import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
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
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { progress } = useProgress();

  useEffect(() => {
    // List of 3D object file paths in order of priority
    const objectPaths = ["./desktop_pc/scene.gltf", "./planet/scene.gltf"];

    const loader = new GLTFLoader();

    const loadObject = (path) => {
      return new Promise((resolve, reject) => {
        loader.load(
          path,
          (gltf) => {
            // Object loaded successfully
            resolve(gltf);
          },
          (progress) => {
            // Progress callback
            setLoadingProgress(progress.loaded / progress.total);
          },
          (error) => {
            // Error callback
            reject(error);
          }
        );
      });
    };

    const loadObjectsSequentially = async () => {
      try {
        for (let i = 0; i < objectPaths.length; i++) {
          await loadObject(objectPaths[i]);
          setLoadingProgress((i + 1) / objectPaths.length);
        }

        onComplete();
      } catch (error) {
        console.error("Error loading 3D objects:", error);
        // Handle error if needed
      }
    };

    loadObjectsSequentially();

    // Cleanup
    return () => {
      // Cancel any ongoing loading processes if necessary
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      onComplete();
    }
  }, [progress, onComplete]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${(loadingProgress * 100).toFixed(2)}%` }}
      ></div>
    </div>
  );
};

export default App;


import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Float } from '@react-three/drei';

import CanvasLoader from './Loader';

const ErrorComputer = ({ isMobile }) => {
  const computer = useGLTF('./error/scene.gltf');

  return (
    <mesh>
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}></Float>
      <hemisphereLight intensity={5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={isMobile ? [-100, 80, -10] : [-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [-1, -1, -2.1] : [0, -1, -1.25]}
        rotation={[2 * Math.PI, 0, 6.25]}
      />
    </mesh>
  );
};

const Error404 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.2}
            reverseOrbit={false}
          />
          <ErrorComputer isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default Error404;

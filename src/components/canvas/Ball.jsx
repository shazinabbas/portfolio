import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { random } from "maath";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  
  return (
    
    <Float speed={0.5} rotationIntensity={0.75} floatIntensity={8}>
      <ambientLight intensity={1.7} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#FFFFFF'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        
        <Decal
          // autoRotate
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          
        />
        <OrbitControls 
          autoRotate
          autoRotateSpeed={0.005}
          reverseOrbit={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5.3], near: 0.1, far: 100 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

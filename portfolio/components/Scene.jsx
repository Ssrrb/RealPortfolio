'use client';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Model from './Model'; // Import your Model component
import { useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';

export default function Index() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight); // Adjust as needed

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight); // Adjust as needed
    };

    window.addEventListener('resize', handleResize);

    // Initial call to set dimensions on mount
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas style={{ width: '100%', height: height, background: '#ffffff' }}>
      <directionalLight intensity={3} position={[0, 1, 0]} />
      <Environment preset="city" />
      <Model /> {/* Add the Model to the scene */}
    </Canvas>
  );
}

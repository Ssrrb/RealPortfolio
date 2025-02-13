'use client';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Model from './Model'; // Import your Model component

export default function Index() {
  return (
    <Canvas style={{ width: '100%', height: '500px', background: '#ffffff' }}>
      <directionalLight intensity={3} position={[0, 1, 0]} />
      <Environment preset="city" />
      <Model /> {/* Add the Model to the scene */}
    </Canvas>
  );
}

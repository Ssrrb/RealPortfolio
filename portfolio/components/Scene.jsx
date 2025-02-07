'use client';
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

export default function Index() {
  return (
    <Canvas style={{background: '#000000'}}>
        <directionalLight intensity={2} position={[0, 2, 3]}/>
        <Environment preset="city" />
    </Canvas>
  )
}
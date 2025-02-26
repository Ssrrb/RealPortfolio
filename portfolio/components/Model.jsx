import React, { useRef } from 'react';
import { useGLTF, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial } from "@react-three/drei";

export default function Model() {
  const { viewport } = useThree();
  const torus = useRef(null);
  const { nodes } = useGLTF("/medias/torrus.glb");

  // Compute a consistent scale factor based on the smaller viewport dimension.
  // Adjust the divisor (e.g., 10) to fine-tune your desired model size.
  const scaleFactor = Math.min(viewport.width, viewport.height) / 4;

  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.x += 0.005;
      torus.current.rotation.y += 0.005;
    }
  });

  return (
    <group scale={scaleFactor}>
      <Text 
        fontSize={0.2} 
        color="gray" 
        position={[0, 1.2, 0]} 
        style={{ 
          fontWeight: '600', 
          fontStyle: 'italic', 
          color: 'rgb(107 114 128)', 
        }}
      >
        SOFTWARE ENGINEER
      </Text>
      <Text 
        fontSize={0.4} 
        color="black" 
        style={{ fontFamily: 'NeueMontreal', fontWeight: 'bold', fontStyle: 'italic' }}
        position={[0, 0.2, 0]}
      >
        SEBASTIAN ROJAS
      </Text>
      <mesh ref={torus} {...nodes.Cube} geometry={nodes.Cube.geometry} position={[0, 0, 0]}>
        <MeshTransmissionMaterial {...{
          thickness: 0.2,
          roughness: 0,
          metalness: 4,
          transmission: 0.8,
          ior: 2.3,
          chromaticAberration: 0.02,
          backside: true,
          depthWrite:false
        }}/>
      </mesh>
    </group>
  );
}

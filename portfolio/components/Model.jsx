import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React from 'react'

export default function Model() {
  const { nodes } = useGLTF("/medias/torrus.glb");

  return (
    <group>
      {/* Ensure that you pass the correct geometry and material.
          The following assumes `nodes.Torrus002` contains these properties */}
      <mesh {...nodes.Cube002}>
        </mesh>
    </group>
  );
}

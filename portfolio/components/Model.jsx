import React, { useRef } from 'react';
import { useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from 'three';
import { Leva, useControls } from 'leva';

    export default function Model() {
        const { scene, viewport } = useThree();
        const torus = useRef(null);
        const { nodes } = useGLTF("/medias/torrus.glb");

        Leva({hidden:true});
        const materialProps = useControls({
            thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
            roughness: { value: 0, min: 0, max: 0, step: 0.1 },
            metalness: {value: 4 },
            transmission: {value: 0.8, min: 0, max: 1, step: 0.1},
            ior: { value: 2.3, min: 0, max: 3, step: 0.1 },
            chromaticAberration: { value: 0.02, min: 0, max: 1},
            backside: { value: true},
        })

        useFrame( () => {
            torus.current.rotation.x += 0.005
            torus.current.rotation.y += 0.005
        })

        return (
            <group scale={viewport.width/13} >
                <Text fontSize={0.2} color="gray" position={[0, 1.5, 0]} style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '0.75rem', fontWeight: '600', color: 'rgb(107 114 128)', marginBottom: '0.25rem' }}>
                    SOFTWARE ENGINEER
                </Text>
                <Text fontSize={0.9} color="black" style={{ fontFamily: 'NeueMontreal', fontWeight: 'bold', fontStyle: 'italic' }}>
                    SEBASTIAN ROJAS
                </Text>
                <mesh ref={torus} {...nodes.Cube} geometry={nodes.Cube.geometry} position={[0,0,0]}>
                    <MeshTransmissionMaterial {...materialProps}/>
                </mesh>
            </group>
        )
    }
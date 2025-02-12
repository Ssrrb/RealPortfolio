import React, { useRef } from 'react';
    import { useGLTF, Text } from "@react-three/drei";
    import { useFrame, useThree } from '@react-three/fiber';
    import { MeshTransmissionMaterial } from "@react-three/drei";
    import * as THREE from 'three';
    import { useControls } from 'leva';

    export default function Model() {
        const { scene, viewport } = useThree();
        const torus = useRef(null);
        const { nodes } = useGLTF("/medias/torrus.glb");


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
            torus.current.rotation.x += 0.015
            torus.current.rotation.y += 0.015
        })

        return (
            <group scale={viewport.width/10} >
                <Text  fontSize={0.7} color="black">
                    Sebastian R. Rojas
                </Text>
                <mesh scale={0.00001} ref={torus} {...nodes.Cube} position={[0,0,0]}>
                    <MeshTransmissionMaterial {...materialProps}/>
                </mesh>
            </group>
        )
    }

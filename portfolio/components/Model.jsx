import React, { useRef } from 'react';
import { useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


export default function Model() {
    const loader = new GLTFLoader();
    loader.load( '/medias/torrus.glb', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );
    const { nodes } = useGLTF("/medias/torrus.glb");
    const { viewport } = useThree()
    const torus = useRef(null);
    
    useFrame( () => {
        torus.current.rotation.x += 0.02
    })

    return (
        <group scale={viewport.width / 3.75} >
            <Text position={[0, 0, -1]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
                hello world!
            </Text>
            <mesh ref={torus} {...nodes.Cube}>
                <meshBasicMaterial/>
            </mesh>
        </group>
    )
}
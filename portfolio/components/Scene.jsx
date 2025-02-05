"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Model";

export default function Scene() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Model />
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}


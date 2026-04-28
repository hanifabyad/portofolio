"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { FloatingShapes } from "./FloatingShapes";

function SceneFallback() {
  return null;
}

export function HeroCanvas() {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{
          pointerEvents: "auto",
          background: "transparent",
        }}
      >
        <Suspense fallback={<SceneFallback />}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1.2}
            color="#fff8f0"
          />
          <pointLight position={[-4, 3, 2]} intensity={0.6} color="#F97316" />
          <pointLight position={[4, -2, 3]} intensity={0.3} color="#8899dd" />

          {/* Environment map for realistic reflections */}
          <Environment preset="city" />

          {/* 3D Shapes */}
          <FloatingShapes />
        </Suspense>
      </Canvas>
    </div>
  );
}

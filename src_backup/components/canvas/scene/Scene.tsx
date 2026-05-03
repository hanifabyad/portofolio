"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei";
import { VoxelRoom } from "./VoxelRoom";
import { Suspense } from "react";

export function Scene() {
  return (
    <div className="w-full h-screen bg-[#02020a]">
      <Canvas shadows dpr={[1, 2]}>
        {/* Adjusted camera for a wider view of the spread-out labels */}
        <PerspectiveCamera makeDefault position={[10, 8, 12]} fov={50} />
        
        <Suspense fallback={null}>
          {/* Environment & Background */}
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1.5} />
          <color attach="background" args={["#02020a"]} />
          <Environment preset="city" />

          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight 
            position={[5, 10, 5]} 
            intensity={1} 
            castShadow 
            shadow-mapSize={[1024, 1024]}
          />
          
          {/* Neon Accents */}
          <pointLight position={[1, 1, -1]} intensity={2} color="#00d4ff" distance={5} />
          <pointLight position={[-2, 1, -1]} intensity={2} color="#10b981" distance={5} />
          <pointLight position={[0, 2, -3]} intensity={2} color="#7c6af7" distance={5} />

          {/* Single Room Model with Hitboxes */}
          <VoxelRoom />

          <ContactShadows position={[0, -0.01, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
        </Suspense>

        <OrbitControls 
          enableDamping 
          dampingFactor={0.05} 
          minDistance={2} 
          maxDistance={15}
          maxPolarAngle={Math.PI / 2.1}
          makeDefault
          target={[0, 1, 0]} // Adjusted target for smaller scale
        />
      </Canvas>

      {/* Static Overlays - Cleaned up */}
      <div className="absolute top-10 left-10 z-10 pointer-events-none select-none">
      </div>

      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
    </div>
  );
}

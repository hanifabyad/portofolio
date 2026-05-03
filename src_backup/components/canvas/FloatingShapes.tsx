"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Text, Float, Wireframe } from "@react-three/drei";

function CyberShape({
  position,
  geometry,
  color,
  wireframeColor,
  scale = 1,
  speed = 1,
}: any) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.2 * speed;
    meshRef.current.rotation.y = t * 0.3 * speed;
  });

  const getGeometry = () => {
    switch (geometry) {
      case "box": return <boxGeometry args={[1, 1, 1]} />;
      case "octahedron": return <octahedronGeometry args={[1, 0]} />;
      case "torus": return <torusGeometry args={[1, 0.2, 16, 64]} />;
      case "cylinder": return <cylinderGeometry args={[0.5, 0.5, 2, 32]} />;
      default: return <icosahedronGeometry args={[1, 0]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={position}>
      <mesh ref={meshRef} scale={scale}>
        {getGeometry()}
        <meshStandardMaterial 
          color={color} 
          roughness={0.2} 
          metalness={0.8}
          transparent
          opacity={0.8}
        />
        {/* Adds a glowing wireframe over the solid shape */}
        <mesh scale={1.01}>
          {getGeometry()}
          <meshBasicMaterial color={wireframeColor} wireframe transparent opacity={0.3} />
        </mesh>
      </mesh>
    </Float>
  );
}

// Background grid floor
function CyberGrid() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, -5]}>
      <planeGeometry args={[50, 50, 40, 40]} />
      <meshBasicMaterial color="#00d4ff" wireframe transparent opacity={0.08} />
    </mesh>
  );
}

// Floating Tech Snippets
function FloatingCode({ position, text, color = "#10b981", delay = 0 }: any) {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={position}>
      <Text
        font="https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOlOV.woff"
        fontSize={0.25}
        color={color}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor={color}
      >
        {text}
      </Text>
    </Float>
  );
}

// Floating particles in the background
function Particles() {
  const particlesRef = useRef<THREE.Points>(null!);
  const count = 150;

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;
    }
    return positions;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    particlesRef.current.rotation.y = t * 0.02;
    particlesRef.current.position.y = Math.sin(t * 0.1) * 0.5;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00d4ff"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    // Parallax effect tied to mouse movement
    const { x, y } = state.pointer;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      x * 0.15,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -y * 0.1,
      0.05
    );
  });

  return (
    <group ref={groupRef}>
      <CyberGrid />
      
      {/* Main abstract focal points */}
      <CyberShape
        position={[3, 1, -2]}
        geometry="octahedron"
        color="#050510"
        wireframeColor="#00d4ff"
        scale={1.2}
        speed={0.8}
      />
      <CyberShape
        position={[-3.5, 0, -3]}
        geometry="torus"
        color="#050510"
        wireframeColor="#10b981"
        scale={0.8}
        speed={1.2}
      />
      <CyberShape
        position={[2, -2, -4]}
        geometry="box"
        color="#050510"
        wireframeColor="#7c6af7"
        scale={0.9}
        speed={0.5}
      />

      {/* Floating Code Snippets */}
      <FloatingCode position={[-2.5, 2.5, -2]} text="<Backend />" color="#00d4ff" />
      <FloatingCode position={[3.5, -0.5, -1]} text="{ Kotlin }" color="#7c6af7" />
      <FloatingCode position={[-4, -2, -3]} text="Docker.run()" color="#10b981" />
      <FloatingCode position={[1.5, 3, -4]} text="SELECT * FROM Future" color="#0ea5e9" />

      {/* Background ambient particles */}
      <Particles />
    </group>
  );
}

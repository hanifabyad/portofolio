"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingShapeProps {
  position: [number, number, number];
  geometry: "icosahedron" | "octahedron" | "torus" | "torusKnot" | "dodecahedron";
  color: string;
  scale?: number;
  speed?: number;
  rotationAxis?: [number, number, number];
  floatAmplitude?: number;
  floatSpeed?: number;
}

function FloatingShape({
  position,
  geometry,
  color,
  scale = 1,
  speed = 1,
  rotationAxis = [1, 1, 0],
  floatAmplitude = 0.3,
  floatSpeed = 1,
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const initialY = position[1];
  const timeOffset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Gentle floating motion
    meshRef.current.position.y =
      initialY + Math.sin(t * floatSpeed + timeOffset) * floatAmplitude;

    // Slow rotation
    meshRef.current.rotation.x += 0.003 * speed * rotationAxis[0];
    meshRef.current.rotation.y += 0.004 * speed * rotationAxis[1];
    meshRef.current.rotation.z += 0.002 * speed * rotationAxis[2];
  });

  const renderGeometry = () => {
    switch (geometry) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "torus":
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      case "torusKnot":
        return <torusKnotGeometry args={[0.8, 0.25, 100, 16]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[1, 0]} />;
      default:
        return <icosahedronGeometry args={[1, 0]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        roughness={0.15}
        metalness={0.8}
        transparent
        opacity={0.85}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}

// Floating particles in the background
function Particles() {
  const particlesRef = useRef<THREE.Points>(null!);
  const count = 80;

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    particlesRef.current.rotation.y = t * 0.015;
    particlesRef.current.rotation.x = Math.sin(t * 0.01) * 0.05;
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
        size={0.05}
        color="#F97316"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// Wireframe ring element
function WireframeRing({
  position,
  rotation,
  scale = 1,
  color = "#F97316",
  speed = 0.5,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
}) {
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ringRef.current.rotation.z += 0.002 * speed;
    ringRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
  });

  return (
    <mesh ref={ringRef} position={position} rotation={rotation} scale={scale}>
      <torusGeometry args={[1.5, 0.01, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.3} />
    </mesh>
  );
}

export function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    // Subtle mouse parallax for the entire group
    const { x, y } = state.pointer;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      x * 0.08,
      0.02
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -y * 0.05,
      0.02
    );
  });

  return (
    <group ref={groupRef}>
      {/* Main accent shapes */}
      <FloatingShape
        position={[2.5, 1.2, -1]}
        geometry="icosahedron"
        color="#F97316"
        scale={0.6}
        speed={0.7}
        floatAmplitude={0.25}
        floatSpeed={0.8}
      />
      <FloatingShape
        position={[-2.8, -0.5, -2]}
        geometry="octahedron"
        color="#F97316"
        scale={0.45}
        speed={1.2}
        rotationAxis={[1, 0, 1]}
        floatAmplitude={0.35}
        floatSpeed={1.2}
      />
      <FloatingShape
        position={[3.5, -1.5, -3]}
        geometry="dodecahedron"
        color="#fb923c"
        scale={0.35}
        speed={0.5}
        rotationAxis={[0, 1, 1]}
        floatAmplitude={0.2}
        floatSpeed={0.6}
      />
      <FloatingShape
        position={[-3.2, 2, -2.5]}
        geometry="torus"
        color="#ea580c"
        scale={0.3}
        speed={0.9}
        rotationAxis={[1, 1, 1]}
        floatAmplitude={0.4}
        floatSpeed={1}
      />
      <FloatingShape
        position={[0.5, -2, -1.5]}
        geometry="torusKnot"
        color="#F97316"
        scale={0.25}
        speed={0.6}
        rotationAxis={[0, 1, 0]}
        floatAmplitude={0.15}
        floatSpeed={0.7}
      />
      {/* Smaller secondary shapes with muted colors */}
      <FloatingShape
        position={[-1.5, 1.8, -4]}
        geometry="icosahedron"
        color="#475569"
        scale={0.2}
        speed={0.4}
        floatAmplitude={0.18}
        floatSpeed={1.5}
      />
      <FloatingShape
        position={[4, 0.5, -5]}
        geometry="octahedron"
        color="#64748b"
        scale={0.25}
        speed={0.3}
        rotationAxis={[1, 0, 0]}
        floatAmplitude={0.22}
        floatSpeed={0.9}
      />

      {/* Wireframe rings */}
      <WireframeRing position={[0, 0.5, -3]} rotation={[0.5, 0, 0]} scale={1.5} speed={0.3} />
      <WireframeRing
        position={[-2, -1, -4]}
        rotation={[1, 0.5, 0]}
        scale={0.8}
        color="#64748b"
        speed={0.5}
      />

      {/* Floating particles */}
      <Particles />
    </group>
  );
}

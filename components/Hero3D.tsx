"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <Icosahedron ref={meshRef} args={[1, 16]} scale={1.8}>
        <MeshDistortMaterial
          color="#3b82f6"
          emissive="#1e3a8a"
          emissiveIntensity={0.5}
          wireframe={true}
          transparent={true}
          opacity={0.8}
          distort={0.4}
          speed={2}
        />
      </Icosahedron>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 5] }} gl={{ alpha: true }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" />
        <AnimatedMesh />
      </Canvas>
    </div>
  );
}

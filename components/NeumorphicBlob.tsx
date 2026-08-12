"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NeumorphicBlob() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    // Size it to container (we'll make it absolute and responsive in CSS)
    const size = 800; // Render at high res, scale down with CSS
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Make sure we only append once
    if (containerRef.current.children.length === 0) {
      containerRef.current.appendChild(renderer.domElement);
    } else {
      containerRef.current.replaceChild(renderer.domElement, containerRef.current.children[0]);
    }

    // Geometry
    const geometry = new THREE.IcosahedronGeometry(2, 32); // High poly for smooth deformation
    
    // Store original positions for deformation
    const positionAttribute = geometry.attributes.position;
    const vertex = new THREE.Vector3();
    const originalPositions: THREE.Vector3[] = [];
    for (let i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i);
      originalPositions.push(vertex.clone());
    }

    // Material (Neumorphic Glassy/Soft look)
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.2,
      transmission: 0.5, // Glass-like
      ior: 1.5,
      thickness: 1.0,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      side: THREE.DoubleSide
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Lighting to create neumorphic shading
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    // Light shadow (top left)
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    // Dark shadow (bottom right)
    const dirLight2 = new THREE.DirectionalLight(0xa0a5b0, 1.5); 
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    camera.position.z = 4.5;

    // Simple pseudo-random noise function for fluid displacement
    const noise = (x: number, y: number, z: number, time: number) => {
      return Math.sin(x * 1.5 + time) * Math.cos(y * 1.5 + time) * Math.sin(z * 1.5 + time);
    };

    // Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime() * 0.4; // Speed

      // Deform vertices
      const positions = geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const v = originalPositions[i];
        
        // Calculate displacement
        const displacement = noise(v.x, v.y, v.z, time) * 0.4; // Amplitude
        
        // Apply displacement
        const newPos = v.clone().add(v.clone().normalize().multiplyScalar(displacement));
        
        positions.setXYZ(i, newPos.x, newPos.y, newPos.z);
      }
      
      geometry.attributes.position.needsUpdate = true;
      geometry.computeVertexNormals(); // Crucial for lighting to look correct after deformation

      // Slow rotation
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full flex items-center justify-center opacity-70"
      style={{ 
        filter: "drop-shadow(10px 10px 30px rgba(0,0,0,0.08)) drop-shadow(-10px -10px 30px rgba(255,255,255,0.8))"
      }}
    >
      <style jsx global>{`
        canvas {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
}

'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  PerspectiveCamera,
  OrbitControls,
  Float,
  ContactShadows,
  Environment
} from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveProductModelProps {
  type: string;
  color?: string;
  metalness?: number;
  roughness?: number;
}

function Pipe({ type, color = '#cbd5e1', metalness = 1, roughness = 0.2 }: InteractiveProductModelProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  const material = useMemo(() => (
    <meshPhysicalMaterial
      color={color}
      metalness={metalness}
      roughness={roughness}
      envMapIntensity={2.5}
      clearcoat={1}
      clearcoatRoughness={0.1}
      emissive="#1e293b"
      emissiveIntensity={0.1}
    />
  ), [color, metalness, roughness]);

  const geometry = useMemo(() => {
    switch (type.toLowerCase()) {
      case 'valve':
        return (
          <group>
            <mesh castShadow>
              <boxGeometry args={[1, 1, 1]} />
              {material}
            </mesh>
            <mesh position={[0, 0.6, 0]} castShadow>
              <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
              {material}
            </mesh>
          </group>
        );
      case 'fitting':
        return (
          <mesh castShadow>
            <torusGeometry args={[0.5, 0.2, 16, 100, Math.PI / 2]} />
            {material}
          </mesh>
        );
      default: // Pipe
        return (
          <mesh ref={meshRef} castShadow rotation={[0, 0, Math.PI / 4]}>
            <cylinderGeometry args={[0.4, 0.4, 3, 64]} />
            {material}
          </mesh>
        );
    }
  }, [type, material]);

  return <>{geometry}</>;
}

export const InteractiveProductModel = ({ type, color, metalness, roughness }: InteractiveProductModelProps) => {
  return (
    <div className="w-full h-full min-h-[400px] cursor-grab active:cursor-grabbing">
      <Canvas
        shadows
        gl={{
          antialias: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.shadowMap.type = THREE.PCFShadowMap;
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 10]} intensity={2.5} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
        <pointLight position={[5, 5, -5]} intensity={0.5} color="#60a5fa" />

        <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.6}>
          <Pipe type={type} color={color} metalness={metalness} roughness={roughness} />
        </Float>

        <OrbitControls
          enableZoom={false}
          autoRotate={false}
          makeDefault
          rotateSpeed={0.5}
        />
        <Environment preset="city" />
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.3}
          scale={15}
          blur={3}
          far={4}
        />
      </Canvas>
    </div>
  );
};

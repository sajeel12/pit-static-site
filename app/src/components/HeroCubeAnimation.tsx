import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Floating Cube Component
interface FloatingCubeProps {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  size: number;
  speed: number;
  offset: number;
}

const FloatingCube = ({ position, rotation, color, size, speed, offset }: FloatingCubeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating motion
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + offset) * 0.4;
      meshRef.current.rotation.x = rotation[0] + state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = rotation[1] + state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.z = rotation[2] + state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <boxGeometry args={[size, size, size]} />
      <meshPhysicalMaterial
        color={color}
        transparent
        opacity={0.2}
        roughness={0.2}
        metalness={0.3}
        transmission={0.4}
        thickness={0.5}
      />
    </mesh>
  );
};

// Wireframe Cube Component
interface WireframeCubeProps {
  position: [number, number, number];
  size: number;
  color: string;
  speed: number;
  offset: number;
}

const WireframeCube = ({ position, size, color, speed, offset }: WireframeCubeProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + offset) * 0.3;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.08;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });

  const geometries = useMemo(() => {
    const half = size / 2;
    const vertices = [
      [-half, -half, -half], [half, -half, -half],
      [half, half, -half], [-half, half, -half],
      [-half, -half, half], [half, -half, half],
      [half, half, half], [-half, half, half],
    ];
    
    const lines = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ];
    
    return lines.map((line) => {
      const v1 = vertices[line[0]];
      const v2 = vertices[line[1]];
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute([...v1, ...v2], 3));
      return geometry;
    });
  }, [size]);

  return (
    <group ref={groupRef} position={position}>
      {geometries.map((geometry, i) => (
        <primitive key={i} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.4 }))} />
      ))}
    </group>
  );
};

// Scene Component
const Scene = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      // Subtle parallax
      groupRef.current.rotation.x = mouse.y * 0.03;
      groupRef.current.rotation.y = mouse.x * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Large solid cubes */}
      <FloatingCube
        position={[3.5, 1, -4]}
        rotation={[0.3, 0.4, 0]}
        color="#00b4d8"
        size={1.5}
        speed={0.4}
        offset={0}
      />
      <FloatingCube
        position={[-3, -1, -5]}
        rotation={[0.2, -0.3, 0.1]}
        color="#0891b2"
        size={1.2}
        speed={0.5}
        offset={2}
      />
      <FloatingCube
        position={[2, -2, -3]}
        rotation={[-0.2, 0.5, -0.1]}
        color="#22d3ee"
        size={0.9}
        speed={0.6}
        offset={4}
      />
      
      {/* Wireframe cubes */}
      <WireframeCube
        position={[-2, 2, -4]}
        size={1.8}
        color="#00b4d8"
        speed={0.3}
        offset={1}
      />
      <WireframeCube
        position={[4, -0.5, -5]}
        size={1.3}
        color="#0891b2"
        speed={0.45}
        offset={3}
      />
      <WireframeCube
        position={[-1, -1.5, -3]}
        size={1.0}
        color="#22d3ee"
        speed={0.55}
        offset={5}
      />
      
      {/* Small accent cubes */}
      <FloatingCube
        position={[0, 2.5, -2]}
        rotation={[0, 0, 0.2]}
        color="#67e8f9"
        size={0.5}
        speed={0.7}
        offset={2.5}
      />
      <FloatingCube
        position={[-1, 1, -2.5]}
        rotation={[0.1, 0, 0]}
        color="#00b4d8"
        size={0.4}
        speed={0.8}
        offset={1.5}
      />
      
      {/* Ambient Light */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
    </group>
  );
};

// Main Component
const HeroCubeAnimation = () => {
  const [webglSupported, setWebglSupported] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (!webglSupported || prefersReducedMotion) return null;

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroCubeAnimation;

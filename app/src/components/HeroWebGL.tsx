import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Points, Group, BufferAttribute, BufferGeometry } from 'three';

// Floating Orb Component
interface FloatingOrbProps {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
  offset: number;
}

const FloatingOrb = ({ position, color, size, speed, offset }: FloatingOrbProps) => {
  const meshRef = useRef<Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating motion
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + offset) * 0.3;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshPhysicalMaterial
        color={color}
        transparent
        opacity={0.15}
        roughness={0.1}
        metalness={0.1}
        transmission={0.6}
        thickness={0.5}
      />
    </mesh>
  );
};

// Particle Field Component
const ParticleField = () => {
  const pointsRef = useRef<Points>(null);
  
  const particles = useMemo(() => {
    const count = 80;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  const geometry = useMemo(() => {
    const geo = new BufferGeometry();
    geo.setAttribute('position', new BufferAttribute(particles, 3));
    return geo;
  }, [particles]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        color="#4589ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Main Scene Component
const Scene = () => {
  const groupRef = useRef<Group>(null);
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
      // Subtle parallax based on mouse
      groupRef.current.rotation.x = mouse.y * 0.02;
      groupRef.current.rotation.y = mouse.x * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating Orbs */}
      <FloatingOrb
        position={[4, 1, -2]}
        color="#0f62fe"
        size={1.2}
        speed={0.5}
        offset={0}
      />
      <FloatingOrb
        position={[-3, -1, -3]}
        color="#8a3ffc"
        size={0.8}
        speed={0.7}
        offset={2}
      />
      <FloatingOrb
        position={[2, -2, -4]}
        color="#4589ff"
        size={0.6}
        speed={0.9}
        offset={4}
      />
      <FloatingOrb
        position={[-4, 2, -2]}
        color="#0f62fe"
        size={0.5}
        speed={0.6}
        offset={1}
      />
      
      {/* Particle Field */}
      <ParticleField />
      
      {/* Ambient Light */}
      <ambientLight intensity={0.5} />
      
      {/* Directional Light */}
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
    </group>
  );
};

// Main HeroWebGL Component
const HeroWebGL = () => {
  const [webglSupported, setWebglSupported] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch {
      setWebglSupported(false);
    }

    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (!webglSupported || prefersReducedMotion) {
    return null;
  }

  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]} // Responsive pixel ratio
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroWebGL;

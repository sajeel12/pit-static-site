import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Points, Group, BufferAttribute, BufferGeometry } from 'three';
import * as THREE from 'three';

// ============================================
// PART 1: Floating Cubes (from Maximo, orange theme)
// ============================================
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

// ============================================
// PART 2: Gradient Planes (wave-motion, orange)
// ============================================
const vertexShader = `
  varying vec2 vUv;
  varying float vElevation;
  uniform float uTime;
  
  void main() {
    vUv = uv;
    vec3 pos = position;
    
    // Wave animation
    float elevation = sin(pos.x * 2.0 + uTime * 0.5) * 0.3;
    elevation += sin(pos.y * 1.5 + uTime * 0.3) * 0.2;
    pos.z += elevation;
    vElevation = elevation;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform float uOpacity;
  varying vec2 vUv;
  varying float vElevation;
  
  void main() {
    // Gradient based on UV and elevation
    float mixStrength = vUv.y + vElevation * 0.5;
    vec3 color = mix(uColor1, uColor2, mixStrength);
    
    // Edge fade
    float fadeX = smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x);
    float fadeY = smoothstep(0.0, 0.2, vUv.y) * smoothstep(1.0, 0.8, vUv.y);
    float alpha = uOpacity * fadeX * fadeY;
    
    gl_FragColor = vec4(color, alpha);
  }
`;

import { ShaderMaterial, DoubleSide } from 'three';

interface GradientPlaneProps {
  position: [number, number, number];
  rotation: [number, number, number];
  color1: string;
  color2: string;
  opacity: number;
  speed: number;
}

const GradientPlane = ({ position, rotation, color1, color2, opacity, speed }: GradientPlaneProps) => {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<ShaderMaterial>(null);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor1: { value: [0.976, 0.451, 0.086] },
    uColor2: { value: [0.957, 0.361, 0.055] },
    uOpacity: { value: opacity },
  }), [opacity]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime * speed;
    }
  });

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16) / 255,
      parseInt(result[2], 16) / 255,
      parseInt(result[3], 16) / 255,
    ] : [0, 0, 0];
  };

  uniforms.uColor1.value = hexToRgb(color1);
  uniforms.uColor2.value = hexToRgb(color2);

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <planeGeometry args={[6, 4, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
};

// ============================================
// PART 3: Particle Field (ember specs)
// ============================================
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
        color="#fb923c"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// ============================================
// MAIN SCENE
// ============================================
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
      groupRef.current.rotation.x = mouse.y * 0.03;
      groupRef.current.rotation.y = mouse.x * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Gradient Planes - Back Layer */}
      <GradientPlane
        position={[-2, 0, -3]}
        rotation={[0.2, 0.3, 0]}
        color1="#f97316"
        color2="#fb923c"
        opacity={0.18}
        speed={0.5}
      />
      <GradientPlane
        position={[2, -1, -4]}
        rotation={[-0.1, -0.4, 0.1]}
        color1="#ea580c"
        color2="#f97316"
        opacity={0.15}
        speed={0.7}
      />
      <GradientPlane
        position={[0, 1.5, -5]}
        rotation={[0.3, 0.2, -0.1]}
        color1="#f59e0b"
        color2="#f97316"
        opacity={0.12}
        speed={0.4}
      />
      <GradientPlane
        position={[-3, -2, -6]}
        rotation={[-0.2, 0.5, 0.2]}
        color1="#f97316"
        color2="#dc2626"
        opacity={0.1}
        speed={0.6}
      />

      {/* Floating Cubes - Middle Layer */}
      <FloatingCube
        position={[3.5, 1, -4]}
        rotation={[0.3, 0.4, 0]}
        color="#f97316"
        size={1.5}
        speed={0.4}
        offset={0}
      />
      <FloatingCube
        position={[-3, -1, -5]}
        rotation={[0.2, -0.3, 0.1]}
        color="#ea580c"
        size={1.2}
        speed={0.5}
        offset={2}
      />
      <FloatingCube
        position={[2, -2, -3]}
        rotation={[-0.2, 0.5, -0.1]}
        color="#fb923c"
        size={0.9}
        speed={0.6}
        offset={4}
      />
      <FloatingCube
        position={[0, 2.5, -2]}
        rotation={[0, 0, 0.2]}
        color="#fbbf24"
        size={0.5}
        speed={0.7}
        offset={2.5}
      />

      {/* Wireframe Cubes */}
      <WireframeCube
        position={[-2, 2, -4]}
        size={1.8}
        color="#f97316"
        speed={0.3}
        offset={1}
      />
      <WireframeCube
        position={[4, -0.5, -5]}
        size={1.3}
        color="#ea580c"
        speed={0.45}
        offset={3}
      />

      {/* Particles - Front Layer */}
      <ParticleField />

      {/* Ambient Light */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
    </group>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================
const HeroServerContinuity = () => {
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

export default HeroServerContinuity;

import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, ShaderMaterial, DoubleSide, Group } from 'three';

// Custom shader for warm gradient planes
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
    uColor1: { value: [0.976, 0.451, 0.086] }, // #f97316
    uColor2: { value: [0.957, 0.361, 0.055] }, // #f45c04
    uOpacity: { value: opacity },
  }), [opacity]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime * speed;
    }
  });

  // Convert hex colors to RGB
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

// Scene Component
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
      groupRef.current.rotation.x = mouse.y * 0.05;
      groupRef.current.rotation.y = mouse.x * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Warm Gradient Blobs - Spheres for organic shape */}
      <GradientPlane
        position={[-3, 1, -4]}
        rotation={[0.3, 0.5, 0.2]}
        color1="#f97316"
        color2="#fb923c"
        opacity={0.2}
        speed={0.5}
      />
      <GradientPlane
        position={[3, -0.5, -5]}
        rotation={[-0.2, -0.6, 0.1]}
        color1="#ea580c"
        color2="#f97316"
        opacity={0.18}
        speed={0.7}
      />
      <GradientPlane
        position={[0.5, 2, -6]}
        rotation={[0.4, 0.3, -0.2]}
        color1="#f59e0b"
        color2="#f97316"
        opacity={0.15}
        speed={0.4}
      />
      <GradientPlane
        position={[-2, -2, -5]}
        rotation={[-0.3, 0.4, 0.3]}
        color1="#f97316"
        color2="#dc2626"
        opacity={0.12}
        speed={0.6}
      />
      
      {/* Ambient Light */}
      <ambientLight intensity={0.5} />
    </group>
  );
};

// Main Component
const HeroWarmGradient = () => {
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

export default HeroWarmGradient;

import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh, DoubleSide, Group } from 'three';

// ============================================================================
// HEX GRID FLOOR — subtle cloud/devops infrastructure pattern
// ============================================================================

const HexGrid = () => {
  const meshRef = useRef<Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor: { value: [0.29, 0.49, 0.95] }, // #4a7df3
    uOpacity: { value: 0.06 },
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime * 0.06;
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform vec3 uColor;
    uniform float uOpacity;
    uniform float uTime;
    varying vec2 vUv;

    float hexDist(vec2 p) {
      p = abs(p);
      float d = dot(p, normalize(vec2(1.0, 1.732)));
      return max(d, p.x);
    }

    vec4 hexGrid(vec2 uv) {
      vec2 r = vec2(1.0, 1.732);
      vec2 h = r * 0.5;
      vec2 a = mod(uv, r) - h;
      vec2 b = mod(uv - h, r) - h;
      vec2 gv = length(a) < length(b) ? a : b;
      float dist = hexDist(gv);
      float line = smoothstep(0.45, 0.5, dist) - smoothstep(0.5, 0.55, dist);
      float pulse = sin(uTime + uv.x * 3.0 + uv.y * 2.0) * 0.5 + 0.5;
      return vec4(uColor, line * uOpacity * (0.5 + pulse * 0.5));
    }

    void main() {
      vec2 uv = vUv * 12.0;
      vec4 grid = hexGrid(uv);
      // Fade toward edges
      float fade = smoothstep(0.0, 0.25, vUv.x) * smoothstep(1.0, 0.75, vUv.x);
      fade *= smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.75, vUv.y);
      gl_FragColor = vec4(grid.rgb, grid.a * fade);
    }
  `;

  return (
    <mesh ref={meshRef} position={[0, -2, -6]} rotation={[-Math.PI / 3, 0, 0]}>
      <planeGeometry args={[16, 10, 1, 1]} />
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

// ============================================================================
// DEVOPS INFINITY LOOP
// ============================================================================

const InfinityLoop = () => {
  const loopRef = useRef<THREE.Group>(null);

  // Lemniscate of Bernoulli parametric curve
  const curve = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const a = 1.6;
    const segments = 240;
    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * Math.PI * 2;
      const denom = 1 + Math.sin(t) ** 2;
      const x = (a * Math.cos(t)) / denom;
      const y = (a * Math.sin(t) * Math.cos(t)) / denom;
      points.push(new THREE.Vector3(x, y, 0));
    }
    return new THREE.CatmullRomCurve3(points, true);
  }, []);

  // Outer glow — thick, soft
  const outerTube = useMemo(() => {
    const geometry = new THREE.TubeGeometry(curve, 240, 0.09, 16, true);
    const material = new THREE.MeshBasicMaterial({
      color: '#0f62fe',
      transparent: true,
      opacity: 0.12,
    });
    return new THREE.Mesh(geometry, material);
  }, [curve]);

  // Main body — medium thickness with soft edge feel
  const mainTube = useMemo(() => {
    const geometry = new THREE.TubeGeometry(curve, 240, 0.05, 16, true);
    const material = new THREE.MeshBasicMaterial({
      color: '#4589ff',
      transparent: true,
      opacity: 0.28,
    });
    return new THREE.Mesh(geometry, material);
  }, [curve]);

  // Inner core — bright, thin, gives 3D depth illusion
  const innerCore = useMemo(() => {
    const geometry = new THREE.TubeGeometry(curve, 240, 0.018, 12, true);
    const material = new THREE.MeshBasicMaterial({
      color: '#a6c8ff',
      transparent: true,
      opacity: 0.55,
    });
    return new THREE.Mesh(geometry, material);
  }, [curve]);

  const dots = useMemo(() => {
    const sizes = [0.085, 0.055, 0.07, 0.045];
    return Array.from({ length: 4 }).map((_, i) => {
      const geometry = new THREE.SphereGeometry(sizes[i], 16, 16);
      const material = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? '#78a9ff' : '#ffffff',
        transparent: true,
        opacity: 0.75,
      });
      return { mesh: new THREE.Mesh(geometry, material), offset: i / 4 };
    });
  }, []);

  useFrame((state) => {
    if (loopRef.current) {
      // Very slow free-floating drift
      loopRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.12;
      loopRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.04) * 0.04;
      loopRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.03) * 0.05;

      // Slow-moving dots
      const time = state.clock.elapsedTime * 0.04;
      dots.forEach(({ mesh, offset }) => {
        const t = (time + offset) % 1;
        const point = curve.getPoint(t);
        mesh.position.copy(point);
        mesh.position.z = 0.06;
      });
    }
  });

  return (
    <group ref={loopRef} position={[2.8, 0, -1.5]}>
      <primitive object={outerTube} />
      <primitive object={mainTube} />
      <primitive object={innerCore} />
      {dots.map(({ mesh }, i) => (
        <primitive key={i} object={mesh} />
      ))}
    </group>
  );
};

// ============================================================================
// SCENE
// ============================================================================

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
      groupRef.current.rotation.x = mouse.y * 0.02;
      groupRef.current.rotation.y = mouse.x * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Subtle hex grid floor — container/service mesh metaphor */}
      <HexGrid />

      {/* Central DevOps infinity loop with tracking dots */}
      <InfinityLoop />

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
    </group>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const detectWebGL = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch {
    return false;
  }
};

const HeroCloudDevOpsAnimation = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const webglSupported = useMemo(() => detectWebGL(), []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
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

export default HeroCloudDevOpsAnimation;

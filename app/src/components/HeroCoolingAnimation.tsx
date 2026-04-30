import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ========================================================================
   HERO COOLING ANIMATION — "Thermal Extraction"
   ======================================================================== */

// --- Wireframe Box ---
interface WireframeBoxProps {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
  speed: number;
  offset: number;
  opacity?: number;
}

const WireframeBox = ({ position, size, color, speed, offset, opacity = 0.45 }: WireframeBoxProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * speed + offset) * 0.12;
    }
  });

  const geometries = useMemo(() => {
    const [w, h, d] = [size[0] / 2, size[1] / 2, size[2] / 2];
    const v = [
      [-w, -h, -d], [w, -h, -d], [w, h, -d], [-w, h, -d],
      [-w, -h, d], [w, -h, d], [w, h, d], [-w, h, d],
    ];
    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ];
    return edges.map((e) => {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute([...v[e[0]], ...v[e[1]]], 3));
      return geo;
    });
  }, [size]);

  return (
    <group ref={groupRef} position={position}>
      {geometries.map((geo, i) => (
        <primitive key={i} object={new THREE.Line(geo, new THREE.LineBasicMaterial({ color, transparent: true, opacity }))} />
      ))}
    </group>
  );
};

// --- Wireframe Grid (Floor / Ceiling) ---
interface WireframeGridProps {
  position: [number, number, number];
  size: number;
  divisions: number;
  color: string;
  opacity?: number;
}

const WireframeGrid = ({ position, size, divisions, color, opacity = 0.06 }: WireframeGridProps) => {
  const geometry = useMemo(() => {
    const points: number[] = [];
    const step = size / divisions;
    const half = size / 2;
    for (let i = 0; i <= divisions; i++) {
      const z = -half + i * step;
      points.push(-half, 0, z, half, 0, z);
    }
    for (let i = 0; i <= divisions; i++) {
      const x = -half + i * step;
      points.push(x, 0, -half, x, 0, half);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    return geo;
  }, [size, divisions]);

  return (
    <group position={position}>
      <primitive object={new THREE.LineSegments(geometry, new THREE.LineBasicMaterial({ color, transparent: true, opacity }))} />
    </group>
  );
};

// --- Cooling Coil — Hero Form ---
interface CoolingCoilProps {
  position: [number, number, number];
  color: string;
  speed: number;
}

const CoolingCoil = ({ position, color, speed }: CoolingCoilProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  const { coilGeo, finGeos } = useMemo(() => {
    const turns = 5;
    const radius = 1.2;
    const height = 3.0;
    const segments = 120;

    const coilPoints: number[] = [];
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const angle = t * turns * Math.PI * 2;
      const y = (t - 0.5) * height;
      coilPoints.push(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    }
    const coilGeo = new THREE.BufferGeometry();
    coilGeo.setAttribute('position', new THREE.Float32BufferAttribute(coilPoints, 3));

    const finGeos: THREE.BufferGeometry[] = [];
    const finCount = 24;
    for (let i = 0; i < finCount; i++) {
      const t = i / finCount;
      const angle = t * turns * Math.PI * 2;
      const y = (t - 0.5) * height;
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      const x2 = Math.cos(angle) * (radius + 0.5);
      const z2 = Math.sin(angle) * (radius + 0.5);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute([x1, y, z1, x2, y, z2], 3));
      finGeos.push(geo);
    }

    return { coilGeo, finGeos };
  }, []);

  return (
    <group ref={groupRef} position={position}>
      <primitive object={new THREE.Line(coilGeo, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.5 }))} />
      {finGeos.map((geo, i) => (
        <primitive key={i} object={new THREE.Line(geo, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.25 }))} />
      ))}
    </group>
  );
};

// --- Airflow Stream — Curved dotted line with traveling particles ---
interface AirflowStreamProps {
  start: [number, number, number];
  end: [number, number, number];
  control: [number, number, number];
  color: string;
  particleCount: number;
  speed: number;
  size?: number;
  opacity?: number;
}

const AirflowStream = ({ start, end, control, color, particleCount, speed, size = 0.045, opacity = 0.55 }: AirflowStreamProps) => {
  const pointsRef = useRef<THREE.Points>(null);

  const curve = useMemo(() => {
    return new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3(...control),
      new THREE.Vector3(...end)
    );
  }, [start, end, control]);

  const { positions, offsets } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const off = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      const point = curve.getPoint(Math.random());
      pos[i * 3] = point.x;
      pos[i * 3 + 1] = point.y;
      pos[i * 3 + 2] = point.z;
      off[i] = Math.random();
    }
    return { positions: pos, offsets: off };
  }, [curve, particleCount]);

  useFrame((state) => {
    if (pointsRef.current) {
      const geo = pointsRef.current.geometry as THREE.BufferGeometry;
      const posArray = geo.attributes.position.array as Float32Array;
      const time = state.clock.elapsedTime * speed;

      for (let i = 0; i < particleCount; i++) {
        const offset = offsets[i];
        let t = (time + offset) % 1;
        const point = curve.getPoint(t);
        posArray[i * 3] = point.x;
        posArray[i * 3 + 1] = point.y;
        posArray[i * 3 + 2] = point.z;
      }
      geo.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color={color} size={size} transparent opacity={opacity} sizeAttenuation depthWrite={false} />
    </points>
  );
};

// --- Fan Ring ---
interface FanRingProps {
  position: [number, number, number];
  radius: number;
  color: string;
  spinSpeed: number;
  opacity?: number;
}

const FanRing = ({ position, radius, color, spinSpeed, opacity = 0.35 }: FanRingProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * 0.2 + position[0]) * 0.08;
      groupRef.current.rotation.z = -state.clock.elapsedTime * spinSpeed;
    }
  });

  const { ringGeo, bladeGeos } = useMemo(() => {
    const points: number[] = [];
    const segs = 48;
    for (let i = 0; i <= segs; i++) {
      const a = (i / segs) * Math.PI * 2;
      points.push(Math.cos(a) * radius, Math.sin(a) * radius, 0);
    }
    const ringGeo = new THREE.BufferGeometry();
    ringGeo.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));

    const bladeGeos: THREE.BufferGeometry[] = [];
    for (let b = 0; b < 6; b++) {
      const a = (b / 6) * Math.PI * 2;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, Math.cos(a) * radius * 0.8, Math.sin(a) * radius * 0.8, 0], 3));
      bladeGeos.push(geo);
    }
    return { ringGeo, bladeGeos };
  }, [radius]);

  return (
    <group ref={groupRef} position={position}>
      <primitive object={new THREE.Line(ringGeo, new THREE.LineBasicMaterial({ color, transparent: true, opacity }))} />
      {bladeGeos.map((geo, i) => (
        <primitive key={i} object={new THREE.Line(geo, new THREE.LineBasicMaterial({ color, transparent: true, opacity: opacity * 0.6 }))} />
      ))}
    </group>
  );
};

// --- Scene ---
const Scene = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({ x: (e.clientX / window.innerWidth - 0.5) * 2, y: (e.clientY / window.innerHeight - 0.5) * 2 });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = mouse.y * 0.012;
      groupRef.current.rotation.y = mouse.x * 0.01;
    }
  });

  // Define scattered airflow streams — balanced across the grid, independent of fans
  const streams = useMemo(() => [
    { start: [-4, -2, -4] as [number, number, number], end: [4, 2, -5] as [number, number, number], control: [0, 1, -2] as [number, number, number], color: '#22d3ee', count: 45, speed: 0.18, size: 0.05, opacity: 0.5 },
    { start: [4, -2.5, -5] as [number, number, number], end: [-3, 1.5, -4] as [number, number, number], control: [1, -0.5, -2.5] as [number, number, number], color: '#1192e8', count: 40, speed: 0.22, size: 0.04, opacity: 0.45 },
    { start: [-2, 2.5, -3] as [number, number, number], end: [5, -1, -6] as [number, number, number], control: [2, 2, -4] as [number, number, number], color: '#009d9a', count: 35, speed: 0.15, size: 0.045, opacity: 0.4 },
    { start: [3, 2, -4] as [number, number, number], end: [-4, -1, -5] as [number, number, number], control: [-1, 1.5, -2] as [number, number, number], color: '#22d3ee', count: 38, speed: 0.2, size: 0.04, opacity: 0.42 },
    { start: [0, -3, -3.5] as [number, number, number], end: [2, 3, -5] as [number, number, number], control: [3, 0, -2] as [number, number, number], color: '#1192e8', count: 32, speed: 0.25, size: 0.035, opacity: 0.38 },
    { start: [-3.5, 0, -5] as [number, number, number], end: [3, -2, -4] as [number, number, number], control: [0, -1.5, -3] as [number, number, number], color: '#009d9a', count: 30, speed: 0.17, size: 0.04, opacity: 0.35 },
    { start: [1, 3, -4.5] as [number, number, number], end: [-2, -2.5, -5.5] as [number, number, number], control: [2, 0.5, -3] as [number, number, number], color: '#22d3ee', count: 28, speed: 0.19, size: 0.035, opacity: 0.33 },
    { start: [-1, -1, -3] as [number, number, number], end: [5, 1, -6] as [number, number, number], control: [2.5, -0.5, -2] as [number, number, number], color: '#1192e8', count: 35, speed: 0.21, size: 0.045, opacity: 0.44 },
  ], []);

  return (
    <group ref={groupRef}>
      {/* ===== BACKGROUND GRIDS ===== */}
      <WireframeGrid position={[0, -3.5, -9]} size={18} divisions={16} color="#0f62fe" opacity={0.05} />
      <WireframeGrid position={[0, 4, -10]} size={16} divisions={14} color="#0f62fe" opacity={0.03} />

      {/* Scene carried by fans, racks, streams and grid */}

      {/* ===== 3 FANS — Varying opacity, balanced placement ===== */}
      {/* Primary fan — largest, right side, highest opacity */}
      <FanRing position={[4.5, 0.5, -3.5]} radius={0.9} color="#1192e8" spinSpeed={1.2} opacity={0.45} />
      {/* Secondary fan — medium, upper left, lower opacity */}
      <FanRing position={[-3, 2, -4.5]} radius={0.6} color="#009d9a" spinSpeed={1.5} opacity={0.3} />
      {/* Tertiary fan — small, bottom right, lowest opacity */}
      <FanRing position={[3.5, -2.5, -5]} radius={0.4} color="#22d3ee" spinSpeed={1.8} opacity={0.2} />

      {/* Server racks removed — scene carried by fans, streams, grid and ambient particles */}

      {/* ===== AIRFLOW STREAMS — Scattered across the full grid ===== */}
      {streams.map((s, i) => (
        <AirflowStream
          key={i}
          start={s.start}
          end={s.end}
          control={s.control}
          color={s.color}
          particleCount={s.count}
          speed={s.speed}
          size={s.size}
          opacity={s.opacity}
        />
      ))}

      {/* ===== AMBIENT DRIFT PARTICLES ===== */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={100}
            array={useMemo(() => {
              const arr = new Float32Array(100 * 3);
              for (let i = 0; i < 100; i++) {
                arr[i * 3] = (Math.random() - 0.5) * 16;
                arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
                arr[i * 3 + 2] = (Math.random() - 0.5) * 7;
              }
              return arr;
            }, [])}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#1192e8" size={0.028} transparent opacity={0.18} sizeAttenuation depthWrite={false} />
      </points>

      <ambientLight intensity={0.3} />
    </group>
  );
};

// --- Main ---
const HeroCoolingAnimation = () => {
  const [webglSupported, setWebglSupported] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    try {
      const c = document.createElement('canvas');
      const gl = c.getContext('webgl') || c.getContext('experimental-webgl');
      if (!gl) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
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

export default HeroCoolingAnimation;

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Group, CatmullRomCurve3, Vector3, TubeGeometry } from 'three';

// Data Stream Component - Animated line with moving packets
interface DataStreamProps {
  startPoint: [number, number, number];
  endPoint: [number, number, number];
  controlPoint: [number, number, number];
  color: string;
  speed: number;
  packetCount: number;
}

const DataStream = ({ startPoint, endPoint, controlPoint, color, speed, packetCount }: DataStreamProps) => {
  const groupRef = useRef<Group>(null);
  const packetsRef = useRef<Mesh[]>([]);
  
  // Create curved path
  const curve = useMemo(() => {
    return new CatmullRomCurve3([
      new Vector3(...startPoint),
      new Vector3(...controlPoint),
      new Vector3(...endPoint),
    ]);
  }, [startPoint, endPoint, controlPoint]);

  // Create tube geometry along curve
  const tubeGeometry = useMemo(() => {
    return new TubeGeometry(curve, 64, 0.02, 8, false);
  }, [curve]);

  // Packet positions along the curve
  const packetPositions = useMemo(() => {
    return Array.from({ length: packetCount }, (_, i) => i / packetCount);
  }, [packetCount]);

  useFrame((state) => {
    const time = state.clock.elapsedTime * speed;
    
    packetsRef.current.forEach((packet, i) => {
      if (packet) {
        // Move packet along curve
        const t = (time + packetPositions[i]) % 1;
        const position = curve.getPoint(t);
        packet.position.copy(position);
        
        // Pulse opacity based on position
        const opacity = Math.sin(t * Math.PI) * 0.8 + 0.2;
        (packet.material as any).opacity = opacity;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Stream line */}
      <mesh geometry={tubeGeometry}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.15}
        />
      </mesh>
      
      {/* Data packets */}
      {packetPositions.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) packetsRef.current[i] = el;
          }}
        >
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

// Node Component - Connection points
interface NodeProps {
  position: [number, number, number];
  color: string;
  size: number;
  pulseSpeed: number;
}

const Node = ({ position, color, size, pulseSpeed }: NodeProps) => {
  const nodeRef = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (nodeRef.current) {
      // Gentle floating
      nodeRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.1;
    }
    
    if (ringRef.current) {
      // Expanding ring effect
      const scale = 1 + Math.sin(time * pulseSpeed) * 0.3;
      ringRef.current.scale.setScalar(scale);
      (ringRef.current.material as any).opacity = 0.4 - (scale - 1) * 0.5;
    }
  });

  return (
    <group position={position}>
      {/* Core node */}
      <mesh ref={nodeRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Pulse ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[size * 1.5, size * 1.7, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
          side={2}
        />
      </mesh>
    </group>
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
      // Subtle parallax
      groupRef.current.rotation.x = mouse.y * 0.03;
      groupRef.current.rotation.y = mouse.x * 0.03;
    }
  });

  // Stream configurations
  const streams = [
    {
      start: [-4, 2, -2] as [number, number, number],
      end: [0, 0, -4] as [number, number, number],
      control: [-2, 3, -3] as [number, number, number],
      color: '#f97316',
      speed: 0.3,
      packets: 4,
    },
    {
      start: [4, -1, -3] as [number, number, number],
      end: [0, 0, -4] as [number, number, number],
      control: [2, -2, -4] as [number, number, number],
      color: '#fb923c',
      speed: 0.4,
      packets: 3,
    },
    {
      start: [-3, -2, -2] as [number, number, number],
      end: [0, 0, -4] as [number, number, number],
      control: [-1, -3, -3] as [number, number, number],
      color: '#f59e0b',
      speed: 0.35,
      packets: 3,
    },
    {
      start: [3, 2, -3] as [number, number, number],
      end: [0, 0, -4] as [number, number, number],
      control: [1.5, 1, -4] as [number, number, number],
      color: '#ea580c',
      speed: 0.25,
      packets: 4,
    },
    {
      start: [0, 3, -2] as [number, number, number],
      end: [0, 0, -4] as [number, number, number],
      control: [0, 1.5, -3] as [number, number, number],
      color: '#f97316',
      speed: 0.5,
      packets: 3,
    },
  ];

  return (
    <group ref={groupRef}>
      {/* Central Hub Node */}
      <Node
        position={[0, 0, -4]}
        color="#f97316"
        size={0.2}
        pulseSpeed={2}
      />
      
      {/* Satellite Nodes */}
      <Node position={[-4, 2, -2]} color="#f59e0b" size={0.12} pulseSpeed={1.5} />
      <Node position={[4, -1, -3]} color="#fb923c" size={0.1} pulseSpeed={1.8} />
      <Node position={[-3, -2, -2]} color="#ea580c" size={0.11} pulseSpeed={1.6} />
      <Node position={[3, 2, -3]} color="#f97316" size={0.09} pulseSpeed={1.7} />
      <Node position={[0, 3, -2]} color="#fbbf24" size={0.1} pulseSpeed={1.4} />
      
      {/* Data Streams */}
      {streams.map((stream, i) => (
        <DataStream
          key={i}
          startPoint={stream.start}
          endPoint={stream.end}
          controlPoint={stream.control}
          color={stream.color}
          speed={stream.speed}
          packetCount={stream.packets}
        />
      ))}
      
      {/* Ambient Light */}
      <ambientLight intensity={0.6} />
    </group>
  );
};

// Main Component
const HeroDataStreams = () => {
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

export default HeroDataStreams;

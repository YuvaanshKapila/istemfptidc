"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Line, Html } from "@react-three/drei";
import { useMemo, useRef, useEffect, Suspense } from "react";
import * as THREE from "three";
import { phases } from "@/data/roadmapData";

const TERRAIN_LEN = 60;
const TERRAIN_WIDTH = 24;
const SEGMENTS_X = 240;
const SEGMENTS_Z = 90;

const stationT: Record<string, number> = {
  present: 0.05,
  "2030": 0.34,
  "2040": 0.62,
  "2060": 0.94,
};

function heightAt(t: number) {
  const peak = Math.exp(-Math.pow((t - 0.62) / 0.13, 2)) * 6.5;
  const rise = THREE.MathUtils.smoothstep(t, 0.0, 0.5) * 1.4;
  const decay =
    (1 - THREE.MathUtils.smoothstep(t, 0.62, 1)) * 0.6 +
    THREE.MathUtils.smoothstep(t, 0.62, 1) * 0.15;
  return peak + rise + decay;
}

function lateralRipple(t: number, x: number) {
  return Math.sin(t * Math.PI * 4 + x * 0.6) * 0.08 + Math.cos(x * 0.35) * 0.12;
}

function Terrain() {
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(
      TERRAIN_WIDTH,
      TERRAIN_LEN,
      SEGMENTS_X,
      SEGMENTS_Z
    );
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const t = (z + TERRAIN_LEN / 2) / TERRAIN_LEN;
      const lateralFalloff = Math.max(0, 1 - Math.pow(x / (TERRAIN_WIDTH / 2), 2));
      const h = heightAt(t) * lateralFalloff + lateralRipple(t, x) * lateralFalloff;
      pos.setY(i, h);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <group>
      <mesh geometry={geometry} receiveShadow>
        <meshStandardMaterial
          color="#0f1110"
          roughness={1}
          metalness={0}
          flatShading
        />
      </mesh>
      <lineSegments geometry={new THREE.WireframeGeometry(geometry)}>
        <lineBasicMaterial color="#2a3a2a" transparent opacity={0.35} />
      </lineSegments>
    </group>
  );
}

function railPoints(samples = 220) {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const z = -TERRAIN_LEN / 2 + t * TERRAIN_LEN;
    const y = heightAt(t) + 0.4;
    pts.push(new THREE.Vector3(0, y, z));
  }
  return pts;
}

function Rail() {
  const pts = useMemo(() => railPoints(), []);
  return (
    <Line
      points={pts}
      color="#c9f25b"
      lineWidth={1.5}
      transparent
      opacity={0.85}
    />
  );
}

function Station({
  t,
  label,
  year,
  active,
  onClick,
}: {
  t: number;
  label: string;
  year: string;
  active: boolean;
  onClick: () => void;
}) {
  const z = -TERRAIN_LEN / 2 + t * TERRAIN_LEN;
  const y = heightAt(t) + 0.4;
  const beamRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (beamRef.current) {
      const s =
        1 + Math.sin(state.clock.elapsedTime * 1.5 + t * 10) * (active ? 0.15 : 0.06);
      beamRef.current.scale.y = s;
    }
  });
  return (
    <group position={[0, y, z]} onClick={onClick}>
      <mesh ref={beamRef} position={[0, 6, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 12, 8]} />
        <meshBasicMaterial
          color={active ? "#c9f25b" : "#6a7a55"}
          transparent
          opacity={active ? 0.85 : 0.35}
        />
      </mesh>
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[1.6, 0.8, 1.6]} />
        <meshStandardMaterial
          color={active ? "#c9f25b" : "#1b1f1a"}
          emissive={active ? "#c9f25b" : "#000000"}
          emissiveIntensity={active ? 0.6 : 0}
          roughness={0.4}
        />
      </mesh>
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[1.8, 1.0, 1.8]} />
        <meshBasicMaterial color="#c9f25b" wireframe transparent opacity={0.4} />
      </mesh>
      <Html
        position={[0, 2.2, 0]}
        center
        distanceFactor={10}
        zIndexRange={[0, 0]}
      >
        <div
          className={`pointer-events-none whitespace-nowrap text-center select-none ${
            active ? "" : "opacity-70"
          }`}
        >
          <div
            className="mono text-[9px] tracking-[0.3em]"
            style={{ color: "#8a8676" }}
          >
            {label.toUpperCase()}
          </div>
          <div
            className="serif numerals text-3xl"
            style={{ color: active ? "#c9f25b" : "#ece6d6" }}
          >
            {year}
          </div>
        </div>
      </Html>
    </group>
  );
}

function CameraRig({
  progress,
  orbit,
}: {
  progress: number;
  orbit: boolean;
}) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3());
  useFrame(() => {
    if (orbit) return;
    const t = THREE.MathUtils.clamp(progress, 0, 1);
    const z = -TERRAIN_LEN / 2 + t * TERRAIN_LEN;
    const y = heightAt(t) + 3.2;
    const lookT = Math.min(1, t + 0.03);
    const lookZ = -TERRAIN_LEN / 2 + lookT * TERRAIN_LEN;
    const lookY = heightAt(lookT) + 0.6;
    camera.position.lerp(new THREE.Vector3(2.5, y + 0.5, z - 7), 0.08);
    target.current.lerp(new THREE.Vector3(0, lookY, lookZ + 4), 0.08);
    camera.lookAt(target.current);
  });
  return null;
}

export default function RoadmapScene({
  progress,
  active,
  orbit,
  setActive,
}: {
  progress: number;
  active: number;
  orbit: boolean;
  setActive: (i: number) => void;
}) {
  return (
    <Canvas
      shadows
      camera={{ position: [10, 10, -28], fov: 38, near: 0.1, far: 200 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#0d0e0c"]} />
      <fog attach="fog" args={["#0d0e0c", 20, 70]} />
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[10, 16, 6]}
        intensity={1.1}
        color="#fff6dc"
      />
      <directionalLight
        position={[-8, 4, -10]}
        intensity={0.4}
        color="#9ad8a0"
      />
      <Suspense fallback={null}>
        <Terrain />
        <Rail />
        {phases.map((p, i) => (
          <Station
            key={p.id}
            t={stationT[p.id]}
            label={p.label}
            year={p.year}
            active={i === active}
            onClick={() => setActive(i)}
          />
        ))}
      </Suspense>
      <CameraRig progress={progress} orbit={orbit} />
      {orbit && (
        <OrbitControls
          enablePan={false}
          enableZoom
          minDistance={12}
          maxDistance={60}
          maxPolarAngle={Math.PI / 2.1}
        />
      )}
    </Canvas>
  );
}

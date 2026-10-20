import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* Scene3D - "Study in the Cosmos". The /auth backdrop: a slowly rotating
   planet with a fresnel atmosphere rim and additive halo, an orbiting moon
   on a tilted elliptical ring, and a mouse-parallax starfield.

   Self-contained: renders its own fixed full-viewport container (.auth-scene)
   which also carries the deep-space gradient + CSS .auth-fallback-sky, so the
   page has a graceful backdrop when WebGL is unavailable. Loaded through
   React.lazy so three.js lives in its own chunk.

   Performance budget: 6 draw calls total (< 2000 units). dpr capped at 1.75,
   loop pauses on visibilitychange, and prefers-reduced-motion renders a
   single static frame (frameloop "demand"). */

const PLANET_POS = [2.7, 0.35, 0] as const;
const ORBIT_RADIUS = 3.4;

type Pointer = { x: number; y: number };

function makeRadialTexture(inner: string, outer: string): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, inner);
  grad.addColorStop(0.45, outer);
  grad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function buildStarGeometry(): THREE.BufferGeometry {
  const COUNT = 900;
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const dir = new THREE.Vector3();
  for (let i = 0; i < COUNT; i++) {
    dir.randomDirection().multiplyScalar(18 + Math.random() * 26);
    positions[i * 3] = dir.x;
    positions[i * 3 + 1] = dir.y;
    positions[i * 3 + 2] = dir.z;
    // Pale white-blue with occasional warm gold stars
    const r = Math.random();
    const base = r < 0.62 ? '#ffffff' : r < 0.86 ? '#9db4ff' : '#ffd9a0';
    const c = new THREE.Color(base);
    const s = 0.55 + Math.random() * 0.45;
    colors[i * 3] = c.r * s;
    colors[i * 3 + 1] = c.g * s;
    colors[i * 3 + 2] = c.b * s;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  return geo;
}

/* Soft round sprite so points never read as aliased squares. */
function makeStarSprite(): THREE.CanvasTexture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(255,255,255,0.55)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* Renders exactly one frame (needed for the reduced-motion "demand" mode). */
function FirstFrame() {
  const invalidate = useThree((s) => s.invalidate);
  useEffect(() => {
    invalidate();
  }, [invalidate]);
  return null;
}

function Cosmos({ motion, pointer }: { motion: boolean; pointer: React.RefObject<Pointer> }) {
  const planetRef = useRef<THREE.Mesh>(null);
  const moonRef = useRef<THREE.Mesh>(null);
  const starsRef = useRef<THREE.Points>(null);
  const moonAngle = useRef(1.15);

  const starGeo = useMemo(buildStarGeometry, []);
  const starSprite = useMemo(makeStarSprite, []);
  const haloTex = useMemo(
    () => makeRadialTexture('rgba(143,123,255,0.34)', 'rgba(143,123,255,0.10)'),
    []
  );
  const cyanTex = useMemo(
    () => makeRadialTexture('rgba(34,211,238,0.22)', 'rgba(34,211,238,0.07)'),
    []
  );
  const atmosphereUniforms = useMemo(
    () => ({ uColor: { value: new THREE.Color('#8f7bff') } }),
    []
  );

  useEffect(() => {
    return () => {
      starGeo.dispose();
      starSprite.dispose();
      haloTex.dispose();
      cyanTex.dispose();
    };
  }, [starGeo, starSprite, haloTex, cyanTex]);

  useFrame((_, delta) => {
    if (!motion) return;
    const d = Math.min(delta, 0.1);
    if (planetRef.current) planetRef.current.rotation.y += d * 0.075;
    if (moonRef.current) {
      moonAngle.current += d * 0.3;
      const a = moonAngle.current;
      moonRef.current.position.set(
        Math.cos(a) * ORBIT_RADIUS,
        Math.sin(a) * ORBIT_RADIUS,
        0
      );
    }
    if (starsRef.current && pointer.current) {
      const rot = starsRef.current.rotation;
      rot.y = THREE.MathUtils.damp(rot.y, -pointer.current.x * 0.11, 2.2, d);
      rot.x = THREE.MathUtils.damp(rot.x, pointer.current.y * 0.075, 2.2, d);
    }
  });

  return (
    <>
      <ambientLight intensity={0.32} />
      <directionalLight position={[-5, 2.5, 6]} intensity={1.55} color="#dfe8ff" />
      {/* Accent rim lights (violet right, cyan behind-left) */}
      <pointLight position={[6.6, 2.2, 3]} intensity={26} distance={20} decay={1.7} color="#8f7bff" />
      <pointLight position={[0.5, -2.5, -3.5]} intensity={12} distance={16} decay={1.8} color="#22d3ee" />

      {/* Fake bloom: additive halo planes behind the planet */}
      <mesh position={[PLANET_POS[0] - 0.6, PLANET_POS[1], PLANET_POS[2] - 0.9]} scale={9.5}>
        <planeGeometry />
        <meshBasicMaterial map={haloTex} transparent opacity={0.6} depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh position={[PLANET_POS[0] - 1.4, PLANET_POS[1] - 0.7, PLANET_POS[2] - 0.8]} scale={4.6}>
        <planeGeometry />
        <meshBasicMaterial map={cyanTex} transparent opacity={0.5} depthWrite={false} blending={THREE.AdditiveBlending} />
      </mesh>

      {/* Planet with fresnel atmosphere shell */}
      <group position={PLANET_POS}>
        <mesh ref={planetRef}>
          <sphereGeometry args={[1.4, 48, 48]} />
          <meshStandardMaterial color="#46337e" roughness={0.58} metalness={0.22} emissive="#191034" emissiveIntensity={0.5} />
        </mesh>
        <mesh scale={1.32}>
          <sphereGeometry args={[1.4, 32, 32]} />
          <shaderMaterial
            uniforms={atmosphereUniforms}
            transparent
            depthWrite={false}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
            vertexShader={`
              varying vec3 vNormal;
              void main() {
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `}
            fragmentShader={`
              uniform vec3 uColor;
              varying vec3 vNormal;
              void main() {
                float rim = pow(max(0.0, 0.68 - dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
                gl_FragColor = vec4(uColor, 1.0) * rim * 1.6;
              }
            `}
          />
        </mesh>
      </group>

      {/* Tilted elliptical orbit ring + moon (moon rises/behind via depth) */}
      <group position={PLANET_POS} rotation={[0.9, 0, 0]} scale={[1, 0.34, 1]}>
        <mesh>
          <ringGeometry args={[ORBIT_RADIUS - 0.05, ORBIT_RADIUS + 0.05, 96]} />
          <meshBasicMaterial color="#8f7bff" transparent opacity={0.24} side={THREE.DoubleSide} depthWrite={false} />
        </mesh>
        <mesh ref={moonRef}>
          <sphereGeometry args={[0.26, 24, 24]} />
          <meshStandardMaterial color="#c8d2ef" roughness={0.7} metalness={0.05} emissive="#5a5f80" emissiveIntensity={0.35} />
        </mesh>
      </group>

      {/* Parallax starfield */}
      <points ref={starsRef}>
        <primitive object={starGeo} attach="geometry" />
        <pointsMaterial
          size={0.55}
          sizeAttenuation
          map={starSprite}
          alphaTest={0.02}
          vertexColors
          transparent
          opacity={0.9}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <FirstFrame />
    </>
  );
}

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

export default function Scene3D() {
  const supported = useMemo(detectWebGL, []);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pointer = useRef<Pointer>({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mq) return undefined;
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Cheap scene: no rAF cycles while the tab is hidden.
  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  // The .auth-scene container (deep-space gradient + CSS starfield fallback)
  // is always rendered; when WebGL is missing the Canvas renders nothing and
  // the CSS sky simply shows through the transparent overlay.
  return (
    <div className="auth-scene" aria-hidden="true">
      <div className="auth-fallback-sky" />
      {supported && (
        <Canvas
          className="auth-canvas"
          dpr={[1, 1.75]}
          frameloop={hidden ? 'never' : reducedMotion ? 'demand' : 'always'}
          camera={{ position: [0, 0.2, 7.2], fov: 42 }}
        >
          <Cosmos motion={!reducedMotion} pointer={pointer} />
        </Canvas>
      )}
    </div>
  );
}

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/* Three.js hero scene: a glowing study-planet with orbiting knowledge moons,
   particle starfield, and mouse parallax. Replaces the CSS orbit scene on
   Dashboard. Lightweight (~60fps on low-spec: capped DPR, no shadows). */
export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 0.6, 7);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75)); // low-spec friendly
    mount.appendChild(renderer.domElement);

    /* ---- planet ---- */
    const planet = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 48, 48),
      new THREE.MeshStandardMaterial({
        color: 0x6c5ce7, roughness: 0.55, metalness: 0.25,
        emissive: 0x2a1a6e, emissiveIntensity: 0.6,
      }),
    );
    scene.add(planet);

    /* wireframe shell for the "knowledge grid" look */
    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(1.56, 24, 18),
      new THREE.MeshBasicMaterial({ color: 0x8f7bff, wireframe: true, transparent: true, opacity: 0.28 }),
    );
    scene.add(shell);

    /* atmosphere glow */
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(1.78, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0x00d2ff, transparent: true, opacity: 0.08, side: THREE.BackSide }),
    );
    scene.add(glow);

    /* ---- orbit rings + moons ---- */
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);
    const moons: { mesh: THREE.Mesh; r: number; speed: number; phase: number; tilt: number }[] = [];
    const moonColors = [0xffd166, 0x06d6a0, 0xef476f, 0x4cc9f0];
    for (let i = 0; i < 4; i++) {
      const r = 2.3 + i * 0.55;
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.006, 8, 128),
        new THREE.MeshBasicMaterial({ color: 0x8f7bff, transparent: true, opacity: 0.16 }),
      );
      ring.rotation.x = Math.PI / 2.25 + i * 0.12;
      ringGroup.add(ring);
      const moon = new THREE.Mesh(
        new THREE.SphereGeometry(0.11 + i * 0.02, 20, 20),
        new THREE.MeshStandardMaterial({ color: moonColors[i], emissive: moonColors[i], emissiveIntensity: 0.8, roughness: 0.4 }),
      );
      scene.add(moon);
      moons.push({ mesh: moon, r, speed: 0.5 - i * 0.09, phase: i * 1.7, tilt: Math.PI / 2.25 + i * 0.12 });
    }

    /* ---- starfield ---- */
    const N = 900;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(14 + Math.random() * 22);
      pos[i * 3] = v.x; pos[i * 3 + 1] = v.y; pos[i * 3 + 2] = v.z;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xbfd4ff, size: 0.05, transparent: true, opacity: 0.8 }));
    scene.add(stars);

    /* ---- lights ---- */
    scene.add(new THREE.AmbientLight(0x8899ff, 0.5));
    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(4, 3, 5);
    scene.add(key);
    const rim = new THREE.PointLight(0x00d2ff, 12, 20);
    rim.position.set(-4, -2, -3);
    scene.add(rim);

    /* ---- mouse parallax ---- */
    const mouse = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMove);

    /* ---- resize ---- */
    const resize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    /* ---- animate ---- */
    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      planet.rotation.y = t * 0.18;
      shell.rotation.y = -t * 0.1;
      shell.rotation.x = t * 0.05;
      ringGroup.rotation.y = t * 0.06;
      stars.rotation.y = t * 0.012;
      for (const m of moons) {
        const a = t * m.speed + m.phase;
        m.mesh.position.set(
          Math.cos(a) * m.r,
          Math.sin(a) * m.r * Math.cos(Math.PI / 2 - m.tilt),
          Math.sin(a) * m.r * Math.sin(m.tilt),
        );
      }
      camera.position.x += (mouse.x * 0.9 - camera.position.x) * 0.04;
      camera.position.y += (0.6 - mouse.y * 0.55 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      ro.disconnect();
      renderer.dispose();
      scene.traverse(o => {
        const mesh = o as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const mat = mesh.material as THREE.Material | THREE.Material[] | undefined;
        if (Array.isArray(mat)) mat.forEach(m => m.dispose());
        else if (mat) mat.dispose();
      });
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="hero-3d" aria-hidden="true" />;
}

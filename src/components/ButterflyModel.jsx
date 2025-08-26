import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const PARTICLE_COUNT = 1;

export default function MorphParticles() {
  const containerRef = useRef();
  const particlesRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const originalSpherePoints = useRef([]);
  const spreadFactorRef = useRef(0);
  const mouse3D = useRef(new THREE.Vector3());
  const butterflyRef = useRef();
  const mixerRef = useRef();
  const clockRef = useRef(new THREE.Clock());

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Init Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 40);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Lights
    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(10, 20, 20);
    scene.add(dirLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Load Butterfly
    const loader = new GLTFLoader();

    // loader.load("/models/animated_butterfly/scene.gltf", (gltf) => {
    //   const butterfly = gltf.scene;
    //   butterfly.scale.set(8, 8, 8);
    //   butterfly.position.set(0, 0, 0);
    //   butterfly.rotation.y = 4.5;
    //   butterfly.rotation.x = 0.2;
    //   butterfly.castShadow = true;
    //   scene.add(butterfly);
    //   butterflyRef.current = butterfly;

    //   // Animation mixer setup
    //   const mixer = new THREE.AnimationMixer(butterfly);
    //   mixerRef.current = mixer;
    //   gltf.animations.forEach((clip) => {
    //     mixer.clipAction(clip).play();
    //   });

    //   // Scroll-based timeline animation for the butterfly
    //   const timeline = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".section-one",
    //       endTrigger: ".section-four",
    //       start: "top center",
    //       end: "top center",
    //       scrub: true,
    //       markers: true,
    //     },
    //   });

    //   // Helper function to reduce repetitive code
    //   const addRepeatedAnimation = (timeline, props, repeatCount) => {
    //     for (let i = 0; i < repeatCount; i++) {
    //       timeline.to(butterfly.position, props);
    //     }
    //   };

    //   // Initial movement sequence
    //   timeline
    //     .to(butterfly.position, { x: 20, y: -5, duration: 11 })
    //     .to(butterfly.position, { x: 10, y: -6, duration: 110 });

    //   // Repeated hovering-like movement
    //   addRepeatedAnimation(timeline, { x: 10, y: -5, duration: 4 }, 20);

    //   // Long travel sequence with scaling
    //   timeline
    //     .to(butterfly.position, { x: -10, duration: 300, scale: 4.1 })
    //     .to(butterfly.position, { x: -40, duration: 200 })
    //     .to(butterfly.position, { x: -60, duration: 4 });

    //   // Repeated at -70 X position
    //   addRepeatedAnimation(timeline, { x: -70, duration: 4 }, 5);

    //   // Returning towards center
    //   timeline
    //     .to(butterfly.position, { x: -60, duration: 4 })
    //     .to(butterfly.position, { x: -50, duration: 4 })
    //     .to(butterfly.position, { x: -40, duration: 200 })
    //     .to(butterfly.position, { x: -10, y: -5, duration: 100, scale: 2.1 });

    //   // More hovering at new scale
    //   addRepeatedAnimation(
    //     timeline,
    //     { x: -10, y: -5, duration: 4, scale: 2.1 },
    //     15
    //   );

    //   // Final forward movement
    //   timeline.to(butterfly.position, {
    //     x: 10,
    //     y: -5,
    //     duration: 200,
    //     scale: 2.1,
    //   });
    // });

    loader.load("/models/animated_butterfly/scene.gltf", (gltf) => {
      const butterfly = gltf.scene;
      butterfly.scale.set(10, 10, 10);
      butterfly.position.set(12, -7, 0);
      butterfly.rotation.y = 4.5;
      butterfly.rotation.x = 0.2;
      butterfly.castShadow = true;
      scene.add(butterfly);
      butterflyRef.current = butterfly;

      // Animation mixer setup
      const mixer = new THREE.AnimationMixer(butterfly);
      mixerRef.current = mixer;
      gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
      });

      // --- SECTION ONE ---
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-one",
            start: "-70px top",
            end: "bottom center",
            scrub: true,
            markers: true,
          },
        })
        .to(butterfly.position, { x: 2, y: -10, duration: 1 })
        .to(butterfly.scale, { x: 2, y: 2, z: 2, duration: 2 })
        .to(butterfly.position, { x: -5, y: -10, z: 0, duration: 1 })
        .to(butterfly.rotation, { y: 3.5, duration: 3 });

      // --- SECTION TWO ---
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-two",
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: true,
          },
        })
        .to(butterfly.rotation, { y: 4.0, duration: 0.1 })
        .to(butterfly.position, { y: 2, duration: 3 })
        .to(butterfly.position, { y: 14, duration: 3 });

      // --- SECTION THREE ---
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-three",
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: true,
          },
        })
        .to(butterfly.position, { x: 40, duration: 0.1 })
        .to(butterfly.position, { y: 5, duration: 0.1 })
        .to(butterfly.scale, { x: 5, y: 5, z: 5, duration: 1 })
        .to(butterfly.position, { x: 5, y: 2, duration: 1 });

      // --- SECTION FOUR ---
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-four",
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: true,
          },
        })
        .to(butterfly.position, { x: -8, duration: 0.1 });

      // --- SECTION FIVE ---
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-five",
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: true,
          },
        })
        .to(butterfly.position, { x: -14, duration: 2 })
        .to(butterfly.position, { x: -14, duration: 2 })
        .to(butterfly.position, { x: -8, duration: 2 });

      // --- SECTION SIX ---
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-six",
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: true,
          },
        })
        .to(butterfly.position, { x: 14, duration: 2 })
        .to(butterfly.position, { x: 12, duration: 2 });

      // --- SECTION SEVEN ---
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".section-seven",
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: true,
          },
        })
        .to(butterfly.position, { x: 0, duration: 2 })
        .to(butterfly.position, { x: 0, duration: 2 });
    });

    // loader.load("/models/animated_butterfly/scene.gltf", (gltf) => {
    //   const butterfly = gltf.scene;
    //   butterfly.scale.set(8, 8, 8);
    //   butterfly.position.set(0, 0, 0);
    //   butterfly.rotation.y = 4.5;
    //   butterfly.rotation.x = 0.2;
    //   butterfly.castShadow = true;
    //   scene.add(butterfly);
    //   butterflyRef.current = butterfly;

    //   // Animation mixer setup
    //   const mixer = new THREE.AnimationMixer(butterfly);
    //   mixerRef.current = mixer;
    //   gltf.animations.forEach((clip) => {
    //     mixer.clipAction(clip).play();
    //   });

    //   // Scroll-based timeline animation for the butterfly
    //   const timeline = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".section-one",
    //       endTrigger: ".section-four",
    //       start: "top center",
    //       end: "top center",
    //       scrub: true,
    //       markers: true,
    //     },
    //   });

    //   // Helper function to reduce repetitive code
    //   const addRepeatedAnimation = (timeline, props, repeatCount) => {
    //     for (let i = 0; i < repeatCount; i++) {
    //       timeline.to(butterfly.position, props);
    //     }
    //   };

    //   // SECTION ONE ANIMATION
    //   timeline
    //     .to(butterfly.position, { x: 0, y: -5, duration: 11 })
    //     .to(butterfly.position, { x: 10, y: -6, duration: 110 });

    //   // SECTION TWO ANIMATION
    //   addRepeatedAnimation(timeline, { x: 10, y: -5, duration: 4 }, 20);

    //   timeline.to(butterfly.position, { x: -10, y: -6, duration: 10 });
    //   timeline.to(butterfly.scale, { x: 2, y: 2, z: 2, duration: 100 });

    //   // SECTION THREE ANIMATION
    //   timeline
    //     .to(butterfly.position, { x: -5, duration: 120, scale: 4.1 })
    //     .to(butterfly.position, { x: -5, y: 5, duration: 200 })
    //     .to(butterfly.position, { x: -5, y: 5, duration: 4 });

    //   // Repeated at -70 X position
    //   addRepeatedAnimation(timeline, { x: -70, duration: 4 }, 5);
    //   timeline.to(butterfly.scale, { x: 8, y: 8, z: 8, duration: 5 });

    //   // SECTION FOUR ANIMATION
    //   timeline
    //     .to(butterfly.position, { x: -60, duration: 4 })
    //     .to(butterfly.position, { x: -50, duration: 4 })
    //     .to(butterfly.position, { x: -40, duration: 200 })
    //     .to(butterfly.position, { x: -10, y: -5, duration: 100, scale: 2.1 });

    //   // SECTION FIVE ANIMATION
    //   addRepeatedAnimation(
    //     timeline,
    //     { x: -10, y: -5, duration: 4, scale: 2.1 },
    //     15
    //   );

    //   // SECTION SIX ANIMATION
    //   timeline.to(butterfly.position, {
    //     x: 10,
    //     y: -5,
    //     duration: 200,
    //     scale: 2.1,
    //   });
    // });

    // loader.load("/models/animated_butterfly/scene.gltf", (gltf) => {
    //   const butterfly = gltf.scene;
    //   butterfly.scale.set(14, 14, 14);
    //   butterfly.position.set(0, 0, 0);
    //   butterfly.rotation.y = 4.5;
    //   butterfly.rotation.x = 0.2;
    //   butterfly.castShadow = true;
    //   scene.add(butterfly);
    //   butterflyRef.current = butterfly;

    //   // Animation mixer setup
    //   const mixer = new THREE.AnimationMixer(butterfly);
    //   mixerRef.current = mixer;
    //   gltf.animations.forEach((clip) => {
    //     mixer.clipAction(clip).play();
    //   });

    //   // Scroll-based timeline animation for the butterfly
    //   const timeline = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".section-one",
    //       endTrigger: ".section-four",
    //       start: "top center",
    //       end: "top center",
    //       scrub: true,
    //       markers: true,
    //     },
    //   });

    //   // SECTION ONE ANIMATION
    //   timeline
    //     .to(butterfly.position, { x: 0, y: 0, duration: 11 })
    //     .to(butterfly.position, { x: 10, y: -6, duration: 110 });

    //   timeline;
    //   // .to(butterfly.position, { x: 10, y: -6, duration: 10 })
    //   // .to(butterfly.scale, { x: 5, y: 5, z: 5, duration: 200 });

    //   timeline.to(butterfly, {
    //     duration: 100,
    //     position: { x: 10, y: -5, z: 0 },
    //     scale: { x: 5, y: 5, z: 5 },
    //     ease: "power1.inOut",
    //   });

    //   // SECTION THREE ANIMATION
    //   timeline
    //     .to(butterfly.position, { x: -5, duration: 120 })
    //     .to(butterfly.position, { x: -5, y: 5, duration: 200 })
    //     .to(butterfly.position, { x: -5, y: 5, duration: 4 })
    //     .to(butterfly.scale, { x: 2, y: 2, z: 2, duration: 50 });

    //   // Repeated at -70 X position
    //   timeline.to(butterfly.position, {
    //     x: -70,
    //     duration: 4,
    //     // repeat: 4,   // 5 times total
    //     ease: "none",
    //   });

    //   timeline.to(butterfly.scale, { x: 8, y: 8, z: 8, duration: 5 });

    //   // SECTION FOUR ANIMATION
    //   timeline
    //     .to(butterfly.position, { x: -60, duration: 4 })
    //     .to(butterfly.position, { x: -50, duration: 4 })
    //     .to(butterfly.position, { x: -40, duration: 200 })
    //     .to(butterfly.position, { x: -10, y: -5, duration: 100, scale: 2.1 });

    //   // SECTION FIVE ANIMATION (repeat)
    //   timeline.to(butterfly.position, {
    //     x: -10,
    //     y: -5,
    //     duration: 4,
    //     scale: 2.1,
    //     repeat: 14, // 15 times total
    //     ease: "none",
    //   });

    //   // SECTION SIX ANIMATION
    //   timeline.to(butterfly.position, {
    //     x: 10,
    //     y: -5,
    //     duration: 200,
    //     scale: 2.1,
    //   });
    // });

    generateOriginalSphere();
    createParticles();

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clockRef.current.getDelta();
      if (mixerRef.current) mixerRef.current.update(delta);
      updateParticles();
      renderer.render(scene, camera);
    };
    animate();

    // Events
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      const vector = new THREE.Vector3(x, y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = (30 - camera.position.z) / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      mouse3D.current.copy(pos);
    };

    const handleScroll = () => {
      const scrollY = Math.min(window.scrollY / window.innerHeight, 1);
      spreadFactorRef.current = scrollY;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const generateOriginalSphere = () => {
    originalSpherePoints.current = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 20 + (Math.random() - 0.2) * 0.8;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      originalSpherePoints.current.push({ x, y, z });
    }
  };

  const createParticles = () => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const velocities = new Float32Array(PARTICLE_COUNT * 3).fill(0);
    const colors = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = originalSpherePoints.current[i];
      positions.set([p.x, p.y, p.z], i * 3);
      colors.set([0.2, 0.6, 1.0], i * 3);
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(geometry, material);
    sceneRef.current.add(particles);
    particlesRef.current = particles;
  };

  const updateParticles = () => {
    if (!particlesRef.current) return;
    const geom = particlesRef.current.geometry;
    const posAttr = geom.attributes.position;
    const velAttr = geom.attributes.velocity;
    const positions = posAttr.array;
    const velocities = velAttr.array;
    const spreadFactor = spreadFactorRef.current;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const idx = i * 3;
      const original = originalSpherePoints.current[i];
      const dir = new THREE.Vector3(
        original.x,
        original.y,
        original.z
      ).normalize();
      const baseRadius = 10 + spreadFactor * (50 + Math.random() * 80);
      const target = dir.clone().multiplyScalar(baseRadius);
      const current = new THREE.Vector3(
        positions[idx],
        positions[idx + 1],
        positions[idx + 2]
      );
      const distToMouse = current.distanceTo(mouse3D.current);
      if (distToMouse < 5) {
        const repelDir = current.clone().sub(mouse3D.current).normalize();
        const strength = (5 - distToMouse) / 5;
        velocities[idx] += repelDir.x * strength * 0.5;
        velocities[idx + 1] += repelDir.y * strength * 0.5;
        velocities[idx + 2] += repelDir.z * strength * 0.5;
      }

      velocities[idx] *= 0.9;
      velocities[idx + 1] *= 0.9;
      velocities[idx + 2] *= 0.9;

      positions[idx] += (target.x - positions[idx]) * 0.05 + velocities[idx];
      positions[idx + 1] +=
        (target.y - positions[idx + 1]) * 0.05 + velocities[idx + 1];
      positions[idx + 2] +=
        (target.z - positions[idx + 2]) * 0.05 + velocities[idx + 2];
    }

    posAttr.needsUpdate = true;
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-10 pointer-events-auto"
    ></div>
  );
}
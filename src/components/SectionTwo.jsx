// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function SectionTwo() {
//   const textRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         defaults: { ease: "power3.out" },
//         scrollTrigger: {
//           trigger: textRef.current, // the element that triggers animation
//           start: "top 80%", // when top of section hits 80% of viewport
//           end: "bottom 20%", // optional end point
//           toggleActions: "play none none none", // play on enter
//         },
//       });

//       tl.fromTo(
//         ".anim-text",
//         { y: 60, opacity: 0, scale: 0.95 },
//         { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.2 }
//       );
//     }, textRef);

//     return () => ctx.revert(); // cleanup
//   }, []);

//   return (
//     <section className="section-two w-full h-screen flex  font-mono flex-col lg:flex-row-reverse items-center justify-between relative px-8 mt-50 z-20">
//       <div
//         ref={textRef}
//         className="w-full lg:w-1/2 flex flex-col items-start justify-center pl-12"
//       >
//         <h2 className="anim-text text-black font-semibold mb-4 text-8xl">
//           Aether 3D Studio
//         </h2>
//         <h1 className="anim-text font-extrabold text-8xl sm:text-7xl leading-tight mb-2">
//           ALL-IN-ONE <span className="italic font-medium">Platform</span>
//         </h1>
//         <h1 className="anim-text font-extrabold text-4xl sm:text-6xl leading-tight mb-6 italic font-medium">
//           for <span className="text-black">INTELLIGENT AI SOLUTIONS</span>
//         </h1>
//         <p className="anim-text text-gray-500 max-w-md text-2xl mb-8 leading-snug">
//           Aether3D Pixel Forge is a full-stack AI solution for 3D innovation.
//           From GPU cloud management, task automation, model training AI-driven
//           3D models seamlessly.
//         </p>
//         <button className="anim-text px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition hover:scale-105 shadow-md">
//           Contact Sales
//         </button>
//       </div>
//       <div className="hidden lg:block w-full lg:w-1/2"></div>
//     </section>
//   );
// }

import React, { useEffect, useState, useRef } from "react";
// GSAP is expected to be available globally via a script tag, so we access it from the window object.
const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;

export default function SectionTwo() {
  const [points, setPoints] = useState([]);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const random = (min, max) => Math.random() * (max - min) + min;

  const FlowingLine = ({ point }) => {
    const { pathD, duration, delay } = point;

    const dashLength = 60;
    const gapLength = 1000; // A large gap ensures only one dash is visible at a time
    const totalPatternLength = dashLength + gapLength;

    return (
      <g>
        {/* Glow layer: thicker, blurred, and filtered */}
        <path
          d={pathD}
          fill="none"
          stroke="#3b82f6" // Updated to theme blue color
          strokeWidth="4" // Thicker for a better glow
          strokeDasharray={`${dashLength} ${gapLength}`}
          strokeLinecap="round"
          filter="url(#glow)"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to={-totalPatternLength}
            dur={`${duration * 1.5}s`}
            begin={`${delay}s`}
            repeatCount="indefinite"
          />
        </path>
        {/* Core line: thin, bright, and sharp (no filter) */}
        <path
          d={pathD}
          fill="none"
          stroke="#FFFFFF" // Bright white core
          strokeWidth="1.5"
          strokeDasharray={`${dashLength} ${gapLength}`}
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to={-totalPatternLength}
            dur={`${duration * 1.5}s`}
            begin={`${delay}s`}
            repeatCount="indefinite"
          />
        </path>
      </g>
    );
  };

  // Configuration for the animation
  const config = {
    cardSize: { width: 300, height: 180 },
    lineDistance: 200,
    bendAmount: 60, // How much the lines will bend
    numLinesPerSide: 8, // Increased number of lines
  };

  // Generate the points on component mount and resize
  useEffect(() => {
    const generatePoints = () => {
      if (!containerRef.current) return;

      const { width, height } = containerRef.current.getBoundingClientRect();
      const center = { x: width / 2, y: height / 2 };
      const card = {
        x: center.x - config.cardSize.width / 2,
        y: center.y - config.cardSize.height / 2,
        width: config.cardSize.width,
        height: config.cardSize.height,
      };

      const newPoints = [];
      let id = 0;
      const bend = config.bendAmount;
      const straightSegmentLength = 50;

      // Top side
      for (let i = 0; i < config.numLinesPerSide; i++) {
        const startX =
          card.x + (card.width / (config.numLinesPerSide + 1)) * (i + 1);
        const startY = card.y;
        const midY1 = startY - straightSegmentLength;
        const midX2 = startX + random(-bend, bend);
        const midY2 = midY1;
        const endX = midX2;
        const endY = startY - config.lineDistance;
        newPoints.push({
          id: id++,
          pathD: `M${startX},${startY} L${startX},${midY1} L${midX2},${midY2} L${endX},${endY}`,
          duration: random(3, 5),
          delay: random(0, 4),
          endX: endX,
          endY: endY,
        });
      }

      // Bottom side
      for (let i = 0; i < config.numLinesPerSide; i++) {
        const startX =
          card.x + (card.width / (config.numLinesPerSide + 1)) * (i + 1);
        const startY = card.y + card.height;
        const midY1 = startY + straightSegmentLength;
        const midX2 = startX + random(-bend, bend);
        const midY2 = midY1;
        const endX = midX2;
        const endY = startY + config.lineDistance;
        newPoints.push({
          id: id++,
          pathD: `M${startX},${startY} L${startX},${midY1} L${midX2},${midY2} L${endX},${endY}`,
          duration: random(3, 5),
          delay: random(0, 4),
          endX: endX,
          endY: endY,
        });
      }

      // Left side
      for (let i = 0; i < config.numLinesPerSide; i++) {
        const startX = card.x;
        const startY =
          card.y + (card.height / (config.numLinesPerSide + 1)) * (i + 1);
        const midX1 = startX - straightSegmentLength;
        const midX2 = midX1;
        const midY2 = startY + random(-bend, bend);
        const endX = startX - config.lineDistance;
        const endY = midY2;
        newPoints.push({
          id: id++,
          pathD: `M${startX},${startY} L${midX1},${startY} L${midX2},${midY2} L${endX},${endY}`,
          duration: random(3, 5),
          delay: random(0, 4),
          endX: endX,
          endY: endY,
        });
      }

      // Right side
      for (let i = 0; i < config.numLinesPerSide; i++) {
        const startX = card.x + card.width;
        const startY =
          card.y + (card.height / (config.numLinesPerSide + 1)) * (i + 1);
        const midX1 = startX + straightSegmentLength;
        const midX2 = midX1;
        const midY2 = startY + random(-bend, bend);
        const endX = startX + config.lineDistance;
        const endY = midY2;
        newPoints.push({
          id: id++,
          pathD: `M${startX},${startY} L${midX1},${startY} L${midX2},${midY2} L${endX},${endY}`,
          duration: random(3, 5),
          delay: random(0, 4),
          endX: endX,
          endY: endY,
        });
      }

      setPoints(newPoints);
    };

    generatePoints();

    const resizeObserver = new ResizeObserver(generatePoints);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  // GSAP animation logic
  useEffect(() => {
    // Check if GSAP and ScrollTrigger are available on the window object
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        });

        tl.fromTo(
          ".anim-text",
          { y: 60, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.15 }
        );
      }, sectionRef);

      return () => ctx.revert(); // Cleanup
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center bg-gray-50 px-6 sm:px-12 lg:px-16"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* --- Text Content --- */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left max-w-2xl">
          <h2 className="anim-text text-blue-600 font-semibold uppercase tracking-wider mb-3 text-base">
            QuantumCore AI
          </h2>
          <h1 className="anim-text font-extrabold text-gray-900 text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Unleash Peak AI Performance.
          </h1>
          <h1 className="anim-text font-medium text-gray-800 text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            In a <span className="italic">Featherlight</span> Form.
          </h1>
          <p className="anim-text text-gray-600 max-w-xl text-lg md:text-xl mb-8 leading-relaxed">
            The QuantumCore processor redefines efficiency, delivering immense
            computational power for heavy-duty AI workloads while maintaining an
            ultra-light, power-sipping architecture.
          </p>
          <button className="anim-text px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 shadow-lg">
            Explore the Specs
          </button>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2 min-h-screen bg-transparent font-sans overflow-hidden">
          <div
            ref={containerRef}
            className="relative w-full h-full max-w-5xl aspect-video"
          >
            <svg
              width="100%"
              height="100%"
              className="absolute top-0 left-0 overflow-visible"
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Render static background lines (the "backbone") */}
              {points.map((point) => (
                <path
                  key={`line-${point.id}`}
                  d={point.pathD}
                  stroke="rgba(59, 130, 246, 0.2)" // Updated to theme blue color
                  strokeWidth="0.5"
                  fill="none"
                />
              ))}

              {/* Render flowing "LED" lines */}
              {points.map((point) => (
                <FlowingLine key={`flow-${point.id}`} point={point} />
              ))}
            </svg>

            {/* The Center Card */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-lg shadow-2xl shadow-blue-500/10 text-center"
              style={{
                width: config.cardSize.width,
                height: config.cardSize.height,
              }}
            >
              <div className="flex flex-col justify-center items-center h-full">
                <h2 className="text-2xl font-bold text-blue-300">
                  Central Hub
                </h2>
                <p className="text-base text-slate-400 mt-2">
                  Data Processing Node
                </p>
              </div>
              <img src="" alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { SplitText } from "gsap/dist/SplitText";

// // Register SplitText plugin
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(SplitText);
// }

// export default function SectionThree() {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const subtextRef = useRef(null);
//   const statsRef = useRef(null);

//   useEffect(() => {
//     // Only run animations on client side
//     if (typeof window === "undefined") return;

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 70%",
//         toggleActions: "play none none none",
//       },
//     });

//     // Animate heading with split text
//     const headingSplit = new SplitText(headingRef.current, {
//       type: "lines,words,chars",
//       linesClass: "lineChild",
//     });

//     gsap.set(headingSplit.words, { opacity: 0, y: 50 });
//     tl.to(headingSplit.words, {
//       opacity: 1,
//       y: 0,
//       duration: 0.8,
//       stagger: 0.05,
//       ease: "power3.out",
//     });

//     // Animate subtext
//     const subtextSplit = new SplitText(subtextRef.current, {
//       type: "lines",
//       linesClass: "lineChild",
//     });

//     gsap.set(subtextSplit.lines, { opacity: 0, y: 30 });
//     tl.to(
//       subtextSplit.lines,
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         stagger: 0.1,
//         ease: "power2.out",
//       },
//       "-=0.4"
//     );

//     // Animate stats with rolling numbers
//     const stats = statsRef.current.querySelectorAll(".stat-item");
//     stats.forEach((stat, index) => {
//       const number = stat.querySelector("span");
//       const target = parseFloat(number.textContent.replace(/[^0-9.]/g, ""));
//       const suffix = number.textContent.replace(/[0-9.]/g, "");

//       gsap.fromTo(
//         number,
//         { textContent: 0, opacity: 0, y: 20 },
//         {
//           textContent: target,
//           opacity: 1,
//           y: 0,
//           duration: 1.5,
//           ease: "power3.out",
//           stagger: 0.2,
//           scrollTrigger: {
//             trigger: stat,
//             start: "top 80%",
//             toggleActions: "play none none none",
//           },
//           onUpdate: function () {
//             number.textContent =
//               Math.floor(this.targets()[0].textContent) + suffix;
//           },
//         }
//       );

//       // Animate the description
//       const desc = stat.querySelector("div");
//       gsap.fromTo(
//         desc,
//         { opacity: 0, y: 20 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           delay: 0.3,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: stat,
//             start: "top 80%",
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     });

//     // Animate badge
//     const badge = sectionRef.current.querySelector(".badge");
//     gsap.from(badge, {
//       scale: 0.5,
//       opacity: 0,
//       rotation: 10,
//       duration: 0.8,
//       ease: "elastic.out(1, 0.5)",
//       scrollTrigger: {
//         trigger: badge,
//         start: "top 80%",
//         toggleActions: "play none none none",
//       },
//     });

//     return () => {
//       if (headingSplit) headingSplit.revert();
//       if (subtextSplit) subtextSplit.revert();
//       tl.kill();
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="section-three w-full min-h-screen  font-mono flex flex-col justify-center relative overflow-hidden px-4 md:px-12 py-12 z-20"
//     >
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 w-full max-w-6xl mx-auto">
//         {/* Left side: 3D Model will go here */}
//         <div className="flex items-center justify-center">
//           {/* Your 3D Model Placeholder */}
//           <div className="w-full h-[500px] flex items-center justify-center">
//             <p className="text-gray-400"></p>
//           </div>
//         </div>

//         {/* Right side: Content */}
//         <div className="flex flex-col max-w-lg mx-auto lg:mx-0 px-4 py-10 space-y-8">
//           {/* Badge */}
//           <span className="badge inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs tracking-wide px-4 py-1 rounded-full shadow-md w-fit"></span>

//           {/* Heading */}
//           <h1
//             ref={headingRef}
//             className="text-1xl md:text-7xl font-extrabold leading-tight text-gray-900"
//           >
//             Achieving Next-Level <br /> Industry Excellence
//           </h1>

//           {/* Subtext */}
//           <p
//             ref={subtextRef}
//             className="text-2xl text-gray-600 leading-relaxed"
//           >
//             Raising the bar in performance and innovation across global markets.
//             We empower businesses to scale faster, operate smarter, and lead
//             with confidence.
//           </p>

//           {/* Stats */}
//           <div ref={statsRef} className="space-y-6 mt-4">
//             <div className="stat-item flex items-start space-x-6">
//               <span className="text-4xl font-extrabold text-blue-600">
//                 100M+
//               </span>
//               <div>
//                 <p className="text-gray-800 font-semibold">
//                   Projected Talent Gap
//                 </p>
//                 <p className="text-gray-500 text-sm">
//                   Global workforce shortage expected by 2025.
//                 </p>
//               </div>
//             </div>

//             <div className="stat-item flex items-start space-x-6">
//               <span className="text-4xl font-extrabold text-green-600">
//                 150%
//               </span>
//               <div>
//                 <p className="text-gray-800 font-semibold">
//                   Unmatched Reliability
//                 </p>
//                 <p className="text-gray-500 text-sm">
//                   Industry-leading uptime across environment{" "}
//                 </p>
//               </div>
//             </div>

//             <div className="stat-item flex items-start space-x-6">
//               <span className="text-4xl font-extrabold text-purple-600">
//                 211M+
//               </span>
//               <div>
//                 <p className="text-gray-800 font-semibold">Annual Engagement</p>
//                 <p className="text-gray-500 text-sm">
//                   Millions of active users interacting{" "}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

export default function SectionThree() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    const headingSplit = new SplitText(headingRef.current, {
      type: "lines,words",
      linesClass: "lineChild",
    });
    gsap.set(headingSplit.words, { opacity: 0, y: 40 });
    tl.to(headingSplit.words, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.04,
      ease: "power3.out",
    });

    const subtextSplit = new SplitText(subtextRef.current, {
      type: "lines",
      linesClass: "lineChild",
    });
    gsap.set(subtextSplit.lines, { opacity: 0, y: 25 });
    tl.to(
      subtextSplit.lines,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.3"
    );

    const stats = statsRef.current.querySelectorAll(".stat-item");
    stats.forEach((stat) => {
      const number = stat.querySelector("span");
      const target = parseFloat(number.textContent.replace(/[^0-9.]/g, ""));
      const suffix = number.textContent.replace(/[0-9.]/g, "");

      gsap.fromTo(
        number,
        { textContent: 0, opacity: 0, y: 15 },
        {
          textContent: target,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            number.textContent =
              Math.floor(this.targets()[0].textContent) + suffix;
          },
        }
      );

      const desc = stat.querySelector("div");
      gsap.fromTo(
        desc,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    const badge = sectionRef.current.querySelector(".badge");
    gsap.from(badge, {
      scale: 0.7,
      opacity: 0,
      rotation: 5,
      duration: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: badge,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      headingSplit.revert();
      subtextSplit.revert();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-three w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-center px-4 md:px-16 py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full max-w-7xl mx-auto">
        {/* Left side placeholder for visuals */}
        <div className="flex items-center justify-center">
          <div className="w-full h-[400px] bg-slate-700/20 rounded-2xl border border-slate-600 flex items-center justify-center">
            <p className="text-slate-400 text-sm">3D Processor Model Here</p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col max-w-2xl mx-auto lg:mx-0 space-y-8">
          <span className="badge inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-xs font-semibold tracking-wider px-4 py-1 rounded-full shadow-lg">
            AI-Powered Processing
          </span>

          <h1
            ref={headingRef}
            className="w-full text-3xl md:text-5xl font-bold leading-tight"
          >
            Lightweight AI Processor for Next-Gen Computing
          </h1>

          <p
            ref={subtextRef}
            className="text-lg text-slate-300 leading-relaxed"
          >
            Harness cutting-edge algorithms and energy-efficient design. Elevate
            your system's capabilities while maintaining top performance.
          </p>

          <div ref={statsRef} className="w-full ml-80 space-y-6 mt-6">
            <div className="stat-item flex items-start space-x-6">
              <span className="text-4xl font-bold text-blue-400">4.2GHz</span>
              <div>
                <p className="text-slate-100 font-medium">Clock Speed</p>
                <p className="text-slate-400 text-sm">
                  Ultra-fast multi-threaded operations.
                </p>
              </div>
            </div>

            <div className="stat-item flex items-start space-x-6">
              <span className="text-4xl font-bold text-green-400">7W</span>
              <div>
                <p className="text-slate-100 font-medium">Power Draw</p>
                <p className="text-slate-400 text-sm">
                  Energy optimized for low heat output.
                </p>
              </div>
            </div>

            <div className="stat-item flex items-start space-x-6">
              <span className="text-4xl font-bold text-purple-400">99.9%</span>
              <div>
                <p className="text-slate-100 font-medium">Reliability</p>
                <p className="text-slate-400 text-sm">
                  Mission-critical stability and uptime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

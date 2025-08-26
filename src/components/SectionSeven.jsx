"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectionSeven() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animations
      timeline
        .from(".section-seven-heading", {
          opacity: 0,
          y: 80,
          duration: 1.2,
          ease: "power4.out",
        })
        .from(
          ".section-seven-subtext",
          { opacity: 0, y: 40, duration: 1, ease: "power3.out" },
          "-=0.7"
        )
        .from(
          ".gradient-text",
          { opacity: 0, y: 20, duration: 1.5, ease: "power2.out" },
          "-=0.5"
        )
        .from(
          ".section-seven-blockquote",
          { opacity: 0, y: 60, scale: 0.95, duration: 1.2, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ".section-seven-author",
          { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" },
          "-=0.7"
        )
        .from(
          ".section-seven-btn",
          { opacity: 0, y: 40, scale: 0.9, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
  <section
  ref={sectionRef}
  className="relative min-h-screen flex items-center justify-center font-mono overflow-hidden bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-black"
>
  <div className="relative bg-gradient-to-r from-purple-100 to-blue-100 min-h-screen flex items-center justify-center p-6">
  <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center glassmorphism p-10 rounded-3xl shadow-xl relative">
    
    {/* Left Side: Text */}
    <div className="lg:w-1/2 mb-8 lg:mb-0">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 mb-4">
        What AI Leaders Say
      </h2>
      <p className="text-gray-700 mb-6">
        Discover how AI solutions are transforming industries, enhancing productivity, 
        and creating new opportunities through real-world success stories.
      </p>
      <blockquote className="text-lg italic text-green-700 mb-4">
        "Integrating AI-powered systems has revolutionized our operations and helped us make smarter, data-driven decisions across all departments."
      </blockquote>
      <div className="text-blue-600 font-semibold">
        Dr. Elena Martinez
        <p className="text-gray-500 font-normal text-sm">Chief AI Officer at TechNova</p>
      </div>
      <button className="mt-6 px-6 py-2 bg-white bg-opacity-40 backdrop-blur-md rounded-full font-semibold hover:bg-opacity-60 transition">
        Explore AI Stories
      </button>
    </div>

    </div>
  </div>
</section>

  );
}

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

      timeline
        .from(".section-seven-heading", {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          ".section-seven-subtext",
          { opacity: 0, y: 40, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          ".section-seven-feature",
          { opacity: 0, y: 40, duration: 1, ease: "power3.out", stagger: 0.2 },
          "-=0.5"
        )
        .from(
          ".section-seven-btn",
          { opacity: 0, scale: 0.9, duration: 0.7, ease: "back.out(1.7)" },
          "-=0.4"
        )
        .from(
          ".section-seven-stats",
          { opacity: 0, y: 30, duration: 1, ease: "power3.out", stagger: 0.2 },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "10x", label: "Faster Processing" },
    { number: "70%", label: "Energy Savings" },
    { number: "24/7", label: "Reliability" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center font-mono overflow-hidden px-6 lg:px-12 py-16"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Column: Content + Stats */}
        <div className="w-full lg:w-1/2 space-y-10 text-left">
          <div className="space-y-6">
            <h2 className="section-seven-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
              The Future of Chips
            </h2>
            <p className="section-seven-subtext text-gray-700 leading-relaxed text-base sm:text-lg max-w-xl">
              Discover how next-generation AI chips are redefining speed,
              efficiency, and performance, enabling breakthroughs across every
              industry.
            </p>
          </div>

          <button className="section-seven-btn mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-transform">
            Learn More About Chips
          </button>

          {/* Stats Section */}
          <div className="section-seven-stats grid grid-cols-3 gap-6 mt-10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center bg-white/30 backdrop-blur-md p-4 rounded-xl shadow-md"
              >
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-700 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Model Placeholder */}
        <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"></div>
      </div>
    </section>
  );
}

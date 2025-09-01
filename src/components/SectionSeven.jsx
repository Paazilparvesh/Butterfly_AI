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
          ".section-seven-quote",
          { opacity: 0, y: 40, duration: 1, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ".section-seven-author",
          { opacity: 0, y: 20, duration: 0.7, ease: "power2.out" },
          "-=0.5"
        )
        .from(
          ".section-seven-btn",
          { opacity: 0, scale: 0.9, duration: 0.7, ease: "back.out(1.7)" },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center font-mono overflow-hidden bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-black px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column */}
        <div className="w-full lg:w-1/3 space-y-6 text-center lg:text-left">
          <h2 className="section-seven-heading text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            AI That Inspires
          </h2>
          <p className="section-seven-subtext text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            Explore how forward-thinking leaders are shaping the future with
            AI-driven innovation. Real stories. Real impact.
          </p>
        </div>

        {/* Middle Column - 3D Model Placeholder */}
        <div className="w-full lg:w-1/3 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"></div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3 space-y-6 text-center lg:text-right">
          <blockquote className="section-seven-quote text-base sm:text-lg italic text-gray-800 dark:text-gray-200">
            “AI is no longer just a tool — it’s a partner helping us reimagine
            possibilities and unlock growth across industries.”
          </blockquote>
          <div className="section-seven-author text-blue-600 font-semibold dark:text-blue-400">
            Dr. Elena Martinez
            <p className="text-gray-500 dark:text-gray-400 font-normal text-xs sm:text-sm">
              Chief AI Officer at TechNova
            </p>
          </div>
          <button className="section-seven-btn mt-4 px-5 sm:px-6 py-2 bg-white/40 backdrop-blur-md rounded-full font-semibold hover:bg-white/60 transition text-sm sm:text-base">
            Explore AI Stories
          </button>
        </div>
      </div>
    </section>
  );
}

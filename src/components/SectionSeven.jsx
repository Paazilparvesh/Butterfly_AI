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

      // Enhanced animations with more dynamic effects
      timeline
        .from(".section-seven-heading", {
          opacity: 0,
          y: 80,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.1,
        })
        .from(
          ".section-seven-subtext",
          {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .from(
          ".gradient-text",
          {
            opacity: 0,
            y: 20,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.05,
          },
          "-=0.5"
        )
        .from(
          ".section-seven-blockquote",
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".section-seven-author",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
          },
          "-=0.7"
        )
        .from(
          ".section-seven-btn",
          {
            opacity: 0,
            y: 40,
            scale: 0.9,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={sectionRef} className="py-70  font-mono relative z-20 overflow-hidden">
      {/* Animated background elements */}
     
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-13">
          <span className="uppercase text-blue-600 font-semibold tracking-wider gradient-text">
       
          </span>
          <h2 className="section-seven-heading text-6xl font-bold mt-3 mb-2">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              What AI Leaders Say
            </span>
          </h2>
          <p className="section-seven-subtext text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how AI solutions are transforming industries, enhancing productivity, and creating new opportunities through real-world success stories.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <blockquote className="section-seven-blockquote text-4xl lg:text-5xl font-light leading-tight mb-8">
              <span className="gradient-text bg-gradient-to-r from-gray-800 via-blue-700 to-purple-700 bg-clip-text text-transparent">
                "Integrating AI-powered systems has revolutionized our operations and helped us make smarter, data-driven decisions across all departments."
              </span>
            </blockquote>
            <div className="section-seven-author">
              <p className="text-xl font-medium mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dr. Elena Martinez
              </p>
              <p className="text-gray-600">Chief AI Officer at TechNova</p>
            </div>
            <button className="section-seven-btn mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
              Explore AI Stories
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80">
              {/* Animated decorative element */}
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}
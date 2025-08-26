"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, User, TrendingDown, Fingerprint } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      masterTl.fromTo(
        headingRef.current,
        { opacity: 0, y: 80, rotationX: -45, scale: 0.9 },
        { opacity: 1, y: 0, rotationX: 0, scale: 1, duration: 1.2, ease: "power4.out" },
        0
      );

      cardRefs.current.forEach((card, index) => {
        gsap.set(card, { opacity: 0, y: 50, rotationY: -15, scale: 0.9 });
        masterTl.to(
          card,
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
          },
          0.2 + index * 0.15
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };

  const features = [
    {
      icon: <Eye className="w-8 h-8 text-white" />,
      title: "AI-Driven 3D Modeling",
      description: "Generate intricate 3D models effortlessly using intelligent AI algorithms.",
    },
    {
      icon: <User className="w-8 h-8 text-white" />,
      title: "Optimized GPU Rendering",
      description: "High-performance GPU cloud management ensures fast and realistic rendering.",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-white" />,
      title: "Rapid Iteration & Training",
      description: "Train AI models quickly and iterate designs with minimal manual effort.",
    },
    {
      icon: <Fingerprint className="w-8 h-8 text-white" />,
      title: "Intelligent Content Creation",
      description: "AI-powered tools allow you to create, refine, and deploy 3D assets seamlessly.",
    },
  ];

  return (
  <section
  ref={sectionRef}
  className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-indigo-50 font-mono pl-20 pr-6 md:pr-12"
>
  <div className="max-w-6xl w-full ml-0">
    {/* Heading */}
    <h2
      ref={headingRef}
      className="text-4xl md:text-6xl font-bold text-left text-gray-900 mb-12 leading-tight"
    >
      Transforming 3D Design{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
        with AI
      </span>
    </h2>

    {/* Features */}
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
      {features.map((item, index) => (
        <div
          key={index}
          ref={addToRefs}
          className="flex items-start space-x-6 p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 hover:border-transparent hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          <div className="feature-icon bg-gradient-to-br from-purple-600 to-indigo-600 p-4 rounded-2xl flex items-center justify-center shadow-md">
            {item.icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}

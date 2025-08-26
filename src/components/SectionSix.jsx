import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, User, TrendingDown, Fingerprint } from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const rightPanelRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Create a master timeline for coordinated animations
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          toggleActions: "play none none reverse",
        }
      });

      // Animate heading with more dynamic effects
      masterTl.fromTo(
        headingRef.current,
        { 
          opacity: 0, 
          y: 100, 
          rotationX: -45,
          scale: 0.8 
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1.5,
          ease: "power4.out",
        },
        0
      );

      // Animate cards with staggered entrance and 3D effects
      cardRefs.current.forEach((card, index) => {
        // Create individual card timelines
        const cardTl = gsap.timeline();
        
        // Initial state
        gsap.set(card, {
          opacity: 0,
          y: 80 + index * 10,
          rotationY: -15,
          scale: 0.9
        });
        
        // Animation sequence
        cardTl
          .to(card, {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
          })
          .to(card, {
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.7)",
          }, 0)
          .to(card.querySelector('.feature-icon'), {
            rotation: 360,
            scale: 1.2,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
          }, 0.2)
          .to(card, {
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            duration: 0.6,
          }, 0);
          
        // Add to master timeline with staggered delay
        masterTl.add(cardTl, 0.2 + index * 0.15);
      });

      // Animate the right panel with a floating effect
   

      // Add background elements animation
    

      // Add a subtle scale pulse to the entire section on enter
      masterTl.fromTo(sectionRef.current, 
        { scale: 0.98 },
        { scale: 1, duration: 1, ease: "power2.out" },
        0
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const features = [
    {
      icon: <Eye className="w-8 h-8 text-white" />,
      title: "AI-Driven 3D Modeling",
      description:
        "Generate intricate 3D models effortlessly using intelligent AI algorithms.",
    },
    {
      icon: <User className="w-8 h-8 text-white" />,
      title: "Optimized GPU Rendering",
      description:
        "High-performance GPU cloud management ensures fast and realistic rendering.",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-white" />,
      title: "Rapid Iteration & Training",
      description:
        "Train AI models quickly and iterate designs with minimal manual effort.",
    },
    {
      icon: <Fingerprint className="w-8 h-8 text-white" />,
      title: "Intelligent Content Creation",
      description:
        "AI-powered tools allow you to create, refine, and deploy 3D assets seamlessly.",
    },
  ];

  return (
   <section
  ref={sectionRef}
  className="testimonials-section font-mono w-full py-110 px-4 md:px-8 relative overflow-hidden from-purple-50 to-indigo-50"
>
  {/* Animated background elements */}
  
  <div className="max-w-7xl relative z-10 ml-50">   {/* 👈 shifted ~2cm left */}
    {/* Left content (features) */}
    <div className="w-full md:w-1/2">
      <h2
        ref={headingRef}
        className="text-4xl md:text-6xl font-bold text-left text-gray-900 mb-16 leading-tight"
      >
        Transforming 3D Design{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          with AI
        </span>
      </h2>

      <div className="grid grid-cols-1 gap-8 max-w-xl">
        {features.map((item, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="flex items-start space-x-6 p-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-xl"
          >
            <div className="feature-icon bg-gradient-to-br from-purple-600 to-indigo-600 p-4 rounded-2xl flex items-center justify-center shadow-lg">
              {item.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
}
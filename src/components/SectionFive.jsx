"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const members = [
  { id: 1, name: "Alex Johnson", role: "Frontend Developer", img: "https://randomuser.me/api/portraits/men/1.jpg", link: "https://github.com/meschacirung" },
  { id: 2, name: "Sarah Williams", role: "UI Designer", img: "https://randomuser.me/api/portraits/women/2.jpg", link: "https://github.com/meschacirung" },
  { id: 3, name: "Michael Chen", role: "Backend Engineer", img: "https://randomuser.me/api/portraits/men/3.jpg", link: "https://github.com/meschacirung" },
  { id: 4, name: "Emma Rodriguez", role: "Product Manager", img: "https://randomuser.me/api/portraits/women/4.jpg", link: "https://github.com/meschacirung" },
  { id: 5, name: "David Kim", role: "DevOps Specialist", img: "https://randomuser.me/api/portraits/men/5.jpg", link: "https://github.com/meschacirung" },
  { id: 6, name: "Priya Patel", role: "Data Scientist", img: "https://randomuser.me/api/portraits/women/6.jpg", link: "https://github.com/meschacirung" },
];

export default function CommunitySection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const statsRef = useRef(null);
  const membersRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Create context for GSAP animations
    let ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(headingRef.current, 
        { 
          opacity: 0, 
          y: 100,
          skewX: 10
        },
        { 
          opacity: 1, 
          y: 0,
          skewX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate subheading
      gsap.fromTo(subheadingRef.current, 
        { 
          opacity: 0, 
          y: 50 
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate stats with counter effect
      gsap.fromTo(statsRef.current.querySelectorAll(".stat-number"), 
        { 
          opacity: 0, 
          y: 30,
          innerText: 0
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          innerText: function(index) {
            return index === 0 ? 250 : index === 1 ? 1200 : 84;
          },
          snap: { innerText: 1 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate stat labels
      gsap.fromTo(statsRef.current.querySelectorAll(".stat-label"), 
        { 
          opacity: 0, 
          y: 20 
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 1,
          stagger: 0.2,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate member cards with staggered effect
      gsap.fromTo(membersRef.current.querySelectorAll(".member-card"), 
        { 
          opacity: 0, 
          y: 60,
          rotationY: 15,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          rotationY: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: membersRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate CTA button with a pulsing effect
  

      // Add a subtle floating animation to member cards on hover
      membersRef.current.querySelectorAll(".member-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            duration: 0.4,
            ease: "power2.out"
          });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          });
        });
      });
    }, sectionRef);

    // Clean up
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20  font-mono md:py-28 overflow-hidden">
      <div className="max-w-9xl mx-auto pl-[8cm]">
        {/* Heading */}
        <div
          className="text-left mb-16"
          ref={headingRef}
        >
          <h2
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6"
          >
            Built by the Community <br /> for the Community
          </h2>
          <p
            ref={subheadingRef}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
          >
            Our vibrant community of developers, designers, and innovators collaborate to create amazing open-source projects that benefit everyone.
          </p>
          
          {/* Stats */}
          <div 
            ref={statsRef}
            className="flex flex-wrap gap-8 mt-10"
          >
            <div className="flex flex-col">
              <span className="stat-number text-3xl font-bold text-purple-600">0</span>
              <span className="stat-label text-gray-500 dark:text-gray-400">Contributors</span>
            </div>
            <div className="flex flex-col">
              <span className="stat-number text-3xl font-bold text-pink-500">0</span>
              <span className="stat-label text-gray-500 dark:text-gray-400">Commits</span>
            </div>
            <div className="flex flex-col">
              <span className="stat-number text-3xl font-bold text-red-500">0</span>
              <span className="stat-label text-gray-500 dark:text-gray-400">Projects</span>
            </div>
          </div>
        </div>

        {/* Members Grid */}
        <div 
          ref={membersRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl"
        >
          {members.map((member) => (
            <div
              key={member.id}
              className="member-card relative group"
            >
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
                    <img
                      alt={member.name}
                      src={member.img}
                      loading="lazy"
                      className="relative h-20 w-20 md:h-24 md:w-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg z-10"
                    />
                    <div className="absolute bottom-0 right-0 h-5 w-5 md:h-6 md:w-6 rounded-full bg-green-500 border-2 border-white dark:border-gray-800 z-20"></div>
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white text-sm md:text-base">{member.name}</h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1">{member.role}</p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div 
          ref={ctaRef}
          className="mt-20 text-left"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform transition-all duration-300">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
}
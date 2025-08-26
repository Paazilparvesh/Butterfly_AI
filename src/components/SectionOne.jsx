import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import flower from "/src/assets/AdobeStock_528659502_Preview.png"

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

const CraftBeautiful = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const paragraphRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const [isButton1Hovered, setIsButton1Hovered] = useState(false);
  const [isButton2Hovered, setIsButton2Hovered] = useState(false);

  // Ripple effect for buttons
  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      event.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      event.clientY - button.getBoundingClientRect().top - radius
    }px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  useEffect(() => {
    // Only animate if the elements exist
    if (headingRef.current && containerRef.current) {
      // Create a timeline for sequenced animations
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Split the heading text for character animation
      const splitHeading = new SplitText(headingRef.current, {
        type: "chars,words",
        wordsClass: "word",
        charsClass: "char",
      });

      // Create background glow elements
      const glowElements = [];

      for (let i = 0; i < 8; i++) {
        const glow = document.createElement("div");
        glow.className = "absolute rounded-full blur-xl opacity-0";
        glow.style.width = glow.style.height = `${gsap.utils.random(
          80,
          200
        )}px`;
        glow.style.left = `${gsap.utils.random(20, 80)}%`;
        glow.style.top = `${gsap.utils.random(20, 80)}%`;
        containerRef.current.appendChild(glow);
        glowElements.push(glow);
      }

      // Set initial state
      gsap.set(splitHeading.chars, {
        opacity: 0,
        y: () => gsap.utils.random(80, 120),
        rotation: () => gsap.utils.random(-20, 20),
        scale: 0.5,
      });

      // Animation sequence
      masterTl
        // Animate glow elements in
        .to(
          glowElements,
          {
            opacity: 0.6,
            duration: 1.5,
            stagger: 0.1,
            ease: "power2.out",
          },
          0
        )
        // Animate heading characters
        .to(
          splitHeading.chars,
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 1.2,
            stagger: 0.03,
            ease: "back.out(1.7)",
          },
          0.5
        )
        // Animate the colored words differently
        .to(
          headingRef.current
            .querySelector(".text-indigo-600")
            .querySelectorAll(".char"),
          {
            color: "#4f46e5",
            duration: 0.8,
            stagger: {
              each: 0.03,
              from: "random",
            },
            ease: "power2.out",
          },
          1.2
        )
        // Add a shimmer effect to the colored text
        .to(
          headingRef.current
            .querySelector(".text-indigo-600")
            .querySelectorAll(".char"),
          {
            repeat: 2,
            ease: "sine.inOut",
          },
          1.5
        )
        // Add floating animation to all characters
        .to(
          splitHeading.chars,
          {
            y: () => gsap.utils.random(-5, 5),
            rotation: () => gsap.utils.random(-2, 2),
            duration: 3,
            stagger: 0.01,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          },
          2
        )
        // Animate buttons
        .fromTo(
          [button1Ref.current, button2Ref.current],
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          2
        );

      // Create a continuous animation for glow elements
      glowElements.forEach((glow) => {
        gsap.to(glow, {
          x: gsap.utils.random(-100, 100),
          y: gsap.utils.random(-50, 50),
          duration: gsap.utils.random(8, 12),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      // Cleanup function
      return () => {
        if (splitHeading.revert) splitHeading.revert();
        masterTl.kill();
        glowElements.forEach((glow) => glow.remove());
      };
    }
  }, []);

  return (
    <div className="min-h-screen flex items-start justify-center ">
      <section
        ref={sectionRef}
        className="relative w-full py-20 px-6 overflow-hidden"
      >
        <div
          ref={containerRef}
          className="max-w-6xl text-center font-mono relative"
        >
          {/* Header */}
          <h1
            // ref={headingRef}
            className="text-20xl md:text-9xl lg:text-8xl 2xl:text-8xl text-start font-extrabold tracking-tight text-white leading-tight mb-8 font-diphylleia"
          >Where Power{" "}<br/>
            <span className="">Meets Lightness</span>
          </h1>

          <p
            ref={paragraphRef}
            className="text-lg md:text-xl 2xl:text-2xl text-black text-left "
          >
            As Weightless as a Butterfly, As Smart as AI.
          </p>

          {/* Button Container */}
          <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-start items-center">
            {/* Primary Button */}
            <button
              ref={button1Ref}
              className="relative overflow-hidden px-10 py-5 bg-[#005eff]  text-white text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
              onMouseEnter={() => setIsButton1Hovered(true)}
              onMouseLeave={() => setIsButton1Hovered(false)}
              onClick={createRipple}
            >
              <span className="relative z-10">Get Started</span>

              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Shine effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine transition-all duration-700"></div>

              {/* Pulse ring effect */}
              {isButton1Hovered && (
                <div className="absolute inset-0 rounded-2xl border-2 border-indigo-400 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>

            {/* Secondary Button */}
            <button
              ref={button2Ref}
              className="relative overflow-hidden px-10 py-5 bg-transparent text-[#005eff] text-xl font-semibold rounded-2xl border-2 border-indigo-400 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group"
              onMouseEnter={() => setIsButton2Hovered(true)}
              onMouseLeave={() => setIsButton2Hovered(false)}
              onClick={createRipple}
            >
              <span className="relative z-10">Learn More</span>

              {/* Hover fill effect */}
              <div className="absolute inset-0 bg-indigo-600 w-0 group-hover:w-full transition-all duration-500 rounded-2xl opacity-10 group-hover:opacity-20"></div>

              {/* Border animation */}
              <div className="absolute -inset-1 rounded-2xl border-2 border-indigo-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
            </button>
          </div>
          {/* <img src={flower} alt="" className="absolute top-0 -right-100" />   */}
        </div>

            

        {/* Floating elements for visual interest */}
      </section>

      <style jsx>{`
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .ripple {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.7);
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
        }
        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        .animate-shine {
          animation: shine 1.5s ease-out;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .hover:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(79, 70, 229, 0.25),
            0 0 15px rgba(99, 102, 241, 0.5);
        }
      `}</style>
    </div>
  );
};

export default CraftBeautiful;

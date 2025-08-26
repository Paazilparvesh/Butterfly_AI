
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectionFour() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Left cards animation (from outside left)
      gsap.from(".card-left", {
        x: "-100vw",
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset", // 👈 replay every time
        },
      });

      // Right cards animation (from outside right)
      gsap.from(".card-right", {
        x: "100vw",
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none reset", // 👈 replay every time
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen font-mono flex flex-col items-center justify-center relative px-4 z-10"
    >
       {/* <style>{`
        .background-blur > div {
          width: 240px;
          height: 360px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.5),
            inset 0 -1px 0 rgba(255, 255, 255, 0.1),
            inset 0 0 42px 21px rgba(255, 255, 255, 1);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .background-blur > div::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.8),
            transparent
          );
        }
        .background-blur > div::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 1px;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.8),
            transparent,
            rgba(255, 255, 255, 0.3)
          );
        }
        .background-blur > div:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 40px rgba(0,0,0,0.25);
        }
      `}</style>  */}
      <div className="w-full max-w-7xl mx-auto px-6 backdrop-blur-md">
       
        <h1 className="text-center font-bold text-5xl sm:text-6xl leading-tight mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
          INF AI Application Suite
        </h1>

        {/* Cards Grid */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8">
          {/* Card 1 - Left */}
          <div className="card-left group bg-gradient-to-b from-blue-400 to-blue-600 bg-opacity-90 backdrop-blur-md border border-white/20 h-[420px] text-white rounded-2xl p-6 flex flex-col w-full lg:w-1/4 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-3">INF ProWriter</h3>
            <p className="text-sm mb-4 font-light leading-relaxed">
              Transform your ideas into polished, professional documents with
              our AI-powered writing assistant. Custom templates ensure
              consistency across all your business communications.
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135670.png"
              alt="ProWriter"
              className="w-28 h-28 mx-auto mt-auto transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Card 2 - Left */}
          <div className="card-left group bg-gradient-to-b from-indigo-400 to-indigo-600 bg-opacity-90 backdrop-blur-md border border-white/20 h-[420px] text-white rounded-2xl p-6 flex flex-col w-full lg:w-1/4 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-3">INF Knowledge+</h3>
            <p className="text-sm mb-4 font-light leading-relaxed">
              Intelligent knowledge retrieval system that connects insights
              across your documents and verified web sources. Never lose
              critical information again.
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
              alt="Knowledge"
              className="w-28 h-28 mx-auto mt-auto transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Card 3 - Right */}
          <div className="card-right group bg-gradient-to-b from-purple-400 to-purple-600 bg-opacity-90 backdrop-blur-md border border-white/20 h-[420px] text-white rounded-2xl p-6 flex flex-col w-full lg:w-1/4 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-3">INF ChatBI</h3>
            <p className="text-sm mb-4 font-light leading-relaxed">
              Your conversational data analyst. Ask natural questions about your
              business metrics and receive actionable insights with
              visualizations.
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712108.png"
              alt="ChatBI"
              className="w-28 h-28 mx-auto mt-auto transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Card 4 - Right */}
          <div className="card-right group bg-gradient-to-b from-blue-400 to-blue-500 bg-opacity-90 backdrop-blur-md border border-white/20 h-[420px] text-white rounded-2xl p-6 flex flex-col w-full lg:w-1/4 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold mb-3">INF DocReviewer</h3>
            <p className="text-sm mb-4 font-light leading-relaxed">
              Automated compliance checking and quality assurance for your
              documents. Ensures adherence to standards and identifies
              improvement areas.
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135714.png"
              alt="DocReviewer"
              className="w-28 h-28 mx-auto mt-auto transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
     </div>
      {/* </div> */}
    </section>
  );
}

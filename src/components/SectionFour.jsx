import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectionFour() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen font-mono flex flex-col items-center justify-center relative px-4 z-10  "
    >
      <div className="w-full max-w-7xl mx-auto px-6 rounded-2xl">
        <h1 className="text-center font-bold text-5xl sm:text-6xl leading-tight mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
          The Power of the Butterfly AI Chip
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Left Column - Features */}
          <div className="flex flex-col gap-6">
            <div className="p-6 bg-white/10 dark:bg-white/5 rounded-2xl border border-white/20 shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                Extreme Performance
              </h3>
              <p className="text-sm text-gray-700">
                Billions of operations per second, optimized for AI inference
                and training workloads.
              </p>
            </div>
            <div className="p-6 bg-white/10 dark:bg-white/5 rounded-2xl border border-white/20 shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                Adaptive Intelligence
              </h3>
              <p className="text-sm text-gray-700 ">
                Self-optimizing architecture that learns and evolves with your
                applications.
              </p>
            </div>
          </div>

          {/* Center Column - Chip Visualization */}
          <div className="flex items-center justify-center"></div>

          {/* Right Column - Features */}
          <div className="flex flex-col gap-6">
            <div className="p-6 bg-white/10 dark:bg-white/5 rounded-2xl border border-white/20 shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                Enterprise Security
              </h3>
              <p className="text-sm text-gray-700">
                Hardware-level encryption and threat detection built into the
                chip itself.
              </p>
            </div>
            <div className="p-6 bg-white/10 dark:bg-white/5 rounded-2xl border border-white/20 shadow-md">
              <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400">
                Infinite Scalability
              </h3>
              <p className="text-sm text-gray-700">
                Seamlessly scales from edge devices to massive cloud clusters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const members = [
//   {
//     id: 1,
//     name: "Alex Johnson",
//     role: "Frontend Developer",
//     img: "https://randomuser.me/api/portraits/men/1.jpg",
//     link: "https://github.com/meschacirung",
//   },
//   {
//     id: 2,
//     name: "Sarah Williams",
//     role: "UI Designer",
//     img: "https://randomuser.me/api/portraits/women/2.jpg",
//     link: "https://github.com/meschacirung",
//   },
//   {
//     id: 3,
//     name: "Michael Chen",
//     role: "Backend Engineer",
//     img: "https://randomuser.me/api/portraits/men/3.jpg",
//     link: "https://github.com/meschacirung",
//   },
//   {
//     id: 4,
//     name: "Emma Rodriguez",
//     role: "Product Manager",
//     img: "https://randomuser.me/api/portraits/women/4.jpg",
//     link: "https://github.com/meschacirung",
//   },
//   {
//     id: 5,
//     name: "David Kim",
//     role: "DevOps Specialist",
//     img: "https://randomuser.me/api/portraits/men/5.jpg",
//     link: "https://github.com/meschacirung",
//   },
//   {
//     id: 6,
//     name: "Priya Patel",
//     role: "Data Scientist",
//     img: "https://randomuser.me/api/portraits/women/6.jpg",
//     link: "https://github.com/meschacirung",
//   },
// ];

// export default function CommunitySection() {
//   const sectionRef = useRef(null);
//   const headingRef = useRef(null);
//   const subheadingRef = useRef(null);
//   const statsRef = useRef(null);
//   const membersRef = useRef(null);
//   const ctaRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       gsap.fromTo(
//         headingRef.current,
//         { opacity: 0, y: 60 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
//         }
//       );
//       gsap.fromTo(
//         subheadingRef.current,
//         { opacity: 0, y: 40 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           delay: 0.3,
//           ease: "power2.out",
//           scrollTrigger: { trigger: subheadingRef.current, start: "top 85%" },
//         }
//       );
//       gsap.fromTo(
//         membersRef.current.querySelectorAll(".member-card"),
//         { opacity: 0, y: 40, scale: 0.9 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.6,
//           stagger: 0.1,
//           ease: "back.out(1.4)",
//           scrollTrigger: { trigger: membersRef.current, start: "top 80%" },
//         }
//       );
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="min-h-screen flex flex-col justify-center font-mono py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black"
//     >
//       <div className="w-full px-6 md:px-12 text-right max-w-6xl ml-auto">
//         {/* Heading */}
//         <div ref={headingRef} className="mb-10">
//           <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
//             Built by the Community <br /> for the Community
//           </h2>
//           <p
//             ref={subheadingRef}
//             className="mt-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed inline-block max-w-xl"
//           >
//             Our vibrant community of developers, designers, and innovators
//             collaborate to create amazing open-source projects that benefit
//             everyone.
//           </p>

//           {/* Stats */}
//           <div ref={statsRef} className="flex flex-wrap gap-6 mt-8 justify-end">
//             <div className="flex flex-col text-right">
//               <span className="stat-number text-2xl font-bold text-purple-600">
//                 250
//               </span>
//               <span className="stat-label text-gray-500 dark:text-gray-400">
//                 Contributors
//               </span>
//             </div>
//             <div className="flex flex-col text-right">
//               <span className="stat-number text-2xl font-bold text-pink-500">
//                 1200
//               </span>
//               <span className="stat-label text-gray-500 dark:text-gray-400">
//                 Commits
//               </span>
//             </div>
//             <div className="flex flex-col text-right">
//               <span className="stat-number text-2xl font-bold text-red-500">
//                 84
//               </span>
//               <span className="stat-label text-gray-500 dark:text-gray-400">
//                 Projects
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Members Grid */}
//         <div
//           ref={membersRef}
//           className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-6 justify-items-end"
//         >
//           {members.map((member) => (
//             <div
//               key={member.id}
//               className="member-card relative group text-right transition-transform duration-300 hover:-translate-y-1"
//             >
//               <a
//                 href={member.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block"
//               >
//                 <div className="flex flex-col items-end text-right">
//                   <div className="relative mb-2">
//                     <img
//                       alt={member.name}
//                       src={member.img}
//                       loading="lazy"
//                       className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-md group-hover:scale-105 group-hover:ring-2 group-hover:ring-pink-400 transition-all duration-300"
//                     />
//                   </div>
//                   <h3 className="font-semibold text-gray-800 dark:text-white text-sm md:text-base">
//                     {member.name}
//                   </h3>
//                   <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
//                     {member.role}
//                   </p>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div ref={ctaRef} className="mt-12 text-right">
//           <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300">
//             Join Our Community
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const members = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Frontend Developer",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    link: "https://github.com/meschacirung",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "UI Designer",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    link: "https://github.com/meschacirung",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Backend Engineer",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    link: "https://github.com/meschacirung",
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Product Manager",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    link: "https://github.com/meschacirung",
  },
  {
    id: 5,
    name: "David Kim",
    role: "DevOps Specialist",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    link: "https://github.com/meschacirung",
  },
  {
    id: 6,
    name: "Priya Patel",
    role: "Data Scientist",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    link: "https://github.com/meschacirung",
  },
];

export default function CommunitySection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const statsRef = useRef(null);
  const membersRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: { trigger: subheadingRef.current, start: "top 85%" },
        }
      );
      gsap.fromTo(
        membersRef.current.querySelectorAll(".member-card"),
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: { trigger: membersRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col md:flex-row justify-center items-stretch font-mono py-16 md:py-20 bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-black"
    >
      {/* Left side reserved for 3D model */}
      <div className="hidden md:flex flex-1"></div>

      {/* Right side content */}
      <div className="flex-1 w-full px-6 md:px-12 text-left max-w-6xl">
        {/* Heading */}
        <div ref={headingRef} className="mb-10">
          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
            Built by the Community <br /> for the Future
          </h2>
          <p
            ref={subheadingRef}
            className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl"
          >
            A thriving ecosystem where developers, designers, and innovators
            collaborate to build groundbreaking open-source projects.
          </p>

          {/* Stats */}
          <div ref={statsRef} className="flex flex-wrap gap-16 mt-8">
            <div className="flex flex-col">
              <span className="stat-number text-3xl font-bold text-indigo-600">
                250+
              </span>
              <span className="stat-label text-gray-600 dark:text-gray-400">
                Contributors
              </span>
            </div>
            <div className="flex flex-col">
              <span className="stat-number text-3xl font-bold text-sky-500">
                1200+
              </span>
              <span className="stat-label text-gray-600 dark:text-gray-400">
                Commits
              </span>
            </div>
            <div className="flex flex-col">
              <span className="stat-number text-3xl font-bold text-cyan-500">
                84
              </span>
              <span className="stat-label text-gray-600 dark:text-gray-400">
                Projects
              </span>
            </div>
          </div>
        </div>

        {/* Members Grid */}
        <div
          ref={membersRef}
          className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6"
        >
          {members.map((member) => (
            <div
              key={member.id}
              className="member-card relative group text-left transition-transform duration-300 hover:-translate-y-1"
            >
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex flex-col items-start">
                  <div className="relative mb-2">
                    <img
                      alt={member.name}
                      src={member.img}
                      loading="lazy"
                      className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-md group-hover:scale-105 group-hover:ring-2 group-hover:ring-sky-400 transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white text-sm md:text-base">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                    {member.role}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div ref={ctaRef} className="mt-12 flex justify-end px-20">
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-sky-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
}

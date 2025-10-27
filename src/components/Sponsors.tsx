

// import React from "react";
// import {  useAnimationFrame } from "framer-motion";
// import { useRef } from "react";

// interface Voice {
//   id: string;
//   name: string;
//   logoSrc: string;
//   altText: string;
// }

// const voices: Voice[] = [
//   { id: "mtn", name: "Mtn", logoSrc: "../../Images/sponsor1.png", altText: "Mtn Logo" },
//   { id: "spotify", name: "Spotify", logoSrc: "../../Images/compass.png", altText: "Spotify Logo" },
//   { id: "piggyvest", name: "Piggyvest", logoSrc: "../../Images/yolat.png", altText: "Piggyvest Logo" },
//   { id: "paid", name: "Paid", logoSrc: "../../Images/compas.png", altText: "Paid Logo" },
//   { id: "krede", name: "Krede", logoSrc: "../../Images/mytherapist.png", altText: "Krede Logo" },
//   { id: "mandc", name: "Mandc", logoSrc: "../../Images/mtn.png", altText: "Mandc Logo" },
// ];

// const InfiniteCarousel = () => {
//   const baseVelocity = -50; // negative = left scroll
//   const x = useRef(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const innerRef = useRef<HTMLDivElement>(null);

//   // continuous animation frame loop
//   useAnimationFrame((t, delta) => {
//     if (!innerRef.current) return;
//     x.current += (baseVelocity * delta) / 1000;
//     if (Math.abs(x.current) >= innerRef.current.scrollWidth / 2) {
//       // reset to avoid visible snap
//       x.current = 0;
//     }
//     innerRef.current.style.transform = `translateX(${x.current}px)`;
//   });

//   return (
//     <div ref={containerRef} className="relative w-full overflow-hidden">
//       <div ref={innerRef} className="flex items-center gap-8">
//         {[...voices, ...voices].map((acc, i) => (
//           <div
//             key={acc.id + i}
//             className="flex-shrink-0 w-32 flex items-center justify-center"
//           >
//             <img
//               src={acc.logoSrc}
//               alt={acc.altText || acc.name}
//               className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
//               title={acc.name}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Sponsors: React.FC = () => {
//   return (
//     <section className="bg-gray-400 dark:bg-neutral-900 py-6  backdrop-blur-sm filter overflow-hidden">
//       <div className="max-w-7xl mx-auto md:px-0 text-center">
//         {/* Large Screens */}
//         <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
//           {voices.map((acc) => (
//             <div
//               key={acc.id}
//               className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
//             >
//               <img
//                 src={acc.logoSrc}
//                 alt={acc.altText || acc.name}
//                 className="max-h-20 w-auto object-contain md:grayscale hover:grayscale-0 transition duration-300"
//                 title={acc.name}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Small Screens */}
//         <div className="block sm:hidden">
//           <InfiniteCarousel />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Sponsors;


import React, { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

interface Voice {
  id: string;
  name: string;
  logoSrc: string;
  altText: string;
}

const voices: Voice[] = [
  { id: "mtn", name: "Mtn", logoSrc: "../../Images/sponsor1.png", altText: "Mtn Logo" },
  { id: "spotify", name: "Spotify", logoSrc: "../../Images/compass.png", altText: "Spotify Logo" },
  { id: "piggyvest", name: "Piggyvest", logoSrc: "../../Images/yolat.png", altText: "Piggyvest Logo" },
  { id: "paid", name: "Paid", logoSrc: "../../Images/compas.png", altText: "Paid Logo" },
  { id: "krede", name: "Krede", logoSrc: "../../Images/mytherapist.png", altText: "Krede Logo" },
  { id: "mandc", name: "Mandc", logoSrc: "../../Images/mtn.png", altText: "Mandc Logo" },
];

const InfiniteCarousel = () => {
  const baseVelocity = -50; // negative = left scroll
  const x = useRef(0);
  const innerRef = useRef<HTMLDivElement>(null);

  // continuous animation frame loop
  useAnimationFrame(( delta) => {
    if (!innerRef.current) return;
    x.current += (baseVelocity * delta) / 1000;
    if (Math.abs(x.current) >= innerRef.current.scrollWidth / 2) {
      // reset to avoid visible snap
      x.current = 0;
    }
    innerRef.current.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={innerRef} className="flex items-center gap-8">
        {[...voices, ...voices].map((acc, i) => (
          <div
            key={acc.id + i}
            className="flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src={acc.logoSrc}
              alt={acc.altText || acc.name}
              className="max-h-16 w-auto object-contain md:grayscale hover:grayscale-0 transition duration-300"
              title={acc.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Sponsors: React.FC = () => {
  return (
    <section className="dark:bg-neutral-900 py-6 backdrop-blur-sm filter overflow-hidden">
      <div className="max-w-7xl mx-auto md:px-0 text-center">
        {/* Large Screens */}
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {voices.map((acc) => (
            <div
              key={acc.id}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={acc.logoSrc}
                alt={acc.altText || acc.name}
                className="max-h-20 w-auto object-contain md:grayscale hover:grayscale-0 transition duration-300"
                title={acc.name}
              />
            </div>
          ))}
        </div>

        {/* Small Screens */}
        <div className="block sm:hidden">
          <InfiniteCarousel />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

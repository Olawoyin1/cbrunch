// import { Mic2 } from 'lucide-react';
// // import Brand from './Brand';

// export default function Speakers() {
  
//   const speakers = [
//     {
//       name: "Adeife Adeoye",
//       nickname: "",
//       title: "Digital Creator",
//       image: "../../Images/s1.jpeg"
//     },
//     {
//       name: "Ayobami Oyaleke",
//       nickname: "",
//       title: "CEO Mainstack",
//       image: "../../Images/s2.jpeg"
//     },
//       name: "Adeola Adedewe",
//       nickname: "",
//       title: "CEO Kredete",
//       image: "../../Images/s4.jpeg"
//     }
//   ];

//   return (
//     <section id="speakers" className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
//       <div className="max-w-7xl mx-auto px-4 ">
//         <div className="">
//           <div className="text-center">
//             <div className="inline-flex items-center gap-2 mb-6 px-4  py-3 bg-white rounded border border-gray-300">
//               <Mic2 className="w-5 h-5 text-orange-600" />
//               <span className="text-sm font-semibold text-gray-900 tracking-wide">SPEAKERS & GUESTS</span>
//             </div>
            
//           </div>

        

//           <div className="relative">
//             <div className="text-center mb-12">
//               <h3 className="text-2xl sm:text-5xl font-bold mb-2 text-gray-900">
//                 Meet The <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">Speakers</span>
//               </h3>
//               <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto">
//                 Get ready to learn from pioneers, innovators, and thought leaders shaping the future of work
//               </p>
//             </div>

//             <div className="grid grid-cols-1 max-w-4xl mx-auto md:grid-cols-3 gap-5">
//               {speakers.map((speaker, index) => (
//                 <div
//                   key={index}
//                   className="group relative"
//                 >
//                   <div className="relative rounded overflow-hidden  hover:shadow transition-all duration-500 hover:-translate-y-3">
//                     <div className="rounded-3xl h-[350px] relative overflow-hidden">
//                       <img
//                         src={speaker.image}
//                         alt={speaker.name}
//                         className="w-full h-[350px] md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

//                       <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border-2 border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                         <Mic2 className="w-6 h-6 text-white" />
//                       </div>

//                       <div className="absolute bottom-0 left-0 right-0 p-6">
//                         <h4 className="text-xl font-bold text-white mb-1">
//                           {speaker.name}
//                         </h4>
//                         {speaker.nickname && (
//                           <p className="text-orange-400 font-semibold text-sm mb-2">{speaker.nickname}</p>
//                         )}
//                         <p className="text-gray-300 text-sm font-medium">{speaker.title}</p>
//                       </div>
//                     </div>

//                     <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/50 rounded-3xl transition-colors duration-300"></div>
//                   </div>
//                 </div>
//               ))}

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );




import { Mic2 } from 'lucide-react';

export default function Speakers() {

  const speakers = [
    {
      name: "Adeife Adeoye",
      nickname: "",
      title: "Digital Creator",
      image: "../../Images/s1.jpeg",
    },
    {
      name: "Ayobami Oyaleke",
      nickname: "",
      title: "CEO Mainstack",
      image: "../../Images/s2.jpeg",
    },
    {
      name: "Ebuka Emmanuel Arinze",
      nickname: "",
      title: "CEO Kredete",
      image: "../../Images/ebuka.jpg",
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-3 bg-white rounded border border-gray-300">
              <Mic2 className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-semibold text-gray-900 tracking-wide">SPEAKERS & GUESTS</span>
            </div>
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-5xl font-bold mb-2 text-gray-900">
                Meet The <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">Speakers</span>
              </h3>
              <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto">
                Get ready to learn from pioneers, innovators, and thought leaders shaping the future of work
              </p>
            </div>

            <div className="grid grid-cols-1 max-w-4xl mx-auto md:grid-cols-3 gap-5">
              {speakers.map((speaker, index) => (
                <div key={index} className="group relative">
                  <div className="relative rounded overflow-hidden hover:shadow transition-all duration-500 hover:-translate-y-3">
                    <div className="rounded-3xl h-[350px] relative overflow-hidden">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-[350px] md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border-2 border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Mic2 className="w-6 h-6 text-white" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h4 className="text-xl font-bold text-white mb-1">{speaker.name}</h4>

                        {speaker.nickname && (
                          <p className="text-orange-400 font-semibold text-sm mb-2">{speaker.nickname}</p>
                        )}

                        <p className="text-gray-300 text-sm font-medium">{speaker.title}</p>
                      </div>
                    </div>

                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/50 rounded-3xl transition-colors duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


// import { motion } from "framer-motion";
// import type { Variants } from "framer-motion";
// import { Mic2 } from "lucide-react";

// export default function Speakers() {
//   // const speakers = [1, 2, 3];

//   // ✅ Type-safe animation variants
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.25, delayChildren: 0.3 },
//     },
//   };

//   const cardVariants: Variants = {
//     hidden: { opacity: 0, y: 40, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="relative py-24 bg-gradient-to-b from-[#fafafa] via-[#f5f5f5] to-[#ededed] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 mb-6 px-5 py-3 bg-white/70 backdrop-blur-sm rounded-md border border-gray-200 shadow-sm">
//             <Mic2 className="w-5 h-5 text-orange-500" />
//             <span className="text-sm font-semibold tracking-wide text-gray-900">
//               SPEAKERS & GUESTS
//             </span>
//           </div>

//           <h2 className="text-3xl sm:text-5xl font-bold mb-3 text-gray-900">
//             Meet The{" "}
//             <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
//               Speakers
//             </span>
//           </h2>
//           <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
//             Inspiring minds, shaping ideas, and redefining the next chapter of innovation.
//           </p>
//         </motion.div>

//         {/* Speaker Cards */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="grid grid-cols-1 max-w-4xl mx-auto md:grid-cols-3 gap-5"
//         >
//           {speakers.map((_, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
//               transition={{ type: "spring", stiffness: 150, damping: 12 }}
//               className="relative w-full max-w-[320px] h-[380px] mx-auto rounded-2xl overflow-hidden cursor-pointer 
//                          bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] border border-gray-800
//                          hover:shadow-[0_0_40px_rgba(255,102,0,0.25)] transition-all duration-700 group"
//             >
//               {/* Subtle light overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

//               {/* Animated top accent line */}
//               <motion.div
//                 className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent"
//                 initial={{ opacity: 0 }}
//                 whileHover={{ opacity: 1 }}
//                 transition={{ duration: 0.6 }}
//               />

//               {/* Content */}
//               <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
//                 <motion.div
//                   animate={{ opacity: [0.8, 1, 0.8] }}
//                   transition={{ duration: 3, repeat: Infinity }}
//                 >
//                   <Mic2 className="w-12 h-12 text-orange-500 mb-5" />
//                 </motion.div>
//                 <h4 className="text-2xl font-semibold text-white tracking-wide mb-2">
//                   Revealing Soon
//                 </h4>
//                 <p className="text-gray-400 text-sm">
//                   The next visionary lineup awaits.
//                 </p>
//               </div>

//               {/* Floating border glow */}
//               <motion.div
//                 animate={{ opacity: [0.1, 0.3, 0.1] }}
//                 transition={{ duration: 4, repeat: Infinity }}
//                 className="absolute inset-0 rounded-2xl border border-orange-500/20"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

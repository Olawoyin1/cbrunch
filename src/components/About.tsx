
// import { CgCommunity } from "react-icons/cg";
// import { PiTarget } from "react-icons/pi";
// import { RiSparkling2Line } from "react-icons/ri";

// const highlights = [
//   {
//     icon: CgCommunity,
//     title: "Community",
//     description: "Connect with professionals, founders, and industry leaders",
//   },
//   {
//     icon: PiTarget,
//     title: "Purpose",
//     description: "Shape the future of work in Africa through immersive experiences",
//   },
//   {
//     icon: RiSparkling2Line,
//     title: "Impact",
//     description: "Gain clarity, confidence, and community for your career journey",
//   },
// ];

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-20  relative overflow-hidden"
//     >
//       {/* Decorative Pattern */}
//       <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
//         {/* <img src={patternImage} alt="" className="w-full h-full object-cover" /> */}
//       </div>

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <div className="text-center space-y-4 mb-12 animate-fade-in">
//             <h2 className="text-3xl md:text-5xl font-bold">
//               About{" "}
//               <span className="">
//                 Career Brunch
//               </span>
//             </h2>
            
//           </div>

//           {/* Main Content Grid */}
//           <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//             {/* Image Side */}
//             <div className="relative animate-slide-up">
//               <div className="relative  overflow-hidden shadow-lg group">
//                 <img
//                   src="../../Images/about.jpg"
//                   alt="Career Brunch Community"
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-primary opacity-10" />
//               </div>

//               {/* Floating Badge */}
//               <div className="absolute -bottom-6 -right-6 bg-white/70 border border-border/50 rounded p-6 shadow backdrop-blur-sm">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold ">
//                     2.0
//                   </div>
//                   <div className="text-sm text-muted-foreground">Edition</div>
//                 </div>
//               </div>
//             </div>

//             {/* Text Side */}
//             <div
//               className="space-y-6 animate-slide-up"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <p className="text-xl md:text-2xl font-semibold text-foreground">
//               Building Careers. Creating Connections. Bridging Generations.
//             </p>
//               <div className="space-y-4 text-sm md:text-lg leading-relaxed text-muted-foreground">
//                 <p>
//                   Career Brunch isn't just another networking event it's a{" "}
                  
//                     career-tech and lifestyle movement
                 
//                   .
//                 </p>
//                 <p>
//                   Born out of GenZ HR's mission to shape the future of work in
//                   Africa, Career Brunch connects young professionals, founders,
//                   and industry leaders through immersive experiences that go
//                   beyond résumés and job boards.
//                 </p>
//                 <p>
//                   At its core, Career Brunch empowers attendees to gain{" "}
                  
//                     clarity, confidence, and community
                  
//                   as they navigate the fast-changing world of work.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Highlights Cards */}
//           <div className="grid text-center md:grid-cols-3 gap-6 mb-16 animate-fade-in">
//             {highlights.map((highlight, index) => (
//               <div
//                 key={highlight.title}
//                 className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-primary/5 shadow p-5 transition-transform duration-500 hover:scale-105 hover:shadow-glow "
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="w-14 h-14  bg-gradient-primary flex items-center justify-center mx-auto group-hover:shadow-glow transition-all duration-300">
//                   <highlight.icon className="w-10 h-10" />
//                 </div>
//                 <h3 className="text-xl text-center font-bold mb-2">{highlight.title}</h3>
//                 <p className="text-muted-foreground tex-center text-sm leading-relaxed">
//                   {highlight.description}
//                 </p>
//               </div>
//             ))}
//           </div>

          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgCommunity } from "react-icons/cg";
import { PiTarget } from "react-icons/pi";
import { RiSparkling2Line } from "react-icons/ri";

const highlights = [
  {
    icon: CgCommunity,
    title: "Community",
    description: "Connect with professionals, founders, and industry leaders",
  },
  {
    icon: PiTarget,
    title: "Purpose",
    description:
      "Shape the future of work in Africa through immersive experiences",
  },
  {
    icon: RiSparkling2Line,
    title: "Impact",
    description:
      "Gain clarity, confidence, and community for your career journey",
  },
];

const images = [
  "../../Images/g1.jpg",
  "../../Images/g2.jpg",
  "../../Images/g3.jpg",
  "../../Images/g4.jpg",
  "../../Images/g5.jpg",
  "../../Images/g6.jpg",
];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span>Career Brunch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Side */}
          <div className="relative  rounded-3xl shadow-xl">
            <div className="relative w-full h-full aspect-[4/3]">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt="Career Brunch"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white/70 border border-border/50 rounded-xl p-6 shadow backdrop-blur-sm">
              <div className="text-center">
                <div className="text-3xl font-bold">2.0</div>
                <div className="text-sm text-muted-foreground">Edition</div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              Building Careers. Creating Connections. Bridging Generations.
            </p>
            <div className="space-y-4 text-sm md:text-lg leading-relaxed text-muted-foreground">
              {/* <p>
                Career Brunch isn't just another networking event. It's a{" "}
                <strong>career-tech and lifestyle movement</strong>.
              </p> */}

              <p>We’re curating a one-of-a-kind experience where Gen Z and Millennial professionals will connect with industry leaders, founders, and innovators shaping the future of work across Africa. Through thought-provoking conversations, networking, exhibitions, and live sessions, Career Brunch blends career growth, lifestyle, and opportunity in one unforgettable day.
This year’s edition, themed around career growth, innovation, and lifestyle, will host over 300+ professionals, founders, and entrepreneurs for a day of impactful conversations, networking, and transformative learning experiences.</p>
<p>This isn’t another sit-and-listen conference. It’s an immersive experience where ambition truly meets opportunity. Instead of just information, you’ll leave with something you can carry home: a mentor, a clearer career direction, or a genuine professional connection.</p>
              {/* <p>
                Born out of GenZ HR's mission to shape the future of work in
                Africa, Career Brunch connects young professionals, founders,
                and industry leaders through immersive experiences that go
                beyond résumés and job boards.
              </p>
              <p>
                At its core, Career Brunch empowers attendees to gain{" "}
                <strong>clarity, confidence, and community</strong> as they
                navigate the fast-changing world of work.
              </p> */}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid text-center md:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-[#FF7888]/40  shadow p-5 transition-transform duration-500 hover:scale-105 hover:shadow-glow"
            >
              <div className="w-14 h-14 bg-gradient-primary flex items-center justify-center mx-auto rounded-full mb-4 group-hover:shadow-glow transition-all duration-300">
                <highlight.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
              <p className="text-sm md:text-base leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

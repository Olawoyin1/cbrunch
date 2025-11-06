
// import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
// import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

// const EventDetails = () => {
//   const details = [
//     {
//       icon: Calendar,
//       title: "Date",
//       main: "November 29",
//       sub: "2025",
//       gradient: "from-white/20",
//     },
//     {
//       icon: MapPin,
//       title: "Venue",
//       main: " Miva Open University",
//       sub: "Lagos",
//       gradient: "from-accent/20",
//     },
//     {
//       icon: Clock,
//       title: "Time",
//       main: "9:00 AM – 5:00 PM",
//       sub: "Full Day Event",
//       gradient: "from-white",
//     },
//   ];

//   return (
//     <section id="details" className="py-20 relative overflow-hidden">
//       <BackgroundRippleEffect />
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-orange-50/5 to-card" />
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.15),transparent_60%)]" />

//       <div className="relative z-10 px-4">
//         <div className="max-w-6xl mx-auto space-y-10">
//           {/* Header */}
//           <div className="text-center space-y-8 animate-fade-in">
//             <div className="inline-flex items-center gap-3 px-8 py-3 rounded-md bg-white font-semibold shadow-glow">
//               <Calendar className="w-5 h-5" />
//               <span className="text-sm tracking-wide">SAVE THE DATE</span>
//             </div>

//             <div className="s">
//               <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
//                 Event{" "}
//                 <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
//                   Details
//                 </span>
//               </h2>
//               <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//                 Mark your calendar for this transformative experience
//               </p>
//             </div>
//           </div>

//           {/* Details Grid */}
//           <div className="grid md:grid-cols-3 gap-8 animate-scale-in">
//             {details.map(({ icon: Icon, title, main, sub, gradient }, i) => (
//               <div
//                 key={i}
//                 className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-primary/5 shadow p-1 transition-transform duration-500 hover:shadow-glow`}
//               >
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
//                 />
//                 <div className="p-4 md:p-5 space-y-2 md:space-y-6 relative z-10">
//                   <div className="relative w-fit">
//                     <div className="w-13 h-13 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-card to-primary/5 shadow flex items-center justify-center shadow-card transition-all duration-500 group-hover:shadow-glow group-hover:scale-110">
//                       <Icon className="md:w-10 md:h-10" />
//                     </div>
//                     <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
//                   </div>
//                   <div className="md:space-y-2">
//                     <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
//                       {title}
//                     </div>
//                     <div className="text-xl md:text-3xl font-bold tracking-tight">
//                       {main}
//                     </div>
//                     <div className="text-base text-muted-foreground font-medium">
//                       {sub}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTA Section */}
//           <div className="relative overflow-hidden  shadow animate-scale-in bg-gradient-to-br via-card/80 to-card/10 rounded-2xl backdrop-blur-xl">
//             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-50" />
//             <div className="p-5 md:p-10 relative z-10 text-center space-y-10 max-w-4xl mx-auto">
//               <div className="space-y-3">
//                 <h3 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
//                   Get Your <span>Tickets</span>
//                 </h3>
//                 <p className="text-2xl md:text-3xl font-semibold tracking-tight">
//                   Don't just brunch—build your next career move.
//                 </p>
//                 <p className="md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//                   Be first to know when registration opens, speakers drop, and
//                   giveaways go live.
//                 </p>
//               </div>

//               <div className="flex flex-wrap items-center justify-center md:gap-8 text-base">
//                 <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm">
//                   <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-glow" />
//                   <span className="font-medium">Limited Spots</span>
//                 </div>
//                 <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-accent/20">
//                   <div className="w-3 h-3 rounded-full bg-orange-600 animate-pulse shadow-glow" />
//                   <span className="font-medium">Early Bird Available</span>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//                 <a href="https://thegenzhr.substack.com/">
//                 <button className="group cursor-pointer flex items-center  shadow rounded-xl gap-3 text-lg px-10 py-3 bg-primary shadow-glow hover:scale-105 transition-transform">
//                   Join Our Newsletter
//                   <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
//                 </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventDetails;


import { motion } from "framer-motion";

import type { Variants } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      title: "Date",
      main: "November 29",
      sub: "2025",
      gradient: "from-white/20",
    },
    {
      icon: MapPin,
      title: "Venue",
      main: "Miva Open University",
      sub: "Lagos",
      gradient: "from-accent/20",
    },
    {
      icon: Clock,
      title: "Time",
      main: "9:00 AM – 5:00 PM",
      sub: "Full Day Event",
      gradient: "from-white",
    },
  ];

  // ✅ Animation variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="details" className="py-20 relative overflow-hidden">
      <BackgroundRippleEffect />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/5 to-card" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.15),transparent_60%)]" />

      <div className="relative z-10 px-4">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-8 py-3 rounded-md bg-white font-semibold shadow-glow">
              <Calendar className="w-5 h-5" />
              <span className="text-sm tracking-wide">SAVE THE DATE</span>
            </div>

            <div>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Event{" "}
                <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                  Details
                </span>
              </h2>
              <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Mark your calendar for this transformative experience
              </p>
            </div>
          </motion.div>

          {/* Details Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {details.map(({ icon: Icon, title, main, sub, gradient }, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-primary/5 shadow p-1 transition-transform duration-500 hover:shadow-glow`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
                <div className="p-4 md:p-5 space-y-2 md:space-y-6 relative z-10">
                  <div className="relative w-fit">
                    <div className="w-13 h-13 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-card to-primary/5 shadow flex items-center justify-center shadow-card transition-all duration-500 group-hover:shadow-glow group-hover:scale-110">
                      <Icon className="md:w-10 md:h-10" />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                  </div>
                  <div className="md:space-y-2">
                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                      {title}
                    </div>
                    <div className="text-xl md:text-3xl font-bold tracking-tight">
                      {main}
                    </div>
                    <div className="text-base text-muted-foreground font-medium">
                      {sub}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden shadow bg-gradient-to-br via-card/80 to-card/10 rounded-2xl backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-50" />
            <div className="p-5 md:p-10 relative z-10 text-center space-y-10 max-w-4xl mx-auto">
              <div className="space-y-3">
                <h3 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                  Get Your <span>Tickets</span>
                </h3>
                <p className="text-2xl md:text-3xl font-semibold tracking-tight">
                  Don't just brunch—build your next career move.
                </p>
                <p className="md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Be first to know when registration opens, speakers drop, and
                  giveaways go live.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center md:gap-8 text-base">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-glow" />
                  <span className="font-medium">Limited Spots</span>
                </div>
                {/* <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-accent/20">
                  <div className="w-3 h-3 rounded-full bg-orange-600 animate-pulse shadow-glow" />
                  <span className="font-medium">Early Bird Available</span>
                </div> */}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="https://thegenzhr.substack.com/">
                  <button className="group cursor-pointer flex items-center shadow rounded-xl gap-3 text-lg px-10 py-3 bg-primary shadow-glow hover:scale-105 transition-transform">
                    Join Our Newsletter
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;

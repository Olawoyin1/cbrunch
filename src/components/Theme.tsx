// import { motion, Variants, easeOut } from "framer-motion";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";


import { VscRocket } from "react-icons/vsc";

export default function Theme() {
 const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};


const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};


  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Static Background Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute hidden md:block top-20 left-10 w-72 h-72 bg-[#00FFBD] rotate-45 rounded-md"></div>
        <div className="absolute block md:hidden top-1/2 rotate-90 rounded-md">
          <img src="../../Images/cb.png" alt="" />
        </div>
        <div className="absolute bottom-20 hidden md:block right-10 w-96 h-96 bg-[#00FFBD] rounded-full"></div>
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="max-w-4xl mx-auto text-center" variants={container}>
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded"
            variants={item}
          >
            <VscRocket className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-semibold tracking-wide">
              2025 THEME
            </span>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-5xl font-bold mb-6"
            variants={item}
          >
            The Career-Tech Experience: <br />
            <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
              Elevating Careers, Building the Future
            </span>
          </motion.h2>

          <motion.p
            className="text-sm md:text-xl text-gray-300 leading-relaxed"
            variants={item}
          >
            This year's edition explores how technology, lifestyle, and work
            intersect to create modern, adaptable professionals. Expect real
            conversations, future-forward insights, and hands-on experiences
            designed to help you thrive, not just survive in the digital age.
          </motion.p>

         
        </motion.div>
      </motion.div>
    </section>
  );
}

// import { useState, useEffect } from "react";
// import { Menu, X,  } from "lucide-react";
// import { LuTickets } from "react-icons/lu";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   const navLinks = [
//     { label: "About", id: "about" },
//     { label: "Features", id: "features" },
//     { label: "Speakers", id: "speakers" },
//     { label: "Partners", id: "partners" },
//     { label: "Details", id: "details" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-background/95 backdrop-blur-lg  border-border/50 shadow-sm"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             className="text-xl relative md:text-2xl font-bold"
//           >
//             <img src="../../Images/logo4.png" alt="" className="w-29 md:w-35" />
//             <span className="text-xs md:text-sm absolute bottom-0 right-0.5 md:right-1.5">
//               Career Brunch 2.0
//             </span>

//           </button>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <button
//                 key={link.id}
//                 onClick={() => scrollToSection(link.id)}
//                 className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 {link.label}
//               </button>
//             ))}
//           </div>

//           {/* CTA button */}
//           <div className="hidden md:flex items-center gap-4">
//             <button className="flex items-center gap-2">
//               <LuTickets className="w-4 h-4" />
//               Get Tickets
//             </button>
//           </div>

//           {/* Mobile Menu button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden p-2 text-foreground"
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
//           <div className="container px-4 py-6 space-y-4">
//             {navLinks.map((link) => (
//               <button
//                 key={link.id}
//                 onClick={() => scrollToSection(link.id)}
//                 className="block w-full text-left py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 {link.label}
//               </button>
//             ))}
//             <button  className="w-full">
//               <LuTickets className="w-4 h-4" />
//               Get Tickets
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LuTickets } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Features", id: "features" },
    { label: "Speakers", id: "speakers" },
    { label: "Partners", id: "partners" },
    { label: "Details", id: "details" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20 transition-all duration-300">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl relative md:text-2xl font-bold transition-transform duration-300 hover:scale-105"
          >
            <img
              src="../../Images/logo4.png"
              alt="Logo"
              className="w-28 md:w-36 object-contain transition-transform duration-300"
            />
            <span className="text-xs md:text-sm absolute bottom-0 right-0.5 md:right-1.5">
              Career Brunch 2.0
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 bg-primary text-white px-4 py-2  hover:opacity-90 transition-all duration-300">
              <LuTickets className="w-4 h-4" />
              Get Tickets
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Transition */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{ x: 6 }}
                  className="block w-full text-left py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-primary text-white w-full justify-center py-2.5 rounded-full transition-all duration-300"
              >
                <LuTickets className="w-4 h-4" />
                Get Tickets
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

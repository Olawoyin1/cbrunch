import { useState, useEffect } from "react";
import {Menu, X } from "lucide-react";
import { LuTickets } from "react-icons/lu";
import { openMainstackCheckout } from "../utils/mainstackCheckout";
// import { Link } from "react-router-dom";

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
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white text-black border-b border-gray-200 shadow-sm"
          : "bg-transparent text-white"
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
              src={
                isScrolled
                  ? "../../Images/cb.png" 
                  : "../../Images/cb-white.png" 
              }
              alt="Career Brunch Logo"
              className="w-28 md:w-36 object-contain transition-all duration-300"
            />
            {/* <span
              className={`text-xs md:text-sm absolute bottom-0 right-0.5 md:right-1.7 transition-colors duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Career Brunch 2.0
            </span> */}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-base cursor-pointer font-medium transition-colors duration-200 ${
                  isScrolled
                    ? "text-gray-800 hover:text-black"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">

           


              
            <button
              onClick={openMainstackCheckout}
            // id="mainstack_checkout_btn"
              className={`flex cursor-pointer items-center rounded gap-2 px-4 py-2 transition-all duration-300  ${
                isScrolled
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-primary text-white hover:opacity-90"
              }`}
              >
              <LuTickets className="w-4 h-4" />
              Get Tickets
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-transform duration-300 hover:scale-110 ${
              isScrolled ? "text-black" : "text-white"
            }`}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden border-t overflow-hidden transition-colors duration-300 ${
              isScrolled
                ? "bg-white text-black border-gray-200"
                : "bg-black/80 text-white border-transparent backdrop-blur-md"
            }`}
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{ x: 6 }}
                  className="block w-full text-left py-2 text-base font-medium transition-colors duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
              onClick={openMainstackCheckout}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 w-full justify-center py-2.5 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "bg-primary text-white hover:bg-gray-800"
                    : "bg-primary text-white hover:opacity-90"
                }`}
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

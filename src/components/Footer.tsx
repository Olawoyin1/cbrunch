// import {   Linkedin, Mail } from 'lucide-react';
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from 'react-icons/fa6';
import { TfiInstagram } from "react-icons/tfi";
import { PiTiktokLogo } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <button
            // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl relative md:text-2xl font-bold"
          >
            <img src="../../Images/logo4.png" alt="" className="w-35" />
            <span className="text-sm absolute bottom-0 right-1.5">
              Career Brunch 2.0
            </span>

          </button>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Career Brunch is an initiative of GenZ HR, Africa's leading youth-focused HR and career community empowering thousands of young professionals to build bold, meaningful careers.
            </p>
            <a
              href="https://thegenzhr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Visit GenZ HR →
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="#"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <TfiInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/thegenzhr"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <FaXTwitter  className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/thegenzhr1"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <SlSocialLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@thegenzhr_"
              className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <PiTiktokLogo className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2025 Career Brunch by GenZ HR. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

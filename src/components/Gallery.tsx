import { Camera } from 'lucide-react';
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Gallery() {
  const images = [
    "../../Images/g0.jpg",
    "../../Images/g1.jpg",
    "../../Images/g2.jpg",
    "../../Images/g3.jpg",
    "../../Images/g4.jpg",
    "../../Images/g5.jpg",
    "../../Images/g6.jpg",
    "../../Images/g7.jpg",
    "../../Images/g8.jpg",
    "../../Images/g9.jpg",
    // "../../public/Images/g0.jpg",
    // "../../public/Images/g0.jpg",
  ];
  const images2 = [
    "../../Images/r0.jpg",
    "../../Images/r1.jpg",
    "../../Images/r2.jpg",
    "../../Images/r3.jpg",
    "../../Images/r4.jpg",
    "../../Images/r5.jpg",
    "../../Images/r6.jpg",
    "../../Images/r7.jpg",
    "../../Images/r8.jpg",
    "../../Images/r9.jpg",
    // "../../public/Images/g0.jpg",
    // "../../public/Images/g0.jpg",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="">
          <div className="text-center mb-16">

            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded">
              <Camera className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-semibold tracking-wide">GALLERY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Highlights from Career Brunch 1.0
            </h2>
            <p className="text-base md:text-xl text-gray-300">
              A glimpse into the unforgettable moments and connections made
            </p>
          </div>

           <div className="flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={images}
              direction="right"
              speed="slow"
            />
          </div>
           <div className="flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={images2}
              direction="left"
              speed="slow"
            />
          </div>

          

          
          <div className="mt-12 text-center">
            <p className="text-base md:text-xl text-gray-300 mb-6">
              Ready to be part of Career Brunch 2.0?
            </p>
            <a
             href="https://mainstack.store/thegenzhr/career-brunch"
             >

            <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold rounded hover:shadow transition-all duration-300 hover:scale-105">
              Secure Your Spot Now
            </button>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/Sponsors.tsx
import React, { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import {Link} from "react-router-dom"

interface Voice {
  id: string;
  name: string;
  logoSrc: string;
  website: string;
}

const voices: Voice[] = [
  {
    id: "mtn",
    name: "Mtn",
    logoSrc: "../../Images/sponsor1.png",
    website: "https://tusvintage.com/",
  },
  // { id: "spotify", name: "Spotify", logoSrc: "../../Images/compass.png", website: "Spotify Logo" },
  {
    id: "piggyvest",
    name: "Piggyvest",
    logoSrc: "../../Images/xara.png",
    website: "https://usexara.ai/",
  },
  {
    id: "piggyvest",
    name: "Piggyvest",
    logoSrc: "../../Images/yolat.png",
    website: "Piggyvest Logo",
  },
  {
    id: "piggyvest",
    name: "Piggyvest",
    logoSrc: "../../Images/pt1.jpeg",
    website: "https://techcabal.com/",
  },
  {
    id: "piggyvest",
    name: "Piggyvest",
    logoSrc: "../../Images/pt2.jpeg",
    website: "Piggyvest Logo",
  },
  {
    id: "piggyvest",
    name: "Piggyvest",
    logoSrc: "../../Images/pt3.jpeg",
    website: "https://www.remoteworkher.com/",
  },
  {
    id: "paid",
    name: "Paid",
    logoSrc: "../../Images/compas.png",
    website: "Paid Logo",
  },
  {
    id: "krede",
    name: "Krede",
    logoSrc: "../../Images/mytherapist.png",
    website: "Krede Logo",
  },
  {
    id: "mandc",
    name: "Mandc",
    logoSrc: "../../Images/mtn.png",
    website: "https://www.google.com",
  },
  {
    id: "mandc",
    name: "Mandc",
    logoSrc: "../../Images/new1.jpeg",
    website: "https://www.bizflex.africa/",
  },
  {
    id: "mandc",
    name: "Mandc",
    logoSrc: "../../Images/ruxe.jpeg",
    website: "https://www.google.com",
  },
  {
    id: "mandc",
    name: "Mandc",
    logoSrc: "../../Images/drive.png",
    website: "https://www.google.com",
  },
  {
    id: "mandc",
    name: "Mandc",
    logoSrc: "../../Images/wb.png",
    website: "https://www.google.com",
  },
  {
    id: "mandc",
    name: "Mandc",
    logoSrc: "../../Images/sc.png",
    website: "https://www.google.com",
  },
  {
    id: "mandc",
    name: "Mandc",
    logoSrc: "../../Images/pre.png",
    website: "https://www.google.com",
  },
];

const InfiniteCarousel: React.FC = () => {
  const baseVelocity = -100; // adjust for desired scroll speed
  const x = useRef(0);
  const innerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (!innerRef.current) return;

    // Move continuously
    x.current += (baseVelocity * delta) / 1000;

    // Reset position to create a seamless infinite loop
    if (Math.abs(x.current) >= innerRef.current.scrollWidth / 2) {
      x.current = 0;
    }

    innerRef.current.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <div className="relative w-full overflow-hidden">
      
      <div ref={innerRef} className="flex items-center  gap-8">
        {[...voices, ...voices].map((acc, i) => (
          <Link to={acc.website}
            key={acc.id + i}
            className="flex-shrink-0 w-32 flex items-center justify-center"
          >
            <img
              src={acc.logoSrc}
              alt={acc.website || acc.name}
              className="max-h-16 w-auto object-contain   transition duration-300"
              title={acc.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

const Sponsors: React.FC = () => {
  return (
    <section className="dark:bg-neutral-900 py-5 backdrop-blur-sm filter overflow-hidden">
      <div className="px-1 md:px-0 text-center">
       
        {/* Mobile Infinite Scroll */}
        <div className="block ">
          <InfiniteCarousel />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

import React from "react";

interface Voice {
  id: string;
  name: string;
  logoSrc: string;
  altText: string;
}

const voices: Voice[] = [
  {
    id: "mtn",
    name: "Mtn",
    logoSrc: "../../Images/mtn.png",
    altText: "Mtn Logo",
  },
  {
    id: "spotify",
    name: "Spotify",
    logoSrc: "../../Images/spotify.png",
    altText: "Spotify Logo",
  },
  {
    id: "piggyvest",
    name: "Piggyvest",
    logoSrc: "../../Images/piggyvest.png",
    altText: "Piggyvest Logo",
  },
  {
    id: "paid",
    name: "Paid",
    logoSrc: "../../Images/paid.webp",
    altText: "Paid Logo",
  },
  {
    id: "krede",
    name: "Krede",
    logoSrc: "../../Images/krede.webp",
    altText: "Krede Logo",
  },
  {
    id: "mandc",
    name: "Mandc",
    logoSrc: "../../Images/mandc.png",
    altText: "Mandc Logo",
  },
  // add more voices as needed
];


const Brand: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-0 text-center">
        <h2 className="text-lg md:text-2xl font-bold mb-4">
          Featuring Voices From:
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {voices.map((acc) => (
             <div
              key={acc.id}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={acc.logoSrc}
                alt={acc.altText || acc.name}
                className="max-h-24 w-auto object-contain md:grayscale hover:grayscale-0 transition duration-300"
                title={acc.name}
              />
            </div>
          ))}
        </div>
      <div className="text-center mt-8">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-orange-50 to-rose-50 rounded border border-orange-200">
                <span className="text-sm font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                  + many more amazing companies
                </span>
              </span>
            </div>
      </div>
    </section>
  );
};

export default Brand;
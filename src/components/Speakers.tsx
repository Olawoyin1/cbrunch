// import { Mic2 } from 'lucide-react';

// export default function Speakers() {

//   const speakers = [
//     {
//       name: "Adeife Adeoye",
//       nickname: "",
//       title: "Digital Creator",
//       image: "../../Images/s1.jpeg",
//     },
//     {
//       name: "Ayobami Oyaleke",
//       nickname: "",
//       title: "CEO Mainstack",
//       image: "../../Images/s2.jpeg",
//     },
//     {
//       name: "Ebuka Emmanuel Arinze",
//       nickname: "",
//       title: "Chief Product Officer",
//       image: "../../Images/ebuka.jpg",
//     },
//     {
//       name: "Abbietayo",
//       nickname: "",
//       title: "Content Creator, Storyteller, and Writer",
//       image: "../../Images/new.jpg",
//     },
//   ];

//   return (
//     <section id="speakers" className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
//       <div className="max-w-7xl mx-auto px-4 ">
//         <div className="">
//           <div className="text-center">
//             <div className="inline-flex items-center gap-2 mb-6 px-4 py-3 bg-white rounded border border-gray-300">
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

//             <div className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-4 gap-5">
//               {speakers.map((speaker, index) => (
//                 <div key={index} className="group relative">
//                   <div className="relative rounded overflow-hidden hover:shadow transition-all duration-500 hover:-translate-y-3">
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
//                         <h4 className="text-xl font-bold text-white mb-1">{speaker.name}</h4>

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
// }

import Slider from "react-slick";
import { Mic2, ChevronLeft, ChevronRight } from "lucide-react";

function PrevArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-100 transition"
      onClick={onClick}
      style={{ ...style }}
    >
      <ChevronLeft className="w-6 h-6 text-orange-600" />
    </div>
  );
}

function NextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg p-3 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-100 transition"
      onClick={onClick}
      style={{ ...style }}
    >
      <ChevronRight className="w-6 h-6 text-orange-600" />
    </div>
  );
}

export default function Speakers() {
  const speakers = [
    {
      name: "Fola Olatunji-David",
      title: "Founding Partner, Kickoff Africa",
      image: "../../Images/fola.jpg",
    },
    {
      name: "Adeife Adeoye",
      title: "Digital Creator",
      image: "../../Images/s1.jpeg",
    },
    {
      name: "Bayomi",
      title: "Tech Creator",
      image: "../../Images/bayomi.jpg",
    },
    {
      name: "Abbietayo",
      title: "Content Creator, Storyteller, Writer",
      image: "../../Images/new.jpg",
    },
    {
      name: "Ayobami Oyaleke",
      title: "CEO Mainstack",
      image: "../../Images/s2.jpeg",
    },
    {
      name: "Ebuka Emmanuel Arinze",
      title: "Chief Product Officer",
      image: "../../Images/ebuka.jpg",
    },
    {
      name: "Oyinkansola Badejo",
      title: "Financial Literacy Advocate",
      image: "../../Images/oyin.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="speakers"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-3 bg-white rounded border border-gray-300">
            <Mic2 className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-semibold text-gray-900 tracking-wide">
              SPEAKERS & GUESTS
            </span>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-5xl font-bold mb-2 text-gray-900">
            Meet The{" "}
            <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
              Speakers
            </span>
          </h3>
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get ready to learn from innovators shaping the future of work.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider {...settings}>
            {speakers.map((speaker, index) => (
              <div key={index} className="px-3 py-10">
                <div className="group relative rounded-3xl overflow-hidden shadow hover:shadow-xl transition-all duration-500 hover:-translate-y-3">
                  <div className="relative h-[350px] overflow-hidden rounded-3xl">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border-2 border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Mic2 className="w-6 h-6 text-white" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h4 className="text-xl font-bold text-white">
                        {speaker.name}
                      </h4>
                      <p className="text-gray-300 text-sm font-medium">
                        {speaker.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

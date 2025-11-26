
import  { useEffect, useState } from "react";
import Slider from "react-slick";
import { Mic2, ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Ensure these are included (react-slick requires them)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    // ✅ update slides count based on screen width
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const speakers = [
    {
      name: "Fola Olatunji-David",
      title: "Founding Partner, Kickoff Africa",
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
      name: "Binta",
      title: "Senior Manager, Career Advancement Centre Miva Open University",
      image: "../../Images/miva.jpeg",
    },
    {
      name: "Ebuka Emmanuel Arinze",
      title: "Chief Product Officer, Kredete",
      image: "../../Images/ebuka.jpg",
    },
    {
      name: "Oyinkansola Badejo",
      title: "Financial Literacy Advocate",
      image: "../../Images/oyin.jpg",
    },
    {
      name: "Ruby Ihekweme",
      title: "Founder, Digitaley Drive",
      image: "../../Images/ruby.jpg",
    },
    {
      name: "Emmanuel Faith",
      title: "Founder, HR Clinic",
      image: "../../Images/ef.png",
    },
    {
      name: "Maryam Yusuf",
      title: "HR Consultant and HR Coach",
      image: "../../Images/my.jpeg",
    },
    {
      name: "Nora Awolowo",
      title: "Cinematographer, Photographer, Filmmaker, and Visual storyteller",
      image: "../../Images/na.jpeg",
    },
    {
      name: "Ebenezer Akintomide",
      title: "People and Culture Lead, Cowrywise",
      image: "../../Images/ea.jpeg",
    },
    {
      name: "Chukwu Adaeze Victoria",
      title: "Brand Designer & Strategist",
      image: "../../Images/cav.jpeg",
    },
    {
      name: "David Evbodaghe",
      title: "Software Dev, Meta",
      image: "../../Images/david.jpeg",
    },
    {
      name: "Natasha Nissar",
      title: "Chief of Staff, BMONI",
      image: "../../Images/nn.jpeg",
    },
    {
      name: "Ifemide Livingfont ",
      title: "GPS Associate, Bank of America",
      image: "../../Images/il.jpeg",
    },
    {
      name: "Kemi Osayemi ",
      title: "Senior Product Manager",
      image: "../../Images/ko.jpeg",
    },
    {
      name: "Seun Lanlege ",
      title: "Co-founder of Polytope Labs",
      image: "../../Images/sl.jpeg",
    },
    {
      name: "Toyosi Aolarin ",
      title: "CEO, Yolat",
      image: "../../Images/yolat.jpeg",
    },
    {
      name: "Salami Abdullateef",
      title: "HR Professional",
      image: "../../Images/salam.jpeg",
    },
    {
      name: " O.J Tobiloba ",
      title: "Financial Literacy Advocate, Investment Analyst & Financial Content Strategist",
      image: "../../Images/oj.jpeg",
    },
    {
      name: " Hansel Praise ",
      title: "Contract Manager at a leading international energy conglomerate",
      image: "../../Images/hp.jpeg",
    },
    {
      name: "Oluchukwu Chidiaka",
      title: "Personal Finance Coach",
      image: "../../Images/ns.jpeg",
    },
    {
      name: "Ama Udofa",
      title: "Storyteller/Content Marketing Lead, Grey",
      image: "../../Images/ao.jpeg",
    },
    {
      name: "Goodness Armstrong ",
      title: "Founder, Startuphr Africa",
      image: "../../Images/ga.jpeg",
    },
    {
      name: "Achigonye Johnpaul  ",
      title: "Founder & CEO, Sendcoins",
      image: "../../Images/aj.jpeg",
    },
    {
      name: "Amaka Amaku   ",
      title: "Entrepreneur and Content Creator",
      image: "../../Images/aa.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

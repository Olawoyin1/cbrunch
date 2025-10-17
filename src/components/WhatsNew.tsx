import { Sparkles, Brain, Camera, Zap, Presentation, Dumbbell, Music, Gamepad2 } from 'lucide-react';

export default function WhatsNew() {
  const features = [
    {
      icon: Brain,
      title: "Career-Tech Experience",
      description: "Interactive skill-building labs and recruitment zones",
      gradient: "from-orange-500 to-rose-500",
      image: "../../Images/career.jpg"
    },
    {
      icon: Dumbbell,
      title: "Lifestyle Lounge",
      description: "Wellness, fashion, finance, and career therapy",
      gradient: "from-amber-500 to-orange-500",
      image: "../../Images/lifestyle.jpg"
    },
    {
      icon: Zap,
      title: "AI-Powered Reviews",
      description: "CV reviews, mock interviews, and speed networking",
      gradient: "from-rose-500 to-pink-500",
      image: "../../Images/review.jpg"
    },
    {
      icon: Camera,
      title: "LinkedIn Photo Booth",
      description: "Professional headshots for your career profiles",
      gradient: "from-pink-500 to-rose-500",
      image: "../../Images/photo.jpg"
    },
    {
      icon: Presentation,
      title: "Career Brunch Pitch",
      description: "Spotlight for innovators breaking into tech",
      gradient: "from-orange-600 to-amber-600",
      image: "../../Images/career.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-rose-50/50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex bg-gray-50 items-center gap-2 mb-6 px-8 py-4 bg-gradient-to-r rounded shadow">
              <Sparkles className="w-6 h-6 " />
              <span className="text-sm font-bold tracking-wide">NEW FOR 2025</span>
            </div>
            <h2 className="text-2xl sm:text-6xl font-bold text-gray-900 mb-6">
              What's New in <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">Career Brunch 2.0</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience game-changing additions designed to accelerate your career journey
            </p>
          </div>

          <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-300 rounded overflow-hidden  hover:shadow transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t bg-black/30 opacity-80`}></div> 
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white/20 backdrop-blur-md rounded flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="md:col-span-2 lg:col-span-3 relative bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 rounded overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
              </div>
              <div className="relative p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center flex-col md:flex-row  gap-6">
                  <div className="flex -space-x-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white">
                      <Music className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white">
                      <Gamepad2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-white text-center md:text-start">
                    <h3 className="text-2xl font-bold mb-2">And So Much More...</h3>
                    <p className="text-base md:text-lg text-white/90">
                      Games, speed dating, curated brunch, live music, and unforgettable networking moments
                    </p>
                  </div>
                </div>
                <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow whitespace-nowrap">
                  Explore All Features
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

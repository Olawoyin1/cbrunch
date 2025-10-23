
import { Sparkles, Brain, TrendingUp, Lightbulb} from "lucide-react";
import { LiaComment } from "react-icons/lia";
import { HiOutlineSparkles } from "react-icons/hi2";
import { BsCamera } from "react-icons/bs";


const features = [
  { icon: Brain, title: "Career-Tech Experience", description: "Interactive skill-building labs and recruitment zones designed for the modern professional" },
  { icon: HiOutlineSparkles, title: "Lifestyle Lounge", description: "Wellness, fashion, finance, and career therapy - all in one space" },
  { icon: LiaComment, title: "AI-Powered CV Reviews", description: "Mock interviews and speed networking powered by cutting-edge technology" },
  { icon: BsCamera, title: "LinkedIn Photo Booth", description: "Get professional headshots that make your profile stand out" },
  { icon: TrendingUp, title: "Career Brunch Pitch", description: "The first-ever pitch competition spotlighting innovators breaking into tech" },
  { icon: Lightbulb, title: "Hands-on Masterclasses", description: "Learn practical skills from industry experts in real-time" },
];

const rotations = ["md:rotate-1", "md:-rotate-1", "md:rotate-2", "md:-rotate-2", "md:rotate-0"];

const WhatsNew = () => {
  return (
    <section className="relative py-14 md:py-40 overflow-hidden ">
      {/* Background blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
         <div className="text-center mb-16">
            <div className="inline-flex bg-gray-50 items-center gap-2 mb-6 px-8 py-4 bg-gradient-to-r rounded shadow">
              <Sparkles className="w-6 h-6 " />
              <span className="text-sm font-bold tracking-wide">NEW FOR 2025</span>
            </div>
            <h2 className="text-2xl sm:text-6xl font-bold text-gray-900 mb-2">
              What's New in <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">Career Brunch 2.0</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience game-changing additions designed to accelerate your career journey
            </p>
          </div>

        {/* Floating Cards */}
        <div 
          className=" relative w-full flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              // className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-primary/5 shadow p-5 transition-transform duration-500 hover:scale-105 hover:shadow-glow ${rotations[idx % rotations.length]}`}
              className={`group relative  overflow-hidden rounded-3xl bg-gradient-to-br from-card to-[#00FFBD]/40 shadow p-5 transition-transform duration-500 hover:scale-105 hover:shadow-glow ${rotations[idx % rotations.length]} w-full md:w-auto`}

              // style={{
              //   top: `${(idx % 3) * -10}px`,
              //   zIndex: 10 - idx,
              // }}


              style={{
                top: window.innerWidth >= 768 ? `${(idx % 3) * -10}px` : "0px",
                zIndex: 10 - idx,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 flex flex-col gap-2">
                <div className="w-20 h-20 rounded-3xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-10 h-10 " />
                </div>
                <h3 className="text-xl md:text-3xl font-bold m-0">{feature.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{feature.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;


import { Users, Target, Sparkles } from "lucide-react";
// import aboutImage from "@/assets/about-image.jpg";
// import patternImage from "@/assets/pattern-about.jpg";

const highlights = [
  {
    icon: Users,
    title: "Community",
    description: "Connect with professionals, founders, and industry leaders",
  },
  {
    icon: Target,
    title: "Purpose",
    description: "Shape the future of work in Africa through immersive experiences",
  },
  {
    icon: Sparkles,
    title: "Impact",
    description: "Gain clarity, confidence, and community for your career journey",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden"
    >
      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        {/* <img src={patternImage} alt="" className="w-full h-full object-cover" /> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold">
              About{" "}
              <span className="">
                Career Brunch
              </span>
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-foreground max-w-3xl mx-auto">
              Building Careers. Creating Connections. Bridging Generations.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Side */}
            <div className="relative animate-slide-up">
              <div className="relative  overflow-hidden shadow-lg group">
                <img
                  src="../../Images/about-image.jpg"
                  alt="Career Brunch Community"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white/70 border border-border/50 rounded p-6 shadow backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-3xl font-bold ">
                    2.0
                  </div>
                  <div className="text-sm text-muted-foreground">Edition</div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div
              className="space-y-6 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Career Brunch isn't just another networking event—it's a{" "}
                  
                    career-tech and lifestyle movement
                 
                  .
                </p>
                <p>
                  Born out of GenZ HR's mission to shape the future of work in
                  Africa, Career Brunch connects young professionals, founders,
                  and industry leaders through immersive experiences that go
                  beyond résumés and job boards.
                </p>
                <p>
                  At its core, Career Brunch empowers attendees to gain{" "}
                  
                    clarity, confidence, and community
                  
                  as they navigate the fast-changing world of work.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 animate-fade-in">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="group bg-white border border-gray-300  p-6 text-center  hover:shadow transition-all duration-300 hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14  bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <highlight.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;

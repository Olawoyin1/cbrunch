import { GraduationCap, Heart } from 'lucide-react';
import { RiFlashlightLine } from "react-icons/ri";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { BsCamera } from "react-icons/bs";
import { PiGameController } from "react-icons/pi";
import { VscCoffee } from "react-icons/vsc";
import { motion } from "framer-motion";
import { GrUserExpert } from "react-icons/gr";
import { BiBuilding } from "react-icons/bi";

export default function Features() {
  const featuredItems = [
    {
      icon: LuBriefcaseBusiness,
      title: "Career & Tech Panels",
      description: "Engaging discussions with leading voices in tech, HR, entrepreneurship, and creativity",
      
      image: "../../Images/g6.jpg"
    },
    {
      icon: RiFlashlightLine,
      title: "Speed Interviews",
      description: "Meet recruiters and hiring managers right at the event",
      
      image: "../../Images/g1.jpg"
    },
    {
      icon: BiBuilding,
      title: "Talent Lounge",
      description: "Explore real job openings, pitch yourself, or drop your résumé",
      
      image: "../../Images/experience.jpg"
    },
    {
      icon: GraduationCap,
      title: "Mini Masterclasses",
      description: "Hands-on learning sessions on tech tools, soft skills, and career strategy",
      image: "../../Images/r0.jpg"
    },
    {
      icon: BsCamera,
      title: "LinkedIn Photo Booth",
      description: "Leave with a professional new headshot for your career profiles",
      image: "../../Images/photo.jpg"
    },
    {
      icon: Heart,
      title: "Lifestyle Corner",
      description: "Discover wellness tips, style inspiration, and personal branding help",
      image: "../../Images/g7.jpg"
    },
    {
      icon: PiGameController,
      title: "Speed Dating & Games",
      description: "Mix fun with connection — you never know who you'll meet!",
      image: "../../Images/lifestyle.jpg"
    },
    {
      icon: VscCoffee,
      title: "Brunch & Chill",
      description: "Curated food, music, and soft vibes for genuine connections",
      image: "../../Images/g2.jpg"
    },
    {
      icon: GrUserExpert,
      title: "Mentor Meetups",
      description: "Get matched with top professionals, founders, and career coaches",
      image: "../../Images/g3.jpg"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 mb-2">
              Everything You Need to <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">Elevate Your Career</span>
            </h2>
            <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto">
              A full day of immersive experiences designed for maximum impact on your professional journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {featuredItems.map((feature, index) => (
             <motion.div
              key={feature.title}
              // className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
                // key={index}
                className="group relative bg-white border border-gray-200 rounded overflow-hidden  hover:shadow transition-all duration-500 hover:-translate-y-2"
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
                  <h3 className="text-xl font-bold text-gray-900 ">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}



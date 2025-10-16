import { MessageSquare, Briefcase, Users, GraduationCap, Camera, Heart, Gamepad2, Coffee, UserCheck } from 'lucide-react';

export default function Features() {
  const featuredItems = [
    {
      icon: MessageSquare,
      title: "Career & Tech Panels",
      description: "Engaging discussions with leading voices in tech, HR, entrepreneurship, and creativity",
      highlight: true
    },
    {
      icon: Briefcase,
      title: "Speed Interviews",
      description: "Meet recruiters and hiring managers right at the event",
      highlight: true
    },
    {
      icon: Users,
      title: "Talent Lounge",
      description: "Explore real job openings, pitch yourself, or drop your résumé",
      highlight: true
    },
    {
      icon: GraduationCap,
      title: "Mini Masterclasses",
      description: "Hands-on learning sessions on tech tools, soft skills, and career strategy"
    },
    {
      icon: Camera,
      title: "LinkedIn Photo Booth",
      description: "Leave with a professional new headshot for your career profiles"
    },
    {
      icon: Heart,
      title: "Lifestyle Corner",
      description: "Discover wellness tips, style inspiration, and personal branding help"
    },
    {
      icon: Gamepad2,
      title: "Speed Dating & Games",
      description: "Mix fun with connection — you never know who you'll meet!"
    },
    {
      icon: Coffee,
      title: "Brunch & Chill",
      description: "Curated food, music, and soft vibes for genuine connections"
    },
    {
      icon: UserCheck,
      title: "Mentor Meetups",
      description: "Get matched with top professionals, founders, and career coaches"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need to <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">Elevate Your Career</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A full day of immersive experiences designed for maximum impact on your professional journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {featuredItems.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-orange-50 p-4 rounded border-2 border-orange-200 hover:border-orange-400  hover:shadow transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-rose-500/10 rounded-full -mr-16 -mt-16"></div>

                <div className="relative flex gap-3">
                  <div className="shrink-0 w-10 h-10 mb-6 bg-gradient-to-br from-gray-200 0 rounded flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 hover:shadow-lg">
                    <feature.icon className="w-5 h-5 " />
                  </div>
                  <div>


                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-100 to-rose-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

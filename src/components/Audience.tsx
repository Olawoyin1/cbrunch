import { Briefcase, Rocket, UserCheck, Code, GraduationCap, PenTool, Lightbulb, Target, ArrowRight, Zap, Users2, Award } from 'lucide-react';

export default function Audience() {
  const audiences = [
    { icon: Briefcase, text: "Ambitious career professionals & jobseekers", color: "from-orange-500 to-rose-500" },
    { icon: Rocket, text: "Startup founders & entrepreneurs", color: "from-amber-500 to-orange-500" },
    { icon: UserCheck, text: "Recruiters & hiring managers", color: "from-rose-500 to-pink-500" },
    { icon: Code, text: "Tech talents & career switchers", color: "from-pink-500 to-rose-500" },
    { icon: GraduationCap, text: "Students & NYSC members", color: "from-orange-600 to-amber-600" },
    { icon: PenTool, text: "Freelancers & creators", color: "from-amber-600 to-orange-600" },
    { icon: Lightbulb, text: "Innovators & problem-solvers", color: "from-rose-600 to-pink-600" }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Learn",
      description: "Practical skills that help you grow",
      gradient: "from-orange-500 to-rose-500"
    },
    {
      icon: Users2,
      title: "Connect",
      description: "With recruiters, mentors, and brands that matter",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Grow",
      description: "Your career clarity, visibility, and confidence",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Experience",
      description: "A lifestyle-driven event where careers meet culture",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 mb-6">
              This Event is <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">Built for You</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're climbing, pivoting, or starting fresh join a community of ambitious professionals
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="group relative bg-white rounded border border-gray-300 hover:border-transparent  hover:shadow transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative p-6 flex flex-col items-center text-center">
                  <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${audience.color} rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300`}>
                    <audience.icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                    {audience.text}
                  </p>
                </div>
              </div>
            ))}

            <div className="group relative bg-gradient-to-br from-orange-500 to-rose-500 rounded hover:shadow transition-all duration-300 overflow-hidden">
              <div className="relative p-6 flex flex-col items-center justify-center text-center h-full text-white">
                <ArrowRight className="w-10 h-10 mb-3 group-hover:translate-x-2 transition-transform duration-300" />
                <p className="font-bold text-lg">And many more!</p>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative p-12 lg:p-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-5xl font-bold text-white mb-4">
                  Why Attend Career Brunch 2.0?
                </h3>
                <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
                  Four powerful reasons to secure your spot today
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="text-center group"
                  >
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${benefit.gradient} rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3">{benefit.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="group inline-flex items-center gap-3 px-9 md:px-12 py-5 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold text-base  md:text-lg rounded hover:shadow transition-all duration-300 hover:scale-105">
                  Get Your Tickets Now
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <p className="mt-6 text-gray-400">
                  Limited spots available • Early bird pricing ends soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

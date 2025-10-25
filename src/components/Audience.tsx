import {  Rocket, Code, GraduationCap, PenTool, Lightbulb, Target, ArrowRight } from 'lucide-react';
import { LuBriefcaseBusiness } from "react-icons/lu";
import { RiFlashlightLine } from "react-icons/ri";
import { FaUsersRays } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { BsAward } from "react-icons/bs";
import { useId } from "react";

export default function Audience() {
  const audiences = [
    { icon: LuBriefcaseBusiness, text: "Ambitious career professionals & jobseekers", color: "from-orange-500 to-rose-500" },
    { icon: Rocket, text: "Startup founders & entrepreneurs", color: "from-amber-500 to-orange-500" },
    { icon: GrUserManager, text: "Recruiters & hiring managers", color: "from-rose-500 to-pink-500" },
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
      icon: FaUsersRays,
      title: "Connect",
      description: "With recruiters, mentors, and brands that matter",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: RiFlashlightLine,
      title: "Grow",
      description: "Your career clarity, visibility, and confidence",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: BsAward,
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
            <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 mb-3">
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
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-primary/5 shadow p-1 transition-transform duration-500  hover:shadow-glow "
              >
                <Grid size={20} />
                <div className={`absolute inset-0 bg-gradient-to-br  transition-opacity duration-300`}></div>
                <div className="relative p-4 md:p-6 flex md:flex-col gap-4 items-center md:text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-50 to-card backdrop-blur-md rounded-md flex items-center justify-center">
                    <audience.icon className="w-7 h-7" />
                  </div>

                  <p className="font-bold text-gray-900  transition-colors duration-300">
                    {audience.text}
                  </p>
                </div>
              </div>
            ))}

            <div className="group relative bg-gradient-to-br   group  rounded-xl  from-[#00FFBD] to-card shadow p-5  hover:scale-105 hover:shadow-glow   hover:shadow transition-all duration-300 overflow-hidden">
              <div className="relative p-6 flex flex-col items-center justify-center text-center h-full ">
                <ArrowRight className="w-10 h-10 mb-3 group-hover:translate-x-2 transition-transform duration-300" />
                <p className="font-bold text-lg">And many more!</p>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded overflow-hidden shadow">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded filter blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative p-4 py-10 lg:p-10">
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
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br  rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300 s`}>
                      <benefit.icon className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3">{benefit.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="group inline-flex items-center gap-3 px-4 md:px-12 py-5 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold text-base  md:text-lg rounded hover:shadow transition-all duration-300 hover:scale-105">
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





/* -------------------------------------------------------------------------- */
/* ✅ GRID EFFECT COMPONENTS (copied and integrated cleanly) */
/* -------------------------------------------------------------------------- */
export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p =
    pattern ??
    Array.from({ length: 5 }, () => [
      Math.floor(Math.random() * 4) + 7,
      Math.floor(Math.random() * 6) + 1,
    ]);

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)] z-0">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy]: any) => (
            <rect
              key={`${sx}-${sy}`}
              strokeWidth="0"
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}


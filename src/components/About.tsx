import { useEffect, useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CgCommunity } from "react-icons/cg";
import { PiTarget } from "react-icons/pi";
import { RiSparkling2Line } from "react-icons/ri";

const highlights = [
  {
    icon: CgCommunity,
    title: "Community",
    description: "Connect with professionals, founders, and industry leaders",
  },
  {
    icon: PiTarget,
    title: "Purpose",
    description:
      "Shape the future of work in Africa through immersive experiences",
  },
  {
    icon: RiSparkling2Line,
    title: "Impact",
    description:
      "Gain clarity, confidence, and community for your career journey",
  },
];

const images = [
  "../../Images/g1.jpg",
  "../../Images/g2.jpg",
  "../../Images/g3.jpg",
  "../../Images/g4.jpg",
  "../../Images/g5.jpg",
  "../../Images/g6.jpg",
];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span>Career Brunch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Side */}
          <div className="relative  rounded-3xl shadow-xl">
            <div className="relative w-full h-full aspect-[4/3]">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt="Career Brunch"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6  bg-gradient-to-br from-card to-[#00FFBD]/40 -right-6 bg-white/70 border border-border/50 rounded-xl p-6 shadow backdrop-blur-sm">
              <div className="text-center">
                <div className="text-3xl font-bold ">2.0</div>
                <div className="text-sm text-muted-foreground">Edition</div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              Building Careers. Creating Connections. Bridging Generations.
            </p>
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-muted-foreground">
              {/* <p>
                Career Brunch isn't just another networking event. It's a{" "}
                <strong>career-tech and lifestyle movement</strong>.
              </p> */}

              <p>
                We’re curating a one-of-a-kind experience where Gen Z and
                Millennial professionals will connect with industry leaders,
                founders, and innovators shaping the future of work across
                Africa. Through thought-provoking conversations, networking,
                exhibitions, and live sessions, Career Brunch blends career
                growth, lifestyle, and opportunity in one unforgettable day.
              </p>

              <p>
                This year’s edition, themed around career growth, innovation,
                and lifestyle, will host over 300+ professionals, founders, and
                entrepreneurs for a day of impactful conversations, networking,
                and transformative learning experiences.
              </p>
              <p>
                This isn’t another sit-and-listen conference. It’s an immersive
                experience where ambition truly meets opportunity. Instead of
                just information, you’ll leave with something you can carry
                home: a mentor, a clearer career direction, or a genuine
                professional connection.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid text-center md:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-[#00FFBD]/40  shadow p-5 transition-transform duration-500 hover:scale-105 hover:shadow-glow"
            >
               <Grid size={20} />
              <div className="w-14 h-14 bg-gradient-primary flex items-center justify-center mx-auto rounded-full mb-4 group-hover:shadow-glow transition-all duration-300">
                <highlight.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
              <p className="text-sm md:text-base leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

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

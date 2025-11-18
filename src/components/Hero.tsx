// import { button } from "@/components/ui/button";
import { Handshake, ArrowRight } from "lucide-react";
import { PointerHighlight } from "../components/ui/pointer-highlight";
import { LuTickets } from "react-icons/lu";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import CustomModal from "./CustomModal";

// import { openMainstackCheckout } from "../utils/mainstackCheckout";

// const Countdown: React.FC = () => {
//   const targetDate = new Date("2025-11-29T00:00:00").getTime();
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
//   const [prevSeconds, setPrevSeconds] = useState(timeLeft.seconds);

//   function calculateTimeLeft() {
//     const now = new Date().getTime();
//     const difference = targetDate - now;

//     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((difference / (1000 * 60)) % 60);
//     const seconds = Math.floor((difference / 1000) % 60);

//     return { days, hours, minutes, seconds };
//   }

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         const updated = calculateTimeLeft();
//         setPrevSeconds(prev.seconds);
//         return updated;
//       });
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="flex justify-center items-center  font-mono">
//       <div className="text-center space-x-6 flex text-5xl md:text-7xl">
//         <TimeBlock label="Days" value={timeLeft.days} />
//         <TimeBlock label="Hours" value={timeLeft.hours} />
//         <TimeBlock label="Minutes" value={timeLeft.minutes} />
//         <AnimatedSeconds value={timeLeft.seconds} prevValue={prevSeconds} />
//       </div>
//     </div>
//   );
// };

const TimeBlock = ({ label, value }: { label: string; value: number }) => (
  <div className="flex flex-col items-center relative">
    <div className="h-[40px] w-[100px] flex justify-center items-center flex-col overflow-hidden">
      <span className="absolute text-3xl font-bold">
        {value.toString().padStart(2, "0")}
      </span>
    </div>
    <span className="text-sm text-gray-400">{label}</span>
  </div>
);



const Hero = () => {
  const targetDate = new Date("2025-11-29T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [prevSeconds, setPrevSeconds] = useState(timeLeft.seconds);

//   const [showModal, setShowModal] = useState(false);

//  useEffect(() => {
//     const hasSeen = localStorage.getItem("seen_welcome_modal");

//     if (!hasSeen) {
//       const timer = setTimeout(() => {
//         setShowModal(true);
//         localStorage.setItem("seen_welcome_modal", "true");
//       }, 10000); // 10 seconds delay

//       return () => clearTimeout(timer);
//     }
//   }, []);



  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const updated = calculateTimeLeft();
        setPrevSeconds(prev.seconds);
        return updated;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[800px] md:min-h-screen flex items-center text-white justify-center overflow-hidden">
      {/* white Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="../../Images/hero1.jpg"
          alt="Career Brunch 2.0 Event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/50" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero z-0" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-12 md:py-32">
          <div className="flex mb-1 justify-center items-center  font-mono">
            <div className="text-center space-x-0 flex text-2xl md:text-4xl">
              <TimeBlock label="Days" value={timeLeft.days} />
              <TimeBlock label="Hours" value={timeLeft.hours} />
              <TimeBlock label="Minutes" value={timeLeft.minutes} />
              <AnimatedSeconds
                value={timeLeft.seconds}
                prevValue={prevSeconds}
              />
            </div>
          </div>
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-4xl rounded-full bg-[#7c3bed]/10 border border-[#7c3bed]/20 text-sm font-medium animate-scale-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7c3bed] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7c3bed]" />
            </span>
            November 29, 2025 • Miva Open University, Lagos
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Career Brunch 2.0: The{" "}
            <PointerHighlight
              rectangleClassName="bg-[#1060D3]/20 dark:bg-[#E473FF] border-blue-300 dark:border-blue-700 leading-loose"
              pointerClassName="text-blue-500 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10">Career-Tech & Lifestyle</span>
            </PointerHighlight>
            Experience
          </h1>

          {/* Subtext */}
          <p className="text-base md:text-xl  max-w-3xl mx-auto leading-relaxed">
            Where ambition meets opportunity, Career Brunch 2.0 is the ultimate
            Career, Tech and Lifestyle Experience for Gen Zs and Millennials
            looking to connect, learn, and grow. Join us for a transformative
            day of career acceleration, tech innovation, and lifestyle
            experiences.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="https://mainstack.store/thegenzhr/career-brunch">
              <button className="flex rounded cursor-pointer bg-primary px-4 py-2 items-center gap-2">
                <LuTickets className="w-5 h-5" />
                Get Tickets
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </a>

            <a href="https://forms.gle/SPsMCsaDnHkUso446">
              <button className="flex cursor-pointer bg-sec px-4 py-2 rounded items-center gap-2">
                <Handshake className="w-5 h-5" />
                Partner with Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </a>
            {/* <button className="bg-black cursor-pointer px-4 py-2">
              Learn More
            </button> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-wider">
            Scroll to explore
          </span>
          <ArrowRight className="w-4 h-4 rotate-90" />
        </div>
      </div>





      {/* <CustomModal open={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-xl font-bold mb-2">Welcome!</h2>
        <p className="mb-4 text-gray-600">
          This popup will only show once. Thanks for visiting 🎉
        </p>
        <button
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </CustomModal> */}

    </section>
  );
};

export default Hero;

const AnimatedSeconds = ({
  value,
}: //   prevValue,
{
  value: number;
  prevValue: number;
}) => (
  <div className="flex flex-col items-center relative">
    <div className="h-[40px] w-[100px] flex justify-center items-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 40, opacity: 0, rotateX: 90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -40, opacity: 0, rotateX: -90 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute text-3xl font-bold"
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
    <span className="text-sm  text-gray-400">Seconds</span>
  </div>
);

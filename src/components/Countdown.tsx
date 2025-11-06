



// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface TimeLeft {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// const Countdown: React.FC = () => {
//   const calculateTimeLeft = (): TimeLeft => {
//     const targetDate = new Date("2025-11-29T00:00:00");
//     const now = new Date();
//     const diff = Math.max(targetDate.getTime() - now.getTime(), 0);

//     return {
//       days: Math.floor(diff / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((diff / 1000 / 60) % 60),
//       seconds: Math.floor((diff / 1000) % 60),
//     };
//   };

//   const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
//   const [prevTime, setPrevTime] = useState<TimeLeft>(timeLeft);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPrevTime(timeLeft);
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [timeLeft]);

//   const FlipUnit: React.FC<{ unit: keyof TimeLeft; label: string }> = ({
//     unit,
//     label,
//   }) => {
//     const current = timeLeft[unit].toString().padStart(2, "0");
//     const previous = prevTime[unit].toString().padStart(2, "0");
//     const isFlipping = current !== previous;

//     return (
//       <div className="flex flex-col items-center mx-2">
//         <div className="relative w-16 h-20 perspective">
//           <AnimatePresence initial={false}>
//             {isFlipping && (
//               <>
//                 {/* Previous number flips out */}
//                 <motion.div
//                   key={previous}
//                   initial={{ rotateX: 0 }}
//                   animate={{ rotateX: -90 }}
//                   exit={{ rotateX: -90 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute top-0 w-full h-full bg-gray-900 text-white flex items-center justify-center text-2xl font-bold rounded"
//                 >
//                   {previous}
//                 </motion.div>

//                 {/* Current number flips in */}
//                 <motion.div
//                   key={current}
//                   initial={{ rotateX: 90 }}
//                   animate={{ rotateX: 0 }}
//                   exit={{ rotateX: 90 }}
//                   transition={{ duration: 0.3 }}
//                   className="absolute top-0 w-full h-full bg-gray-900 text-white flex items-center justify-center text-2xl font-bold rounded"
//                 >
//                   {current}
//                 </motion.div>
//               </>
//             )}
//             {!isFlipping && (
//               <div className="absolute top-0 w-full h-full bg-gray-900 text-white flex items-center justify-center text-2xl font-bold rounded">
//                 {current}
//               </div>
//             )}
//           </AnimatePresence>
//         </div>
//         <span className="text-sm mt-1">{label}</span>
//       </div>
//     );
//   };

//   return (
//     <div className="flex justify-center items-center mt-10">
//       <FlipUnit unit="days" label="Days" />
//       <FlipUnit unit="hours" label="Hours" />
//       <FlipUnit unit="minutes" label="Minutes" />
//       <FlipUnit unit="seconds" label="Seconds" />
//     </div>
//   );
// };

// export default Countdown;

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Countdown: React.FC = () => {
  const targetDate = new Date("2025-11-29T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [prevSeconds, setPrevSeconds] = useState(timeLeft.seconds);

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
    <div className="flex justify-center items-center  font-mono">
      <div className="text-center space-x-6 flex text-5xl md:text-7xl">
        <TimeBlock  label="Days" value={timeLeft.days} />
        <TimeBlock label="Hours" value={timeLeft.hours} />
        <TimeBlock label="Minutes" value={timeLeft.minutes} />
        <AnimatedSeconds value={timeLeft.seconds} prevValue={prevSeconds} />
      </div>
    </div>
  );
};

const TimeBlock = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center relative">

  <div className="h-[80px] w-[100px] flex justify-center items-center flex-col overflow-hidden">
    <span className="absolute text-6xl font-bold">{value.toString().padStart(2, "0")}</span>
  </div>
    <span className="text-sm mt-2 text-gray-400">{label}</span>
</div>
);

const AnimatedSeconds = ({
  value,
//   prevValue,
}: {
  value: number;
  prevValue: number;
}) => (
  <div className="flex flex-col items-center relative">
    <div className="h-[80px] w-[100px] flex justify-center items-center overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 40, opacity: 0, rotateX: 90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -40, opacity: 0, rotateX: -90 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute text-6xl font-bold"
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
    <span className="text-sm mt-2 text-gray-400">Seconds</span>
  </div>
);

export default Countdown;

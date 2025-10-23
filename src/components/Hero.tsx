// import { button } from "@/components/ui/button";
import { Handshake, ArrowRight } from "lucide-react";
import { PointerHighlight } from "../components/ui/pointer-highlight";
// import { openMainstackCheckout } from "../utils/mainstackCheckout";

import { LuTickets } from "react-icons/lu";
import { openMainstackCheckout } from "../utils/mainstackCheckout";


const Hero = () => {
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
            
              <button onClick={openMainstackCheckout} className="flex cursor-pointer bg-primary px-4 py-2 items-center gap-2">
                <LuTickets className="w-5 h-5" />
                Get Tickets
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

             

            
            <a href="https://forms.gle/SPsMCsaDnHkUso446">
              <button className="flex cursor-pointer bg-sec px-4 py-2 items-center gap-2">
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
    </section>
  );
};

export default Hero;



// import { useEffect } from "react";
// import { Handshake, ArrowRight } from "lucide-react";
// import { PointerHighlight } from "../components/ui/pointer-highlight";
// import { LuTickets } from "react-icons/lu";

// const Hero = () => {
//   useEffect(() => {
//     // Dynamically inject the Mainstack checkout script
//     const script = document.createElement("script");
//     script.src = "https://mainstack.me/mainstack-cdn/popup_checkout.min.js?hideBtn=true";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   // Function to trigger the checkout popup
//   const handleCheckout = () => {
//     const iframe = document.getElementById("mainstack_checkout_iframe");
//     if (iframe) iframe.style.display = "block"; // Show iframe popup
//   };

//   return (
//     <section className="relative min-h-[800px] md:min-h-screen flex items-center text-white justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="../../Images/hero1.jpg"
//           alt="Career Brunch 2.0 Event"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/50" />
//       </div>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-hero z-0" />

//       {/* Content */}
//       <div className="container relative z-10 px-4 py-12 md:py-32">
//         <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-4xl rounded-full bg-[#7c3bed]/10 border border-[#7c3bed]/20 text-sm font-medium animate-scale-in">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7c3bed] opacity-75" />
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7c3bed]" />
//             </span>
//             November 29, 2025 • Miva Open University, Lagos
//           </div>

//           {/* Headline */}
//           <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
//             Career Brunch 2.0: The{" "}
//             <PointerHighlight
//               rectangleClassName="bg-[#1060D3]/20 dark:bg-[#E473FF] border-blue-300 dark:border-blue-700 leading-loose"
//               pointerClassName="text-blue-500 h-3 w-3"
//               containerClassName="inline-block mx-1"
//             >
//               <span className="relative z-10">Career-Tech & Lifestyle</span>
//             </PointerHighlight>
//             Experience
//           </h1>

//           {/* Subtext */}
//           <p className="text-base md:text-xl  max-w-3xl mx-auto leading-relaxed">
//             Where ambition meets opportunity, Career Brunch 2.0 is the ultimate
//             Career, Tech and Lifestyle Experience for Gen Zs and Millennials
//             looking to connect, learn, and grow. Join us for a transformative
//             day of career acceleration, tech innovation, and lifestyle
//             experiences.
//           </p>

//           {/* CTA buttons */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
//             {/* ✅ MAINSTACK CHECKOUT BUTTON */}
//             <button
//               id="mainstack_checkout_btn"
//               onClick={handleCheckout}
//               className="flex cursor-pointer bg-primary px-4 py-2 items-center gap-2 "
//             >
//               <LuTickets className="w-5 h-5" />
//               Get Tickets
//               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </button>

//             {/* Partner link */}
//             <a href="https://forms.gle/SPsMCsaDnHkUso446" target="_blank" rel="noopener noreferrer">
//               <button className="flex cursor-pointer bg-sec px-4 py-2 items-center gap-2 ">
//                 <Handshake className="w-5 h-5" />
//                 Partner with Us
//                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Hidden Mainstack iframe */}
//       <iframe
//         id="mainstack_checkout_iframe"
//         src="https://checkout.mainstack.me/?productId=JxLGXAELVQZM&type=popup&width=410px"
//         style={{
//           border: 0,
//           display: "none",
//           position: "fixed",
//           top: 0,
//           left: 0,
//           zIndex: 100000,
//           height: "100%",
//           width: "100%",
//         }}
//         allow="payment"
//       ></iframe>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
//         <div className="flex flex-col items-center gap-2 text-muted-foreground">
//           <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
//           <ArrowRight className="w-4 h-4 rotate-90" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

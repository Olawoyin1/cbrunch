// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FcGoogle } from "react-icons/fc";
// import { Eye, EyeOff } from "lucide-react";
// import { Link } from "react-router-dom";

// const slides = [
//   {
//     title: "Explore the most advanced AI tools",
//     desc: "Built with all AI tools to aid teachers day-to-day tasks to improve students outcome.",
//     image: "../../Images/login.jpg",
//   },
//   {
//     title: "Connect With Mentors",
//     desc: "Find guidance and support from experienced educators and peers.",
//     image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/8591c430607151.5fdbc0cc8345f.jpg",
//   },
//   {
//     title: "Achieve Your Goals",
//     desc: "Track your progress and unlock new opportunities with our tools.",
//     image: "https://img.freepik.com/premium-photo/robot-teaches-students-school-ai-teacher-robot-school_451189-3847.jpg",
//   },
// ];

// const Login: React.FC = () => {
//     const [showPassword, setShowPassword] = useState(false);
//   const [role, setRole] = useState<"teacher" | "student" | "school">("teacher");
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);

//     return () => clearInterval(interval); // cleanup
//   }, []);

//   return (
//     <div className="flex min-h-screen">
//       {/* LEFT SIDE */}
//       <div className="w-[45%] hidden md:flex relative overflow-hidden ">
//         <AnimatePresence mode="wait">
//     <motion.div
//       key={slides[currentSlide].image}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.8 }}
//       className="absolute inset-0 bg-cover bg-center"
//       style={{
//         backgroundImage: `url('${slides[currentSlide].image}')`,
//       }}
//     ></motion.div>
//   </AnimatePresence>
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/30 to-[#290064]" />

//         {/* Logo */}
//         <div className="absolute flex items-center gap-3 top-12.5 left-22 text-white text-2xl font-bold">
//             <img src="../../Images/logo.png" className="w-12.5" alt="" />
//           AiTeacha
//         </div>

//         {/* Bottom Slide Text */}
//         <div className="absolute bottom-40 left-22  max-w-[433px]  text-white">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentSlide}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-2xl font-semibold mb-3">{slides[currentSlide].title}</h2>
//               <p className="text-gray-300 test-base">{slides[currentSlide].desc}</p>
//             </motion.div>
//           </AnimatePresence>

//           {/* Slide Dots */}
//           <div className="flex  mt-3 space-x-2">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
//                   currentSlide === index ? "bg-[#E630F0] scale-110" : "bg-gray-500"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="w-full md:w-[55%] flex items-center justify-center p-4 md:p-12 bg-white">
//         <div className="w-full max-w-md">
//             {/* logo */}
//             <img src="../../Images/logo.png" className="w-12.5 mx-auto mb-3 flex md:hidden" alt="" />

//           {/* Title */}
//           <h1 className="text-xl md:text-[32px] login-header text-center font-extrabold md:font-bold mb-1">Welcome Back!</h1>
//           <p className="text-[#3B3A3A] text-sm mb-8 text-center">Enter your details to continue</p>

//            {/* Role Selection */}
//       <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
//         {["teacher", "student", "school"].map((r) => (
//           <button
//             key={r}
//             onClick={() => setRole(r as any)}
//             className={`w-1/3 py-2 rounded font-medium cursor-pointer text-sm transition ${
//               role === r
//                 ? "bg-[#8133F1] text-white shadow"
//                 : "text-gray-600"
//             }`}
//           >
//             As {r.charAt(0).toUpperCase() + r.slice(1)}
//           </button>
//         ))}
//       </div>

//       <form action="" className="">

//         {/* Email */}
//         <div className="mb-5">
//           <label htmlFor="email" className="block text-base font-semibold mb-1">
//             Email Address
//           </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="John Doe"
//             className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8133F1]"
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-3">
//           <label htmlFor="password" className="block text-base font-semibold mb-1">
//             Password
//           </label>
//           <div className="relative">
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter Password"
//               className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8133F1] "
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600"
//             >
//               {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//             </button>
//           </div>
//         </div>

//         {/* Remember & Forgot */}
//         <div className="flex items-center justify-between text-sm mb-6">
//           <label className="flex items-center gap-2 cursor-pointer">
//             <input
//               type="checkbox"
//               className="accent-[#8133F1] w-4 h-4 rounded"
//             />
//             <span className="text-gray-600 text-sm font-medium">Remember me</span>
//           </label>
//           <a href="/auth/reset-password" className="text-[#4600A9] tex-sm font-semibold">
//             Forgot Password?
//           </a>
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full bg-[#6200EE] text-white py-2 rounded-full cursor-pointer font-medium hover:bg-[#8133F1] transition"
//         >
//           Log In
//         </button>

//         {/* Separator */}
//           <div className="flex items-center my-6">
//             <div className="flex-1 h-px bg-gray-300"></div>
//             <span className="px-3 text-gray-500 text-sm">or</span>
//             <div className="flex-1 h-px bg-gray-300"></div>
//           </div>

//         {/* Google Button */}
//           <button className="w-full flex items-center cursor-pointer justify-center border border-gray-300 py-2 rounded-full hover:bg-gray-100 transition">
//             <FcGoogle size={22} className="mr-2" />
//             Login with Google
//           </button>

//           {/*Dont have an Account  */}
//           <p className="mt-6 text-gray-500 text-center">Dont have an account ? <Link className="text-[#6200EE] font-semibold underline" to="/register">Sign up</Link></p>

//       </form>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const slides = [
  {
    title: "Explore the most advanced AI tools",
    desc: "Built with all AI tools to aid teachers day-to-day tasks to improve students outcome.",
    image: "../../Images/login.jpg",
  },
  {
    title: "Connect With Mentors",
    desc: "Find guidance and support from experienced educators and peers.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/8591c430607151.5fdbc0cc8345f.jpg",
  },
  {
    title: "Achieve Your Goals",
    desc: "Track your progress and unlock new opportunities with our tools.",
    image:
      "https://img.freepik.com/premium-photo/robot-teaches-students-school-ai-teacher-robot-school_451189-3847.jpg",
  },
];

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"teacher" | "student" | "school">("teacher");
  const [currentSlide, setCurrentSlide] = useState(0);

  const loginSchema = z.object({
    email: z
      .string()
      .min(1, "Please enter your email")
      .email("Invalid email format"),
    password: z
      .string()
      .min(1, "Please enter your password")
      .min(7, "Password must be at least 7 characters long"),
  });

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log("Form Data:", values);
    alert(`Logged in successfully`);
    // Here you can send the data to an API
    form.reset();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* LEFT SIDE */}
      <div className="w-[45%] hidden md:flex relative overflow-hidden ">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${slides[currentSlide].image}')`,
            }}
          ></motion.div>
        </AnimatePresence>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/30 to-[#290064]" />

        {/* Logo */}
        <div className="absolute flex items-center gap-3 top-12.5 left-22 text-white text-2xl font-bold">
          <img src="../../Images/logo.png" className="w-12.5" alt="" />
          AiTeacha
        </div>

        {/* Bottom Slide Text */}
        <div className="absolute bottom-40 left-22  max-w-[433px]  text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-3">
                {slides[currentSlide].title}
              </h2>
              <p className="text-gray-300 test-base">
                {slides[currentSlide].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Slide Dots */}
          <div className="flex  mt-3 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  currentSlide === index
                    ? "bg-[#E630F0] scale-110"
                    : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-[55%] flex items-center justify-center p-4 md:p-12 bg-white">
        <div className="w-full max-w-md">
          {/* logo */}
          <img
            src="../../Images/logo.png"
            className="w-12.5 mx-auto mb-3 flex md:hidden"
            alt=""
          />

          {/* Title */}
          <h1 className="text-xl md:text-[32px] login-header text-center font-extrabold md:font-bold mb-1">
            Welcome Back!
          </h1>
          <p className="text-[#3B3A3A] text-sm mb-8 text-center">
            Enter your details to continue
          </p>

          {/* Role Selection */}
          <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
            {["teacher", "student", "school"].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r as any)}
                className={`w-1/3 py-2 rounded font-medium cursor-pointer text-sm transition ${
                  role === r
                    ? "bg-[#8133F1] text-white shadow"
                    : "text-gray-600"
                }`}
              >
                As {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-base font-semibold mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...form.register("email")}
                placeholder="John Doe"
                className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8133F1]"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 font-semibold text-sm mt-1">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className="block text-base font-semibold mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...form.register("password")}
                  placeholder="Enter Password"
                  className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8133F1] "
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                {form.formState.errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-[#8133F1] w-4 h-4 rounded"
                />
                <span className="text-gray-600 text-sm font-medium">
                  Remember me
                </span>
              </label>
              <a
                href="/auth/reset-password"
                className="text-[#4600A9] tex-sm font-semibold"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#6200EE] text-white py-2 rounded-full cursor-pointer font-medium hover:bg-[#8133F1] transition"
            >
              Log In
            </button>

            {/* Separator */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-3 text-gray-500 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Google Button */}
            <button className="w-full flex items-center cursor-pointer justify-center border border-gray-300 py-2 rounded-full hover:bg-gray-100 transition">
              <FcGoogle size={22} className="mr-2" />
              Login with Google
            </button>

            {/*Dont have an Account  */}
            <p className="mt-6 text-gray-500 text-center">
              Dont have an account ?{" "}
              <Link
                className="text-[#6200EE] font-semibold underline"
                to="/register"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

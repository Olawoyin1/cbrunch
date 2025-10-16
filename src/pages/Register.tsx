import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";
import { PiGraduationCap } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { LiaUserLockSolid } from "react-icons/lia";
import { LuSchool } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { IoCheckmarkCircle } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import CustomDropdownSelect from "../components/CustomDropdownSelect";
import { Country, State } from "country-state-city";








const roles = [
  { name: "Student", icon: <PiGraduationCap size={25} /> },
  { name: "Teacher", icon: <GoBook size={25} /> },
  { name: "Lecturer", icon: <LiaUserLockSolid size={25} /> },
  { name: "School", icon: <LuSchool size={25} /> },
];

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

const Register: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countries, setCountries] = useState<{ label: string; value: string }[]>([]);
const [states, setStates] = useState<{ label: string; value: string }[]>([]);
const [selectedCountry, setSelectedCountry] = useState<string>("");

useEffect(() => {
  const allCountries = Country.getAllCountries();
  const countryOptions = allCountries.map((c) => ({
    label: c.name,
    value: c.isoCode,
  }));
  setCountries(countryOptions);
}, []);


const handleCountrySelect = (val: string) => {
  setSelectedCountry(val);
  form.setValue("country", val, { shouldValidate: true });

  const allStates = State.getStatesOfCountry(val);
  const stateOptions = allStates.map((s) => ({
    label: s.name,
    value: s.isoCode,
  }));
  setStates(stateOptions);
};


// const handleCountryChange = (e) => {
//   const countryCode = e.target.value;
//   setSelectedCountry(countryCode);

//   const stateList = State.getStatesOfCountry(countryCode);
//   setStates(stateList);
// };




  // 1️⃣ Define schemas per step
const step1Schema = z.object({
  role: z.string().min(1, "Please select a role"),
});

const step2Schema = z
  .object({
    firstName: z.string().min(1, "Please enter your first name"),
    lastName: z.string().min(1, "Please enter your last name"),
    email: z
      .string()
      .min(1, "Please enter your email") // 👈 check empty first
      .email("Please enter a valid email"), // 👈 then check format
    phone: z
      .string()
      .min(1, "Please enter your phone number")
      .regex(/^[0-9+() -]+$/, "Please enter a valid phone number"), // optional regex
    password: z
      .string()
      .min(1, "Please enter your password")
      .min(7, "Password must be at least 7 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const step3Schema = z.object({
  gender: z.string().min(1, "Please select your gender"),
  ageRange: z.string().min(1, "Please select your age range"),
  country: z.string().min(1, "Please select your country"),
  state: z.string().min(1, "Please select your state"),
  city: z.string().min(1, "Please enter your city"),
});



const verifyEmailSchema = z.object({
  verificationCode: z
    .string()
    .min(1, "Please enter your verification code")
    .regex(/^\d{6}$/, "Verification code must be 6 digits"),
});

const verifyAcct = useForm<z.infer<typeof verifyEmailSchema>>({
  resolver: zodResolver(verifyEmailSchema),
  mode: "onSubmit", // show errors only on submit
  reValidateMode: "onChange", // clear them once fixed
  defaultValues: {
    verificationCode: "",
  },
});


const handleVerify = (data: z.infer<typeof verifyEmailSchema>) => {
    console.log("Verification data:", data);
    // you can now send the verification code to backend here
    // console.log("Email verified!");
    navigate("/home"); 
  };


// 2️⃣ Combine schemas by step
// ✅ Combined schema
const registerSchema = step1Schema
  .merge(step2Schema.partial())
  .merge(step3Schema.partial());

// 3️⃣ Hook setup
const form = useForm<z.infer<typeof registerSchema>>({
  resolver: zodResolver(
    step === 1 ? step1Schema : step === 2 ? step2Schema : step3Schema
  ),
  mode : "onChange",
  reValidateMode: "onChange",
  defaultValues: {
    role: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    ageRange: "",
    country: "",
    state: "",
    city: "",
  },
});




const handleNext = async () => {
  const isValid = await form.trigger(); // validate only fields in the current schema
  if (!isValid) return;
  setStep((prev) => prev + 1);
};


const handleBack = () => setStep((prev) => prev - 1);



const onSubmit = (data: any) => {
  console.log("Form submitted:", data);
  // TODO: send data to your API endpoint here

  form.reset(); // ✅ clear all inputs after successful submission
  setStep(4); // move to next step
};











  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval); // cleanup
  }, []);

  

  // const countries = [
  //   { label: "United States", value: "us" },
  //   { label: "United Kingdom", value: "uk" },
  //   { label: "Nigeria", value: "ng" },
  //   { label: "Canada", value: "ca" },
  //   { label: "Australia", value: "au" },
  // ];

  // const states = [
  //   { label: "Lagos", value: "lagos" },
  //   { label: "Abuja (FCT)", value: "abuja" },
  //   { label: "Kano", value: "kano" },
  //   { label: "Oyo", value: "oyo" },
  //   { label: "Rivers", value: "rivers" },
  //   { label: "Kaduna", value: "kaduna" },
  //   { label: "Enugu", value: "enugu" },
  //   { label: "Anambra", value: "anambra" },
  // ];

  const ageRanges = [
    { label: "5 - 10", value: "5 - 10" },
    { label: "11 - 15", value: "11 - 15" },
    { label: "16 - 20", value: "16 - 20" },
    { label: "21 - 25", value: "21_24" },
    { label: "26 - 30", value: "25_34" },
    { label: "30 - 35", value: "35_44" },
    { label: "36 - 40", value: "45_54" },
    // { label: "55 and above", value: "55_plus" },
  ];

  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  // };

  // const handleNext = () => setStep((prev) => prev + 1);
  // const handleBack = () => setStep((prev) => prev - 1);



//   const handleSignUp = () => {
//   // ✅ You could add validation or API call here
//   console.log("Form submitted:", formData);

//   // Move to verification screen
//   setStep(4);
// };
const navigate = useNavigate();



const handleSkipVerification = () => {
  console.log("User skipped verification");
  navigate("/home"); // redirect to homepage
};


  return (
    <div className="flex min-h-screen">
      {/* LEFT SIDE */}
      <div className=" hidden md:flex relative overflow-hidden ">
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
        <div className="w-full max-w-2xl mx-auto bg-white  ">
          <AnimatePresence mode="wait">
            {/* FIRST STEP RIGHT HERE */}
            {step === 1 && (
              <motion.div
                key="step1"
                className="max-w-md mx-auto  "
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-xl md:text-[32px] login-header text-center font-extrabold md:font-bold mb-1">
                  What best describe you?
                </h1>
                <p className="text-[#3B3A3A] text-sm mb-8 text-center">
                  Are you joining AITEACHA as a teacher, a student, a lecturer
                  or a school?
                </p>

                <div className="grid grid-cols-2 gap-4 my-8">
                  {roles.map((role) => {
                    const isSelected = selectedRole === role.name;

                    return (
                      <div
                        key={role.name}
                        onClick={() => {
                          setSelectedRole((prev) =>
                            prev === role.name ? null : role.name
                          )
                          form.setValue("role", role.name);
                        }}

                        className={`relative border flex flex-col justify-between rounded-xl p-6 h-32 cursor-pointer transition ${
                          isSelected
                            ? "bg-[#6200EE] text-white border-green-600"
                            : "border-gray-300 hover:bg-[#EBEBEB]/70"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="mb-3">{role.icon}</div>

                          {/* ✅ Only show checkmark if selected */}
                          {isSelected && <IoCheckmarkCircle size={25} />}
                        </div>

                        <p className="text-lg font-semibold">{role.name}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-4">
                  <button
                    disabled={!selectedRole}
                    onClick={handleNext}
                    className={`w-full px-6 py-3 transition rounded-full font-medium ${
                      selectedRole
                        ? "bg-[#6200EE] text-white cursor-pointer hover:bg-purple-500"
                        : "bg-[#EBEBEB] text-gray-600 cursor-not-allowed"
                    }`}
                  >
                    Continue
                  </button>

                  <button
                    onClick={() => window.history.back()}
                    className="px-4 py-2 block w-full rounded-full cursor-pointer "
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            )}













            {/* STEP 2 */}
            {step === 2 && (
              <motion.div
                key="step2 "
                className="max-w-xl mx-auto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <button
                  onClick={handleBack}
                  className="flex cursor-pointer hover:text-[#8133F1] transition  items-center mb-15 gap-2.5 text-base font-semibold"
                >
                  <ChevronLeft size={20} /> Back
                </button>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-semibold mb-1"
                    >
                      First Name
                    </label>
                    <input
                      placeholder="Enter first name"
                      {...form.register("firstName")}
                      className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8133F1]"
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-red-500 font-semibold text-sm mt-1">{form.formState.errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-semibold mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      {...form.register("lastName")}
                      placeholder="Enter last name"
                      // className="border rounded-lg p-2"
                      className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8133F1]"
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-red-500 font-semibold text-sm mt-1">{form.formState.errors.lastName.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-semibold mb-1"
                    >
                      Email
                    </label>
                    <input
                      placeholder="Enter email"
                      {...form.register("email")}
                      className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8133F1]"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 font-semibold text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-semibold mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      placeholder="Enter phone number"
                      {...form.register("phone")}
                      className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8133F1]"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 font-semibold text-sm mt-1">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-base font-semibold mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"          
                      {...form.register("password")}
                      className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8133F1] "
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                    {form.formState.errors.password && (
                      <p className="text-red-500 font-semibold text-sm mt-1">{form.formState.errors.password.message}</p>
                    )}
                </div>

                <div className="mb-2.5">
                  <label
                    htmlFor="email"
                    className="block text-base font-semibold mb-1"
                  >
                    Confirm password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm Password"                      
                      {...form.register("confirmPassword")}
                      className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8133F1]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                    {form.formState.errors.confirmPassword && (
                      <p className="text-red-500 font-semibold text-sm mt-1">{form.formState.errors.confirmPassword.message}</p>
                    )}
                </div>

                <div className="flex justify-between mb-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      className="accent-[#8133F1] w-4 h-4 rounded"
                    />
                    Accept Terms and Policy
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="newsletter"
                      className="accent-[#8133F1] w-4 h-4 rounded"
                    />
                    Receive Newsletter
                  </label>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full   bg-[#6200EE] hover:bg-[#8133F1] text-white cursor-pointer py-3 rounded-full "
                >
                  Next
                </button>

                {/* Footer */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-600">or</span>
                  </div>
                </div>

                {/* Google Button */}
                <button className="w-full flex items-center cursor-pointer justify-center border border-gray-300 py-2 rounded-full hover:bg-gray-100 transition">
                  <FcGoogle size={22} className="mr-2" />
                  Login with Google
                </button>

                <p className="text-center mt-4">
                  Already have an account?{" "}
                  <a href="/" className="text-purple-600 font-medium">
                    Log in
                  </a>
                </p>
              </motion.div>
            )}













            {/* STEP 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-xl mx-auto"
              >
                <button
                  onClick={handleBack}
                  className="flex cursor-pointer hover:text-[#8133F1] transition  items-center mb-9 gap-2.5 text-base font-semibold"
                >
                  <ChevronLeft size={20} /> Back
                </button>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-semibold mb-1"
                    >
                      Gender
                    </label>
                    <CustomDropdownSelect
                      options={genders}
                      placeholder="Select your gender"
                      onSelect={(val) =>
                        // setFormData((prev) => ({ ...prev, gender: val }))
                        form.setValue("gender", val, { shouldValidate: true })
                      }
                    />
                    {form.formState.errors.gender && (
                      <p className="text-red-500 font-semibold text-sm mt-1">{form.formState.errors.gender.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-semibold mb-1"
                    >
                      Age Range
                    </label>
                    <CustomDropdownSelect
                      options={ageRanges}
                      placeholder="Select Age Range"
                      onSelect={(val) =>
                        form.setValue("ageRange", val, { shouldValidate: true })
                      }
                    />
                    {form.formState.errors.ageRange && (
                      <p className="text-red-500 font-semibold text-sm mt-1">{form.formState.errors.ageRange.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-semibold mb-1"
                    >
                      Country
                    </label>
                    <CustomDropdownSelect
                      options={countries}
                      placeholder="Select your country"
                      onSelect={handleCountrySelect}
                    />
                    {form.formState.errors.country && (
                      <p className="text-red-500 font-semibold text-sm mt-1">{form.formState.errors.country.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-semibold mb-1"
                    >
                      State
                    </label>
                    <CustomDropdownSelect
                      options={states}
                      placeholder="Select your state"
                      onSelect={(val) =>
                        form.setValue("state", val, { shouldValidate: true })
                          }
                    />
                    {form.formState.errors.state && (
                      <p className="text-red-500 font-semibold text-sm mt-1">{form.formState.errors.state.message}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-base font-semibold mb-1"
                  >
                    City
                  </label>
                  <input
                    placeholder="City"
                    className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8133F1]"
                    {...form.register("city")}
                  />
                  {form.formState.errors.city && (
                      <p className="text-red-500 font-semibold text-sm mt-1">{form.formState.errors.city.message}</p>
                    )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-semibold mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    placeholder="Enter phone number"
                      {...form.register("phone")}
                    className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8133F1]"
                  />
                  {form.formState.errors.phone && (
                      <p className="text-red-500 font-semibold text-sm mt-1">{form.formState.errors.phone.message}</p>
                    )}
                </div>

                <div className="flex items-center p-3 border border-gray-200 rounded-lg my-5">
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    id="hasDisability"
                    className="accent-[#8133F1] w-4 h-4 text-purple-600 border border-purple-600 rounded-sm focus:ring-1 focus:ring-purple-400 cursor-pointer"
                  />

                  {/* Label */}
                  <div className="ml-3">
                    <label
                      htmlFor="hasDisability"
                      className="text-sm font-medium text-gray-800 cursor-pointer"
                    >
                      Do you have a disability?
                    </label>
                  </div>
                </div>

                <div className="mb-1">
                  <label
                    htmlFor="email"
                    className="block text-base font-semibold mb-1"
                  >
                    Referred By (Optional)
                  </label>
                  <input
                    name="referredBy"
                    placeholder="Referred by (optional)"
                    // className="border rounded-lg p-2 w-full mb-4"
                    className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8133F1]"
                  />
                </div>

                <div className="flex justify-between mb-5">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      className="accent-[#8133F1] w-4 h-4 rounded"
                    />
                    Accept Terms and Policy
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="newsletter"
                      className="accent-[#8133F1] w-4 h-4 rounded"
                    />
                    Receive Newsletter
                  </label>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full cursor-pointer bg-[#6200EE] hover:bg-[#8133F1] text-white py-2 rounded-full"
                >
                  Sign Up
                </button>


                {/* Footer */}
                <div className="relative my-5">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-600">or</span>
                  </div>
                </div>

                {/* Google Button */}
                <button className="w-full flex items-center cursor-pointer justify-center border border-gray-300 py-2 rounded-full hover:bg-gray-100 transition">
                  <FcGoogle size={22} className="mr-2" />
                  Login with Google
                </button>

                <p className="text-center mt-4">
                  Already have an account?{" "}
                  <a href="/" className="text-purple-600 font-medium">
                    Log in
                  </a>
                </p>
              </motion.div>



            )}
            {/* STEP 4 */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="max-w-xl mx-auto"
              >

                <div className="flex flex-col justify-center items-center  px-4">
      <div className="w-full max-w-md p-6">
        {/* Logo (optional) */}
        {/* <div className="flex justify-center mb-6">
          <img src="/Images/logo.png" alt="AiTeacha Logo" className="h-8" />
        </div> */}

          

        {/* Heading */}



        <h1 className="text-center text-3xl font-bold text-gray-900 mb-3">
          A Verification Code Was Sent to Your Email
        </h1>
        <p className="text-center text-gray-600 text-base mb-8">
          Please enter the verification code sent to your email to complete the
          process.
        </p>

        {/* Form */}
        <form 
        // onSubmit={form.handleSubmit(handleVerify)}
        onSubmit={verifyAcct.handleSubmit(handleVerify)}
        >
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Verification Code
            </label>
            <input
              type="text"
              // value={code}
              // onChange={(e) => setCode(e.target.value)}
              {...verifyAcct.register("verificationCode")}
              placeholder="Enter your code"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-600"
            />
            {verifyAcct.formState.errors.verificationCode && (
              <p  className="text-red-500 font-semibold text-sm mt-1">{verifyAcct.formState.errors.verificationCode.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#5C3CBB] hover:bg-[#4b2fa3] cursor-pointer text-white font-medium py-2.5 rounded-md transition"
          >
            Verify Email
          </button>
        </form>

        {/* Footer Actions */}
        <div className="text-center mt-6 space-y-3">
          <button
            // onClick={onResend}
            type="button"
            className="text-gray-700 cursor-pointer text-sm hover:underline"
          >
            Resend Code
          </button>

          <p className="text-lg font-semibold">
            <button
              // onClick={onSkip}
              onClick={handleSkipVerification}
              type="button"
              className="text-[#5C3CBB] cursor-pointer hover:underline"
            >
              Continue without verification
            </button>
          </p>
        </div>
      </div>
    </div>
              </motion.div>



            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Register;

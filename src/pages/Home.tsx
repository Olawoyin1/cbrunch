import React, { useState } from "react";

const optionsList = [
  "A.I Tools",
  "Assignment Management",
  "lesson plans",
  "Classrooms",
  "Test & Exams",
  "Teaching Visuals",
  "Customizeable Notes",
  "Interactive Teaching",
  "Reports",
  "Tailored Curriculum ",
  "School Management ",
  "Students Progress ",
];

const Home: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleToggle = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  // const handleContinue = () => {
  //   console.log("Selected options:", selectedOptions);
  //   alert(`You selected: ${selectedOptions.join(", ") || "None"}`);
  // };

  // const handleSkip = () => {
  //   alert("Skipped selection.");
  // };

  return (
    <div className="min-h-screen   flex flex-col items-center justify-center bg-gray-100 px-4">

      <div className="min-h-[85vh] flex flex-col items-center justify-between w-full max-w-3xl ">
          
      {/* Logo */}
      <div className="mb-6">
        <img
          src="/Images/logo.png"
          alt="Logo"
          className="w-20 h-20 object-contain"
        />
      </div>


      <div className="text-center">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to Our Platform
        </h1>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          Select your interests below. You can choose multiple options or skip this step.
        </p>
      </div>

      {/* Options */}
      <div className="flex items-center justify-center max-w-xl  gap-4 mb-10 w-full flex-wrap">
        {optionsList.map((option) => {
          const isSelected = selectedOptions.includes(option);
          return (
            <button
              key={option}
              onClick={() => handleToggle(option)}
              className={`py-3 text-base rounded-lg cursor-pointer px-7 font-semibold transition-all duration-300 ${
                isSelected
                  ? "bg-[#5C3CBB] text-white  scale-105"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Action Buttons */}
        <button
          // onClick={handleContinue}
          // className=" bg-[#5C3CBB] max-w-full w-md hover:bg-[#4b2fa3] text-white py-2.5 rounded-md transition font-medium"
          className="max-w-full w-md bg-[#6200EE] hover:bg-[#4b2fa3] cursor-pointer text-white font-medium py-3 rounded-full transition text-[20px]"
        >
          Continue
        </button>
        <button
          // onClick={handleSkip}
          className=" max-w-full w-md cursor-pointer  text-gray-800 py-2.5 rounded-md transition font-medium"
        >
          Skip
        </button>
      
      </div>

    </div>
  );
};

export default Home;

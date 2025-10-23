
import { VscRocket } from "react-icons/vsc";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { BsCpu } from "react-icons/bs";

export default function Theme() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute hidden md:block  top-20 left-10 w-72 h-72 bg-[#00FFBD] rotate-45 rounded-md filter  "></div>
        <div className="absolute  block md:hidden top-1/2  rotate-90 rounded-md filter  ">
          <img src="../../Images/cb.png" alt="" />
        </div>
        <div className="absolute bottom-20 hidden md:block right-10 w-96 h-96 bg-[#00FFBD] rounded-full filter "></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded">
            <VscRocket className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-semibold tracking-wide">2025 THEME</span>
          </div>

          <h2 className="text-2xl sm:text-5xl font-bold mb-6">
            The Career-Tech Experience: <br />
            <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
              Elevating Careers, Building the Future
            </span>
          </h2>

          <p className="text-sm md:text-xl text-gray-300 leading-relaxed mb-12">
            This year's edition explores how technology, lifestyle, and work intersect to create modern, adaptable professionals.
            Expect real conversations, future-forward insights, and hands-on experiences designed to help you thrive, not just survive in the digital age.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-rose-500 rounded-lg flex items-center justify-center">
                <BsCpu className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-2">Tech Innovation</h3>
                <p className="text-gray-400 text-sm">AI, automation, and digital tools shaping tomorrow's workplace</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                <LuBriefcaseBusiness className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-2">Career Evolution</h3>
                <p className="text-gray-400 text-sm">Navigating modern career paths in a changing world of work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

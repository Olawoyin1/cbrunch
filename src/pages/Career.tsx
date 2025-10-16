import { motion } from "framer-motion"
import {   CheckCircle, TrendingUp } from "lucide-react";
import { RiFileTextLine } from "react-icons/ri";
import { RiUser4Line } from "react-icons/ri";
import { LuBriefcaseBusiness } from "react-icons/lu";
import PartnersSection from "../components/PartnersSection";

const Career = () => {


  const careerSteps = [
    {
      icon: RiFileTextLine,
      title: "Skills Assessment",
      description: "We evaluate your current skills, interests, and career goals to identify the best training path for you.",
    },
    {
      icon: RiUser4Line,
      title: "Career Counseling",
      description: "One-on-one sessions with experienced career counselors who provide personalized guidance and industry insights.",
    },
    {
      icon: LuBriefcaseBusiness,
      title: "Job Placement Support",
      description: "Access to our network of employer partners and assistance with applications, interviews, and negotiations.",
    },
    {
      icon: TrendingUp,
      title: "Ongoing Development",
      description: "Continued support even after placement, including opportunities for advanced training and career advancement.",
    },
  ];


  return (
    <div>
       <div className="text-center mt-40 mb-12">
                <div className="px-4 md:px-0"
                >
                  <div className="inline-block mb-4 bg-[#FFF9F0] text-[#7D6007] text-sm font-semibold px-10 py-3 rounded-xl">
                      Your Success is Our Priority
                    
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    Career Services & Job Placement
                  </h2>
                  <p className="md:text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive career support from training through employment. We're committed to helping you build a successful, sustainable career.
                  </p>
                </div>
        </div>





        {/* Career Support Process */}
      <section className="py-16 bg-gray-50 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Our Career Support Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From your first day of training to your first day on the job—and beyond
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-white p-4 rounded border border-gray-300 hover:shadow transition-shadow ">
                  <div>
                    <div className="w-12 h-12 rounded-lg  flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-xl font-medium mb-2">{step.title}</div>
                  </div>
                  
                    <p className="text-sm">{step.description}</p>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4 bg-[#FFF9F0] text-[#7D6007] text-sm font-semibold px-10 py-3 rounded-xl">Proven Excellence</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that demonstrate our commitment to student success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary mb-2">85%</div>
              <p className="text-muted-foreground">Job Placement Rate</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary mb-2">2 months</div>
              <p className="text-muted-foreground">Average Time to Employment</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Employer Partners</p>
            </motion.div>
          </div>
        </div>
      </section>





      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Internship & Apprenticeship Programs
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Gain real-world experience through our structured internship and apprenticeship programs.
                We partner with leading companies to provide hands-on learning opportunities that bridge
                the gap between classroom training and professional work.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#70BF49] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">3-6 month internship programs with partner companies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#70BF49] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mentorship from experienced industry professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#70BF49] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Opportunity for full-time employment after completion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#70BF49] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ongoing support and evaluation throughout your placement</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://static.wixstatic.com/media/99f32b_cb765274154d4bba9b6e892514de018d~mv2.jpg/v1/fill/w_980,h_649,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/99f32b_cb765274154d4bba9b6e892514de018d~mv2.jpg"
                alt="Internship Program"
                className="rounded shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="font-semibold text-sm text-[#0062A7]">Success Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">85%</p>
                <p className="text-sm text-gray-600 mt-2">Interns receive full-time offers</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>






       <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3GfBECc8EzF73KkWPAsVGe0yQK2-oQYZ4Y3H9UbiAov046sg3qA59rVWt-iNcvBf25dOz8GFvGL-gQNVz49LqJUGKJqwUi9Q6gu2glySBd_t_-db0PvCkknAeIz08sYLqG0j_SQSt3FWeXUDvaq2ierFpvSaIYg1Qc_Pl62fVCURRqmftVkd3_3kI/s2868/1-2.JPG"
                alt="Entrepreneurship Training"
                className="rounded shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Entrepreneurship Training
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Not everyone wants to work for someone else. If you dream of starting your own business,
                our entrepreneurship training program provides the business skills and knowledge you need
                to succeed as a technical entrepreneur.
              </p>
              <div className="bg-gradient-to-br from-[#70BF49]/10 to-[#0062A7]/10 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">What You'll Learn:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#70BF49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Business planning and management fundamentals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#70BF49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Financial management and pricing strategies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#70BF49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Marketing and customer acquisition</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#70BF49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Legal requirements and business registration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#70BF49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Access to business funding and resources</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      <PartnersSection />



    </div>
  )
}

export default Career

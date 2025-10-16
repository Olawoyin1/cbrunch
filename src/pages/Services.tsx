import {      CheckCircle, Zap, Target, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { GraduationCap, Award, Sparkles } from "lucide-react";

import { GoTasklist } from "react-icons/go";
import { MdOutlineHouseSiding } from "react-icons/md";
import { LuBriefcaseBusiness } from "react-icons/lu";

const Services = () => {




const mainServices = [
  {
    icon: GraduationCap,
    title: "Quality Training Programs",
    description: `
Our programs are designed to combine both technical hands-on learning and theoretical knowledge, providing our trainees with the experience they need to thrive in the real world.

Our commitment to excellence in education is reflected in our outstanding results and the success stories of our graduates. We believe that education should be accessible to everyone, regardless of their background or circumstances. Therefore, we offer flexible program options to meet the unique needs of our trainees.

In addition to our training programs, we also provide a range of resources to support our trainees throughout their educational journey. From career counseling to job placement services, we are committed to providing our trainees with the tools and support they need to achieve their professional and personal goals.
    `,
    color: "from-blue-500/20 via-blue-600/10 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Award,
    title: "Certification",
    description: `
Upon successful completion of our training programs, our trainees are awarded a certificate from the CPD Certification Service, a globally recognized UK accredited awarding body. This provides our trainees with a competitive edge in the job market.

We also provide the following certifications upon request:
- Trade Test 1–3, approved by the Federal Ministry of Labour & Employment.
- National Skills Qualification (NSQ), regulated by the National Board for Technical Education in Nigeria (NBTE).
- Council for the Regulation of Engineering in Nigeria (COREN) for the following courses: Solar Photovoltaic Installation (SPVI) & Solar Photovoltaic Installation Supervision (SPVIS).

We also offer internal certifications for several of our short training courses, which are designed to enhance our trainees' skills and knowledge in specific areas.
    `,
    color: "from-yellow-500/20 via-yellow-600/10 to-transparent",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-600",
  },
  {
    icon: LuBriefcaseBusiness,
    title: "Job Placement, Internships & Career Guidance",
    description: `
We believe that our responsibility does not end with training and certifying our trainees. We understand that securing employment can be a daunting task, especially for those who are just starting their careers. Therefore, we offer comprehensive job placement services to our trainees, providing them with access to a range of employment opportunities.

Our job placement services include assistance with securing internships, part-time, contract, and full-time employment. We work closely with our trainees to understand their career aspirations and match them with suitable job openings. Our extensive network of industry partners and employers provides us with a range of job opportunities in various sectors, ensuring that we can assist our trainees in finding the right job.

We understand that internships are a crucial part of gaining industry experience and building a professional network. Therefore, we offer assistance with securing internships, providing our trainees with valuable hands-on experience that complements their classroom learning. Our expert team provides guidance on identifying suitable internships, resume development, and interview preparation, ensuring that our trainees are well-equipped to secure opportunities.

In addition to job placement services, we also offer career counseling and advice to our trainees. Our expert career counselors work closely with our trainees to understand their career goals and aspirations and provide them with guidance on career planning, job search strategies, and professional development.
    `,
    color: "from-green-500/20 via-green-600/10 to-transparent",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: MdOutlineHouseSiding,
    title: "Hostel Accommodation",
    description: `
We understand that traveling can be an inconvenience, and finding suitable accommodation can be even more challenging, especially when it comes to extended training periods. Therefore, we offer hostel accommodation on our premises, designed to provide a comfortable and convenient living space for our trainees.

Our hostel facility is not just a mere space to stay; it's a home away from home. We take pride in maintaining a high level of cleanliness and hygiene within our hostel. We offer meal plans that cater to the dietary needs of our trainees upon request. Our hostel is also fully secured with round-the-clock uniformed security personnel.
    `,
    color: "from-orange-500/20 via-orange-600/10 to-transparent",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
  },
  {
    icon: Sparkles,
    title: "Soft Skills & Entrepreneurship Training",
    description: `
At Etiwa Tech, we understand that having hard skills alone is not enough to succeed in today's ever-changing job market. Soft skills, life skills, and entrepreneurship training are equally essential to sustain employment and build a successful career. Therefore, we offer a comprehensive training program that not only focuses on hard skills but also on developing a range of soft skills that are crucial for professional and personal growth.

Our soft skills training program includes a range of topics, such as communication, teamwork, leadership, problem-solving, time management, and emotional intelligence. Entrepreneurship training is also a significant part of our program. We recognize that some of our trainees have an interest in self-employment and starting their own businesses. Therefore, we offer business start-up advice and support, including business planning, funding opportunities, and marketing strategies. Our goal is to equip our trainees with the necessary skills and knowledge to start and run successful businesses.
    `,
    color: "from-purple-500/20 via-purple-600/10 to-transparent",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
  },
  {
    icon: GoTasklist,
    title: "Technical Skills Assessment",
    description: `
We understand that technical skills are critical for success in many job roles, particularly those requiring specialized knowledge and expertise. However, it can be challenging for hiring managers and recruiters to accurately assess a candidate's technical skills without a comprehensive assessment process.

Therefore, we offer a practical and theoretical technical skills assessment designed to help companies and organizations identify the skills and competencies of their current staff and new recruits. Our assessment program is a simple and effective method that evaluates a candidate's practical knowledge and competency for technical job roles.

Our program is tailored to meet the unique needs and requirements of each organization. We work closely with our clients to develop a customized assessment process that accurately measures a candidate's technical skills and knowledge. Our assessments are designed to be practical and relevant, simulating real-world situations that candidates are likely to encounter in their job roles.

Our assessment program is conducted by experienced and qualified assessors who are experts in their respective technical fields. They use a range of tools and techniques, such as practical exercises, written tests, and interviews, to evaluate a candidate's technical skills and knowledge.

Overall, our technical skills assessment program is a valuable tool for hiring managers and recruiters to identify candidates' technical skills and knowledge accurately. We are committed to providing a comprehensive and reliable assessment process that helps our clients make informed decisions about their current staff and new recruits.
    `,
    color: "from-red-500/20 via-red-600/10 to-transparent",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-600",
  },
];

    const whyChooseUs = [
    { icon: Zap, title: "Fast Track", description: "Accelerated learning paths" },
    { icon: Target, title: "Job Focused", description: "Industry-aligned curriculum" },
    { icon: Shield, title: "Certified", description: "Internationally recognized" },
  ];
  return (
    <div>
       <div className="text-center mt-40 mb-12">
                <div className="px-4 md:px-0"
                >
                  <div className="inline-block mb-4 bg-[#FFF9F0] text-[#7D6007] text-sm font-semibold px-10 py-3 rounded-xl">
                      Our Core Services
                    
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    Everything You Need to Succeed
                  </h2>
                  <p className="md:text-lg text-muted-foreground max-w-2xl mx-auto">From your first day of training to your first day on the job and beyond. We're with you every step of the way.
                  </p>
                </div>
        </div>



        {/* Why Choose Us - Badges */}
      <section className="py-12 ">
        <div className="container  mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {whyChooseUs.map((item) => (
              <div
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



             {/* Core Services - Alternating Layout */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
         

          <div className="space-y-24 max-w-7xl mx-auto">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12  ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2 ' : ''}>
                  
                  <h3 className="text-3xl font-heading font-bold mb-4">{service.title}</h3>


                <div className='block lg:hidden'>
                  <div className={`relative rounded bg-gradient-to-br ${service.color} p-8 border border-gray-300 backdrop-blur-sm min-h-[300px] flex items-center justify-center`}>
                    <div className="absolute inset-0 rounded-3xl bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]"></div>
                    <service.icon className={`h-32 w-32 ${service.iconColor} opacity-20`} />
                  </div>
                </div>



                  <p className="text-muted-foreground text whitespace-pre-line mb-6">{service.description}</p>
                 
                  
                </div>

                {/* Visual Card */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1 hidden lg:grid' : 'hidden lg:grid'}>
                  <div className={`relative rounded bg-gradient-to-br ${service.color} p-8 border border-gray-300 backdrop-blur-sm min-h-[300px] flex items-center justify-center`}>
                    <div className="absolute inset-0 rounded bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]"></div>
                    <service.icon className={`h-32 w-32 ${service.iconColor} opacity-20`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




       {/* Training Approach - Modern Split */}
   <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 bg-[#FFF9F0] text-[#7D6007] text-sm font-semibold px-10 py-3 rounded-xl">Our Methodology</div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Perfect Balance of Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven 40/60 split that delivers real-world readiness
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Theory Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute  bg-gradient-to-r from-blue-500 to-purple-600 rounded opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative h-full border border-gray-300 rounded bg-white p-6 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">
                    Foundation
                  </p>
                  <h3 className="text-3xl font-heading font-bold">
                    Theory Based
                  </h3>
                </div>
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    40%
                  </span>
                </div>
              </div>

              <ul className="space-y-2">
                {[
                  "Comprehensive technical knowledge and principles",
                  "Safety protocols and industry regulations",
                  "International standards and best practices",
                  "Blueprint reading and project planning",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4  rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-foreground leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Practical Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute bg-gradient-to-r from-green-500 to-emerald-300 rounded opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative h-full border border-gray-300 rounded bg-white p-6 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">
                    Application
                  </p>
                  <h3 className="text-3xl font-heading font-bold">
                    Practical Training
                  </h3>
                </div>
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    60%
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  "Hands-on workshops and real-world projects",
                  "Industry-grade tools and equipment usage",
                  "Team collaboration and problem solving",
                  "On-site simulations and field training",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4  rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-foreground leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>













    </div>
  )
}

export default Services

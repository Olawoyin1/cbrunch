import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who should attend Career Brunch 2.0?",
      answer: "Career Brunch is perfect for ambitious professionals, jobseekers, startup founders, tech talents, students, NYSC members, freelancers, and anyone looking to advance their career. Whether you're just starting out or looking to pivot, this event is for you."
    },
    {
      question: "What's included in my ticket?",
      answer: "Your ticket includes full access to all panels, masterclasses, networking sessions, the talent lounge, lifestyle corner, brunch meals, professional LinkedIn photo booth, CV reviews, speed interviews, and all event activities. It's an all-inclusive experience!"
    },
    {
      question: "Will there be job opportunities at the event?",
      answer: "Absolutely! We'll have a dedicated Talent Lounge with recruiters from top companies, speed interview sessions, and real job openings. Many attendees from previous editions secured job offers within weeks of attending."
    },
    {
      question: "How can I become a speaker or panelist?",
      answer: "We're always looking for industry experts to share their insights! Please reach out to partnerships@thegenzhr.com with your profile and topic of expertise. Our team will review and get back to you."
    },
    {
      question: "Is food provided at the event?",
      answer: "Yes! True to our name, we provide a curated brunch experience with quality food and refreshments throughout the day. Dietary preferences will be accommodated where possible."
    },
    {
      question: "Can I bring someone with me?",
      answer: "Each ticket is valid for one person. However, you're welcome to purchase multiple tickets! We encourage you to bring colleagues, friends, or fellow professionals who would benefit from the experience."
    },
    {
      question: "What should I wear?",
      answer: "We recommend business casual or smart casual attire. Since we have a professional photo booth for LinkedIn headshots, dress to impress! Comfortable shoes are recommended as you'll be networking throughout the day."
    },
    {
      question: "How do I become a sponsor or partner?",
      answer: "We offer various partnership tiers including Headline, Platinum, Silver, Activity, and Pitch Sponsor packages. Contact our partnership team at partnerships@thegenzhr.com to discuss opportunities and receive our partnership deck."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-orange-100 to-rose-100 rounded">
              <HelpCircle className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-semibold text-gray-900 tracking-wide">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              Everything you need to know about Career Brunch 2.0
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded overflow-hidden border-2 border-gray-100 hover:border-orange-200 transition-all duration-300"
              >
                <button
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-gray-900 text-base md:text-lg pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-orange-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-gradient-to-r from-orange-50 to-rose-50 rounded">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-700 text-sm md:text-base mb-6">
              We're here to help! Reach out to our team and we'll get back to you promptly.
            </p>
            <a
              href="mailto:thegenzhr@gmail.com,partnerships@thegenzhr.com"
              className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold rounded hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

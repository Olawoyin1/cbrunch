import { Mic2 } from 'lucide-react';
// import Brand from './Brand';

export default function Speakers() {
  
  const speakers = [
    {
      name: "Adeife Adeoye",
      nickname: "",
      title: "Digital Creator",
      image: "../../Images/s1.jpeg"
    },
    {
      name: "Ayobami Oyaleke",
      nickname: "",
      title: "CEO Mainstack",
      image: "../../Images/s2.jpeg"
    },
    {
      name: "Tosin Olaseinde",
      nickname: "",
      title: "HR Leader",
      image: "../../Images/s3.jpeg"
    },
    {
      name: "Adeola Adedewe",
      nickname: "",
      title: "CEO Kredete",
      image: "../../Images/s4.jpeg"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4  py-3 bg-white rounded border border-gray-300">
              <Mic2 className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-semibold text-gray-900 tracking-wide">SPEAKERS & GUESTS</span>
            </div>
            
          </div>

        

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-5xl font-bold mb-2 text-gray-900">
                Meet Your <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">Expected Guests</span>
              </h3>
              <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto">
                Get ready to learn from pioneers, innovators, and thought leaders shaping the future of work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="relative rounded overflow-hidden  hover:shadow transition-all duration-500 hover:-translate-y-3">
                    <div className="rounded-3xl h-[350px] relative overflow-hidden">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-[350px] md:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border-2 border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Mic2 className="w-6 h-6 text-white" />
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h4 className="text-xl font-bold text-white mb-1">
                          {speaker.name}
                        </h4>
                        {speaker.nickname && (
                          <p className="text-orange-400 font-semibold text-sm mb-2">{speaker.nickname}</p>
                        )}
                        <p className="text-gray-300 text-sm font-medium">{speaker.title}</p>
                      </div>
                    </div>

                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/50 rounded-3xl transition-colors duration-300"></div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

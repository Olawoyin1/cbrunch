import { Mic2, Building2 } from 'lucide-react';

export default function Speakers() {
  const companies = [
    { name: "Spotify", logo: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=200" },
    { name: "PiggyVest", logo: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=200" },
    { name: "MTN", logo: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=200" },
    { name: "McKinsey", logo: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=200" },
    { name: "PaidHR", logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200" },
    { name: "Kredete", logo: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=200" }
  ];

  const speakers = [
    {
      name: "Jola Ayeye",
      nickname: "",
      title: "Tech Entrepreneur",
      image: "../../Images/s1.jpeg"
    },
    {
      name: "Tayo Oviosu",
      nickname: "",
      title: "Fintech Pioneer",
      image: "../../Images/s2.jpeg"
    },
    {
      name: "Tosin Olaseinde",
      nickname: "",
      title: "HR Leader",
      image: "../../Images/s3.jpeg"
    },
    // {
    //   name: "Babajide Duroshola",
    //   nickname: "",
    //   title: "Business Strategist",
    //   image: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=300"
    // },
    {
      name: "Peace Itimi",
      nickname: "",
      title: "Career Coach",
      image: "../../Images/s4.jpeg"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-4  py-3 bg-white rounded border border-gray-300">
              <Mic2 className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-semibold text-gray-900 tracking-wide">SPEAKERS & GUESTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2">
              Learn from Industry Leaders
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Connect with visionaries shaping Africa's tech and career landscape
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-10 text-center">
              Featuring Voices From:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="group relative aspect-square bg-white rounded hover:shadow transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 border-gray-100 hover:border-orange-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="w-12 h-12 mb-3 bg-gradient-to-br from-orange-100 to-rose-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Building2 className="w-6 h-6 text-orange-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-900 text-center">{company.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-orange-50 to-rose-50 rounded border border-orange-200">
                <span className="text-sm font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                  + many more amazing companies
                </span>
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-5xl font-bold mb-2 text-gray-900">
                Meet Your <span className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">Expected Guests</span>
              </h3>
              <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
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
                    <div className="aspect-[3/4] min-h-[300px] relative overflow-hidden">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

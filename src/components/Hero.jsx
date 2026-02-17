import { ArrowRight, MessageSquare } from "lucide-react";
import heroVideo from "../assets/images/tabexecutive.mp4";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-gray-950/55 via-gray-900/35 to-gray-950/55 z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl rounded-2xl bg-black/25 backdrop-blur-[2px] border border-white/15 p-6 md:p-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Luxury Two-Bedroom Executive Apartments in Accra
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Experience refined comfort and modern living at Tab Executive Suite
            — perfectly designed for business travelers, families, and holiday
            makers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
            >
              Book Now
              <ArrowRight size={20} />
            </button>
            <button
              onClick={scrollToContact}
              className="bg-white hover:bg-gray-50 text-gold-700 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
            >
              Make an Enquiry
              <MessageSquare size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent z-20"></div>
    </section>
  );
};

export default Hero;

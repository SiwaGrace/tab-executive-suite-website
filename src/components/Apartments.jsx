import {
  Bed,
  Tv,
  Wifi,
  Wind,
  Waves,
  UtensilsCrossed,
  WashingMachine,
  Armchair,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const imageModules = import.meta.glob("../assets/images/*.jpeg", {
  eager: true,
  import: "default",
});

const getImage = (name) => imageModules[`../assets/images/${name}`];

const apartments = [
  {
    title: "Flat One",
    subtitle: "Executive Two-Bedroom Luxury Apartment",
    description:
      "Experience refined comfort and contemporary elegance in this beautifully designed two-bedroom apartment -- perfect for business travelers and families.",
    images: [
      getImage("interior-living-dining-01.jpeg"),
      getImage("interior-living-room-01.jpeg"),
      getImage("interior-bedroom-01.jpeg"),
      getImage("exterior-balcony-table-01.jpeg"),
    ],
    features: [
      {
        icon: Bed,
        text: "Two spacious executive bedrooms with queen-size beds with premium linens ",
      },
      { icon: Waves, text: "Ensuite bathrooms with instant water heaters" },
      { icon: Tv, text: '50" Smart TV with plush sofa' },
      { icon: Wifi, text: "High-speed Wi-Fi throughout" },
      { icon: Wind, text: "Full air conditioning in all rooms" },
      { icon: UtensilsCrossed, text: "Fully equipped gourmet kitchen" },
      { icon: WashingMachine, text: "Washing machine & laundry essentials" },
      { icon: Armchair, text: "Private balcony with outdoor seating" },
    ],
  },
  {
    title: "Flat Two",
    subtitle: "Premium Two-Bedroom Executive Suite",
    description:
      "A modern, stylish executive suite with luxury finishes and a serene atmosphere.",
    images: [
      getImage("interior-living-dining-02.jpeg"),
      getImage("interior-living-room-tv-01.jpeg"),
      getImage("interior-bedroom-02.jpeg"),
      getImage("exterior-veranda-seating-01.jpeg"),
    ],
    features: [
      { icon: Bed, text: "Two executive suites with premium bedding" },
      { icon: Waves, text: "Modern ensuite bathrooms with heaters" },
      { icon: Tv, text: '50" Flat-screen TV with contemporary sofa' },
      { icon: Wifi, text: "High-speed Wi-Fi connection" },
      { icon: Wind, text: "Air conditioning in all areas" },
      {
        icon: UtensilsCrossed,
        text: "Designer kitchen with full appliances",
      },
      { icon: WashingMachine, text: "Complete laundry amenities" },
      { icon: Armchair, text: "Balcony & porch with dining setup" },
    ],
  },
];

const Apartments = () => {
  const MotionDiv = motion.div;
  const MotionImg = motion.img;
  const [activeSlides, setActiveSlides] = useState(apartments.map(() => 0));
  const [pausedSlides, setPausedSlides] = useState(apartments.map(() => false));
  const [isPageVisible, setIsPageVisible] = useState(
    typeof document === "undefined" ? true : !document.hidden,
  );

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlides((previous) =>
        previous.map((slideIndex, apartmentIndex) =>
          pausedSlides[apartmentIndex] || !isPageVisible
            ? slideIndex
            : (slideIndex + 1) % apartments[apartmentIndex].images.length,
        ),
      );
    }, 4500);

    return () => clearInterval(intervalId);
  }, [pausedSlides, isPageVisible]);

  const changeSlide = (apartmentIndex, step) => {
    setActiveSlides((previous) => {
      const nextSlides = [...previous];
      const totalImages = apartments[apartmentIndex].images.length;
      nextSlides[apartmentIndex] =
        (nextSlides[apartmentIndex] + step + totalImages) % totalImages;
      return nextSlides;
    });
  };

  const setSlidePause = (apartmentIndex, isPaused) => {
    setPausedSlides((previous) => {
      const nextPausedSlides = [...previous];
      nextPausedSlides[apartmentIndex] = isPaused;
      return nextPausedSlides;
    });
  };

  return (
    <section id="apartments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Apartments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our thoughtfully designed executive apartments, each
            offering the perfect blend of luxury and functionality.
          </p>
        </div>

        <div className="space-y-16">
          {apartments.map((apartment, index) => (
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              key={apartment.title}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div
                  className="relative w-full h-96 rounded-2xl shadow-2xl overflow-hidden"
                  onMouseEnter={() => setSlidePause(index, true)}
                  onMouseLeave={() => setSlidePause(index, false)}
                  onTouchStart={() => setSlidePause(index, true)}
                  onTouchEnd={() => setSlidePause(index, false)}
                >
                  <AnimatePresence mode="wait">
                    <MotionImg
                      key={apartment.images[activeSlides[index]]}
                      src={apartment.images[activeSlides[index]]}
                      alt={`${apartment.title} gallery photo ${
                        activeSlides[index] + 1
                      }`}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.985 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-gray-900/70 to-transparent">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {apartment.images.map((_, dotIndex) => (
                          <button
                            type="button"
                            key={dotIndex}
                            onClick={() =>
                              changeSlide(index, dotIndex - activeSlides[index])
                            }
                            aria-label={`Go to image ${dotIndex + 1}`}
                            className={`h-2.5 rounded-full transition-all cursor-pointer ${
                              dotIndex === activeSlides[index]
                                ? "w-7 bg-white"
                                : "w-2.5 bg-white/50 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs sm:text-sm text-white/90">
                        {activeSlides[index] + 1}/{apartment.images.length}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => changeSlide(index, -1)}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/35 text-white backdrop-blur-sm hover:bg-black/50 transition cursor-pointer"
                  >
                    <ChevronLeft size={20} className="mx-auto" />
                  </button>
                  <button
                    type="button"
                    onClick={() => changeSlide(index, 1)}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/35 text-white backdrop-blur-sm hover:bg-black/50 transition cursor-pointer"
                  >
                    <ChevronRight size={20} className="mx-auto" />
                  </button>
                </div>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {apartment.title}
                </h3>
                <p className="text-xl text-gold-600 font-semibold mb-4">
                  {apartment.subtitle}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {apartment.description}
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {apartment.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="bg-gold-100 p-2 rounded-lg shrink-0">
                        <feature.icon className="text-gold-600" size={20} />
                      </div>
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apartments;

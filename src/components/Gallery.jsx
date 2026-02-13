import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const imageModules = import.meta.glob("../assets/images/*.jpeg", {
  eager: true,
  import: "default",
});

const getImage = (name) => imageModules[`../assets/images/${name}`];

const images = [
  {
    src: getImage("exterior-building-facade-02.jpeg"),
    alt: "Building facade",
  },
  {
    src: getImage("exterior-courtyard-wide-01.jpeg"),
    alt: "Courtyard wide view",
  },
  {
    src: getImage("exterior-courtyard-pergola-01.jpeg"),
    alt: "Courtyard pergola",
  },
  {
    src: getImage("exterior-pergola-patio-01.jpeg"),
    alt: "Pergola patio",
  },
  {
    src: getImage("exterior-veranda-corridor-01.jpeg"),
    alt: "Veranda corridor",
  },
  {
    src: getImage("exterior-balcony-table-01.jpeg"),
    alt: "Balcony seating",
  },
  {
    src: getImage("interior-living-dining-01.jpeg"),
    alt: "Living and dining area",
  },
  {
    src: getImage("interior-living-room-tv-01.jpeg"),
    alt: "Living room TV area",
  },
  {
    src: getImage("interior-living-room-02.jpeg"),
    alt: "Living room",
  },
  {
    src: getImage("interior-bedroom-01.jpeg"),
    alt: "Bedroom",
  },
  {
    src: getImage("interior-bedroom-02.jpeg"),
    alt: "Bedroom wardrobe view",
  },
  {
    src: getImage("interior-bedroom-03.jpeg"),
    alt: "Bedroom side view",
  },
];

const Gallery = () => {
  const MotionImg = motion.img;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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
      if (!isPaused && isPageVisible) {
        setActiveIndex((previous) => (previous + 1) % images.length);
      }
    }, 4200);

    return () => clearInterval(intervalId);
  }, [isPaused, isPageVisible]);

  const changeSlide = (step) => {
    setActiveIndex(
      (previous) => (previous + step + images.length) % images.length,
    );
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse of our executive apartments, common areas, and the comfort
            that awaits you.
          </p>
        </div>

        <div className="space-y-6">
          <div
            className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <MotionImg
                key={images[activeIndex].src}
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.65, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-gray-900/75 to-transparent">
              <div className="flex items-center justify-between gap-4">
                <p className="text-white text-sm sm:text-base font-medium truncate">
                  {images[activeIndex].alt}
                </p>
                <span className="text-xs sm:text-sm text-white/90 whitespace-nowrap">
                  {activeIndex + 1}/{images.length}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => changeSlide(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/35 text-white backdrop-blur-sm hover:bg-black/50 transition cursor-pointer"
            >
              <ChevronLeft size={20} className="mx-auto" />
            </button>

            <button
              type="button"
              onClick={() => changeSlide(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/35 text-white backdrop-blur-sm hover:bg-black/50 transition cursor-pointer"
            >
              <ChevronRight size={20} className="mx-auto" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2">
            {images.map((image, index) => (
              <button
                type="button"
                key={image.src}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to ${image.alt}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  index === activeIndex
                    ? "w-7 bg-gold-600"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {images.map((image, index) => (
              <button
                type="button"
                key={image.alt}
                onClick={() => setActiveIndex(index)}
                className={`group relative aspect-4/3 rounded-xl overflow-hidden shadow-md transition-all cursor-pointer ${
                  index === activeIndex
                    ? "ring-2 ring-gold-500 shadow-lg"
                    : "hover:shadow-lg"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const MotionButton = motion.button;
  const MotionDiv = motion.div;
  const MotionNav = motion.nav;
  const MotionSpan = motion.span;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Our Apartments", id: "apartments" },
    { label: "Amenities", id: "amenities" },
    { label: "Gallery", id: "gallery" },
    { label: "Location", id: "location" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="shrink-0">
            <h1 className="text-2xl font-bold text-gold-700">
              TAB EXECUTIVE SUITE
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-gold-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <MotionButton
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.92 }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <MotionSpan
                key={isMobileMenuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="block"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </MotionSpan>
            </AnimatePresence>
          </MotionButton>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <MotionDiv
            className="md:hidden bg-white border-t overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <MotionNav
              className="px-4 py-4 space-y-3"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.06 },
                },
              }}
            >
              {menuItems.map((item) => (
                <MotionButton
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-700 hover:text-gold-600 transition-colors font-medium py-2"
                  variants={{
                    hidden: { y: -8, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {item.label}
                </MotionButton>
              ))}
            </MotionNav>
          </MotionDiv>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

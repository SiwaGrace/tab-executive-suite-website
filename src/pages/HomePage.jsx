import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import PropertyOverview from "../components/PropertyOverview.jsx";
import ApartmentsSection from "../components/ApartmentsSection.jsx";
import GallerySection from "../components/GallerySection.jsx";
import AmenitiesSection from "../components/AmenitiesSection.jsx";
import GuestExperience from "../components/GuestExperience.jsx";
import LocationSection from "../components/LocationSection.jsx";
import ContactSection from "../components/ContactSection.jsx";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PropertyOverview />
      <ApartmentsSection />
      <GallerySection />
      <AmenitiesSection />
      <GuestExperience />
      <LocationSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;

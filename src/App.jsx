import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Property from "./components/Property";
import Apartments from "./components/Apartments";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Property />
      <Apartments />
      <Amenities />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

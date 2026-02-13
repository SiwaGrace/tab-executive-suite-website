import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">TAB EXECUTIVE SUITE</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Premium furnished apartments in Accra, Ghana. Experience luxury
              living with world-class amenities and exceptional service.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-gold-600 p-2 rounded-lg transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gold-600 p-2 rounded-lg transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gold-600 p-2 rounded-lg transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("apartments")}
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Our Apartments
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("amenities")}
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={18} />
                <span>info@tabexecutivesuite.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={18} />
                <span>+233 550733347</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Tab Executive Suite. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

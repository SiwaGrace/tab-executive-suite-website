import { Heart, Shield, Home, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Tab Executive Suite is a premier Ghanaian real estate company
              dedicated to providing exceptional fully furnished property units
              for Ghanaians, expatriates, residents abroad, and holiday-makers.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-gold-100 p-2 rounded-lg">
                  <Heart className="text-gold-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    High-Quality Customer Service
                  </h3>
                  <p className="text-gray-600">
                    Dedicated to exceeding your expectations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-gold-100 p-2 rounded-lg">
                  <Shield className="text-gold-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Security and Comfort
                  </h3>
                  <p className="text-gray-600">
                    Your safety is our top priority
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-gold-100 p-2 rounded-lg">
                  <Home className="text-gold-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Welcoming Environment
                  </h3>
                  <p className="text-gray-600">
                    A home-like atmosphere that makes you feel like family
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern living room"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="bg-linear-to-br from-gray-50 to-gold-50 rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-gold-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Tab Executive Suite, our vision is to connect every client with a
            community that resonates with their lifestyle and a home that fits
            their budget and expectations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            We believe happy residents create strong communities — and that is
            at the heart of everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

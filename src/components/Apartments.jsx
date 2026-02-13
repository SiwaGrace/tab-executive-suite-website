import {
  Bed,
  Tv,
  Wifi,
  Wind,
  Waves,
  UtensilsCrossed,
  WashingMachine,
  Armchair,
} from "lucide-react";
import { motion } from "framer-motion";

const Apartments = () => {
  const apartments = [
    {
      title: "Flat One",
      subtitle: "Executive Two-Bedroom Luxury Apartment",
      description:
        "Experience refined comfort and contemporary elegance in this beautifully designed two-bedroom apartment — perfect for business travelers and families.",
      image:
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      image:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              key={index}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={apartment.image}
                  alt={apartment.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apartments;

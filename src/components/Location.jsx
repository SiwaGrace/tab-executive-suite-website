import { MapPin, Clock } from "lucide-react";

const Location = () => {
  const nearbyPlaces = [
    { name: "Dansoman KFC", time: "2 minutes" },
    { name: "Korle Bu Teaching Hospital", time: "10 minutes" },
    { name: "Central Business District", time: "15 minutes" },
    { name: "West Hills Mall", time: "25 minutes" },
    { name: "Accra Mall", time: "30 minutes" },
    { name: "Kotoka International Airport", time: "30 minutes" },
  ];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Prime Location
          </h2>
          <div className="flex items-center justify-center gap-2 text-xl text-gold-600 font-semibold">
            <MapPin size={24} />
            <span>Dansoman-Asoredenho, Accra</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Perfectly Located
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Enjoy easy access to key destinations in Accra. Our strategic
              location puts you close to shopping centers, hospitals, business
              districts, and the airport.
            </p>
            <div className="space-y-4">
              {nearbyPlaces.map((place, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 rounded-lg p-4 hover:bg-gold-50 transition-colors"
                >
                  <span className="text-gray-900 font-medium">
                    {place.name}
                  </span>
                  <div className="flex items-center gap-2 text-gold-600">
                    <Clock size={18} />
                    <span className="font-semibold">{place.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Find Us on Google Maps
            </h3>
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3970.9745617682242!2d-0.261057325014759!3d5.570778794409771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzQnMTQuOCJOIDDCsDE1JzMwLjUiVw!5e0!3m2!1sen!2sgh!4v1770987974332!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tab Executive Suite Location"
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Click to view interactive map and get directions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

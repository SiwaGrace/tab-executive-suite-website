import { Camera, ShieldCheck, Zap, Droplets, Wifi, Tv, ParkingCircle, WashingMachine, Sparkles, Wind, MonitorPlay } from 'lucide-react';

const Amenities = () => {
  const buildingAmenities = [
    { icon: Camera, title: '24/7 CCTV Surveillance', description: 'Round-the-clock security monitoring' },
    { icon: ShieldCheck, title: '24/7 Security Guard', description: 'Onsite security personnel' },
    { icon: Zap, title: 'Standby Generator', description: 'Uninterrupted power supply' },
    { icon: Droplets, title: 'Free Water Supply', description: 'With reservoir backup' },
    { icon: Wifi, title: 'High-Speed Internet', description: 'Complimentary Wi-Fi access' },
    { icon: Tv, title: 'Free DSTV', description: 'Premium entertainment channels' },
    { icon: ParkingCircle, title: 'Allocated Parking', description: 'Dedicated parking spaces' },
    { icon: WashingMachine, title: 'Laundry Service', description: 'Convenient laundry facilities' },
    { icon: Sparkles, title: 'Cleaning Service', description: 'Complimentary housekeeping' },
  ];

  const roomFeatures = [
    { icon: Wind, title: 'Air Conditioning', description: 'Climate control with fans' },
    { icon: MonitorPlay, title: '50" Smart TV', description: 'In all rooms' },
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-to-br from-gray-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Amenities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enjoy world-class facilities designed to make your stay comfortable and convenient.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Building Amenities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {buildingAmenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-100 rounded-full mb-4">
                  <amenity.icon className="text-gold-600" size={28} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{amenity.title}</h4>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">In-Room Features</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {roomFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-100 rounded-full mb-4">
                  <feature.icon className="text-gold-600" size={28} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;

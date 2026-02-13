import { Building2, DoorOpen, Layers, ParkingCircle } from 'lucide-react';

const Property = () => {
  const stats = [
    { icon: DoorOpen, label: 'Total Rooms', value: '12' },
    { icon: Layers, label: 'Floors', value: '2' },
    { icon: ParkingCircle, label: 'Parking Spaces', value: '12' },
    { icon: Building2, label: 'Apartments', value: '4' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About The Property</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tab Executive Suite features 4 fully furnished two-bedroom executive apartments designed for comfort, elegance, and convenience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-4">
                <stat.icon className="text-gold-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <p className="text-lg text-gray-700 text-center">
            Ideal for <span className="font-semibold text-gold-600">short stays</span>, <span className="font-semibold text-gold-600">long stays</span>, and <span className="font-semibold text-gold-600">corporate guests</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Property;

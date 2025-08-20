import { Utensils, Users, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Utensils,
    title: 'Exquisite Cuisine',
    description: 'Delectable dishes crafted with premium ingredients and culinary expertise.',
  },
  {
    icon: Users,
    title: 'Professional Staff',
    description: 'Experienced team dedicated to delivering exceptional service.',
  },
  {
    icon: Clock,
    title: 'Timely Service',
    description: 'Punctual and efficient service that keeps your event running smoothly.',
  },
  {
    icon: Award,
    title: 'Custom Menus',
    description: 'Personalized menus tailored to your preferences and dietary requirements.',
  },
];

export function FeaturesSection() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#532516] mb-4">
            Why Choose Liyu Catering ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We bring together exceptional cuisine and outstanding service to make your
            events truly memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#E8982E]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <feature.icon className="w-6 h-6 text-[#E8982E]" />
              </div>
              <h3 className="text-xl font-semibold text-[#532516] mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
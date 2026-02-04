import React from 'react';
import { ShieldCheck, Zap, Globe, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-blue-600" size={32} />,
      title: "Secure Bookings",
      description: "Your data and payments are protected by industry-leading encryption and security protocols."
    },
    {
      icon: <Zap className="text-blue-600" size={32} />,
      title: "Instant Confirmation",
      description: "No more waiting. Get your booking confirmation sent to your inbox within seconds."
    },
    {
      icon: <Globe className="text-blue-600" size={32} />,
      title: "Worldwide Reach",
      description: "Access over 1 million stays across 200 countries, from luxury resorts to cozy cabins."
    },
    {
      icon: <Headphones className="text-blue-600" size={32} />,
      title: "24/7 Support",
      description: "Our dedicated travel experts are always available to help you with any queries or changes."
    }
  ];

  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Why Choose <span className="text-blue-600">SwiftStay?</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide a seamless and trustworthy experience so you can focus on making memories, not managing logistics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

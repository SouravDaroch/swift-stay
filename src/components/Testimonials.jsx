import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Saurabh Verma",
    role: "Software Engineer @ Google",
    content: "Moving to Hinjewadi, Pune was stressful until I found SwiftStay. I booked a 2BHK without visiting in person, and it was exactly as shown. Zero brokerage saved me ₹25,000!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Ananya Iyer",
    role: "Product Designer",
    content: "The interface is so smooth. I loved the verified photos and the neighborhood insights for Gachibowli. It’s the Airbnb of long-term stays in Hyderabad.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Rohan Mehra",
    role: "Tech Lead @ Zomato",
    content: "SwiftStay is a game changer. No more dealing with pushy brokers. The 'Ready to Move' filter actually works. Highly recommended for IT professionals.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/85.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Community Voices</span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            Trusted by 10,000+ <br className="md:hidden" /> Professionals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow relative">
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 right-8 text-blue-50/50" size={60} />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} 
                    />
                  ))}
                </div>

                <p className="text-gray-600 italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-50"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 leading-none">{t.name}</h4>
                    <p className="text-xs text-gray-400 mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import { ArrowRight } from 'lucide-react';
import PropertyCard from './PropertyCard';
import { PROPERTIES_DATA } from '../data/properties';
import {Link} from "react-router"

const FeaturedStays = () => {
  // We only show the first 3 properties on the landing page
  const featured = PROPERTIES_DATA.slice(0, 3);

  return (
    <section className="py-18 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">
            Handpicked for you
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
            Featured Stays in <span className="text-blue-600">Pune & Hyd</span>
          </h2>
        </div>
        
        <Link 
  to="/properties" className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all group">
          Explore All Properties <ArrowRight size={20} />
        </Link>
      </div>

      {/* Property Grid */}
      <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((item) => (
          <PropertyCard key={item.id} property={item} />
        ))}
      </div>
   </section>
  );
};

export default FeaturedStays;
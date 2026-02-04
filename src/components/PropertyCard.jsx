import React from 'react';
import { MapPin, Bed, Maximize, Star } from 'lucide-react';
import { formatPrice } from '../utils/formatPrice';

const PropertyCard = ({ property }) => {
  return (
    <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-600">
            {property.type}
          </span>
          {property.isReady && (
            <span className="bg-green-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
              Ready to Move
            </span>
          )}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-black text-gray-900 leading-none">
            {formatPrice(property.price)}
          </h3>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg text-yellow-600 font-bold text-xs">
            <Star size={14} fill="currentColor" />
            {property.rating}
          </div>
        </div>

        <p className="text-gray-800 font-bold text-lg mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {property.title}
        </p>

        <div className="flex items-center text-gray-400 text-sm mb-6">
          <MapPin size={16} className="mr-1 text-blue-500" />
          {property.location}
        </div>

        {/* Specs Divider */}
        <div className="flex items-center justify-between pt-5 border-t border-gray-50">
          <div className="flex items-center gap-2 text-gray-600 font-semibold text-sm">
            <div className="p-1.5 bg-gray-50 rounded-lg"><Bed size={16} /></div>
            {property.bhk} BHK
          </div>
          <div className="flex items-center gap-2 text-gray-600 font-semibold text-sm">
            <div className="p-1.5 bg-gray-50 rounded-lg"><Maximize size={16} /></div>
            {property.area} sqft
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
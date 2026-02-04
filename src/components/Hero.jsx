import React from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import SearchBar from './SearchBar';
const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 1. Background Image with Gradient Overlay */}
      <div className="absolute  inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover"
          alt="Luxury Home"
        />
        {/* Dark overlay to make white text readable */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/60"></div>
      </div>

      {/* 2. Hero Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center">
    
        
        <h1 className="pt-10 pl-4 pr-4 pb-2 text-4xl md:text-7xl font-extrabold text-white md:mb-6 tracking-tight">
          Modern Living in <br />
          <span className="text-blue-400">Pune & Hyderabad</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
          Discover hand-picked premium properties near major IT hubs. 
          Verified listings, zero brokerage, total peace of mind.
        </p>

        {/* 3. The Glassmorphism Search Bar */}
       <SearchBar />

        {/* 4. Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-70">
          <div className="flex items-center gap-2 text-white">
            <span className="text-2xl font-bold">10k+</span>
            <span className="text-[10px] uppercase leading-tight text-left">Verified<br/>Properties</span>
          </div>
          <div className="w-px h-8 bg-white/20 hidden md:block"></div>
          <div className="flex items-center gap-2 text-white">
            <span className="text-2xl font-bold">0%</span>
            <span className="text-[10px] uppercase leading-tight text-left">Brokerage<br/>Fee</span>
          </div>
          <div className="w-px h-8 bg-white/20 hidden md:block"></div>
          <div className="flex items-center gap-2 text-white">
            <span className="text-2xl font-bold">4.9/5</span>
            <span className="text-[10px] uppercase leading-tight text-left">User<br/>Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Filter, X,Search } from 'lucide-react';
import { PROPERTIES_DATA } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar'; // Import your new component
import FilterSideBar from '../components/FilterSideBar';

const AllProperties = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //  Extract values from URL (The Source of Truth)
  const cityQuery = searchParams.get('city') || 'all';
  const typeQuery = searchParams.get('type') || 'all';

  const bhkQuery = searchParams.get('bhk') || 'all';

  //  Filter Logic (Reacts to URL changes automatically)
  const filteredList = PROPERTIES_DATA.filter(property => {
    const matchCity = cityQuery === 'all' || property.city.toLowerCase() === cityQuery.toLowerCase();
    const matchType = typeQuery === 'all' || property.type.toLowerCase() === typeQuery.toLowerCase();

    const matchBHK = bhkQuery === 'all' || property.bhk === parseInt(bhkQuery);
    return matchCity && matchType && matchBHK;
  });

  // Always scroll to top on filter change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cityQuery, typeQuery,]);

  return (
    <div className="pt-5 min-h-screen bg-gray-50">

      {/* 1. Global Search Header */}
      <div className=" border-b border-gray-100 p-5 px-6 ">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xs font-bold uppercase text-blue-600 tracking-widest mb-4">
            Find your next stay
          </h2>
          <SearchBar />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">

<FilterSideBar/>

          {/* 3. RIGHT: Results Grid */}
          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-500 font-medium">
                Showing <span className="text-gray-900 font-bold">{filteredList.length}</span> properties
                {cityQuery !== 'all' && <span> in <span className="capitalize text-blue-600">{cityQuery}</span></span>}
              </p>
            </div>

            {filteredList.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredList.map(item => (
                  <PropertyCard key={item.id} property={item} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-[3rem] p-20 text-center border-2 border-dashed border-gray-200">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                  <Search size={40} />
                </div>
                <h3 className="text-2xl font-black text-gray-900">No properties match your search</h3>
                <p className="text-gray-500 mt-2 max-w-xs mx-auto">Try selecting a different city or removing filters to see more options.</p>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
};

export default AllProperties;
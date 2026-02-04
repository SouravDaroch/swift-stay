import React from 'react';
import { useSearchParams } from 'react-router';
import { Filter } from 'lucide-react';

const FilterSideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Helper to update individual params without losing others
  const updateFilters = (key, value) => {
    const params = Object.fromEntries([...searchParams]);
    if (value === 'all') {
      delete params[key];
    } else {
      params[key] = value;
    }
    setSearchParams(params);
  };

  const currentCity = searchParams.get('city') || 'all';
  const currentBhk = searchParams.get('bhk') || 'all';

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 lg:sticky lg:top-28 lg:max-h-[calc(100vh-120px)] overflow-y-auto group [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-transparent group-hover:[&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full">
        
        <div className="flex items-center gap-2 font-bold text-gray-900 mb-6">
          <Filter size={18} />
          <span>Refine Results</span>
        </div>

        {/* City Filter */}
        <div className="mb-8">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">City</label>
          <div className="mt-3 flex flex-col gap-2">
            {['all', 'pune', 'hyderabad'].map(city => (
              <button 
                key={city}
                onClick={() => updateFilters('city', city)}
                className={`text-left px-4 py-2 rounded-xl text-sm font-bold ${currentCity === city ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                {city.charAt(0).toUpperCase() + city.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* BHK Filter */}
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Rooms</label>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {['all', '1', '2', '3'].map(num => (
              <button 
                key={num}
                onClick={() => updateFilters('bhk', num)}
                className={`p-2 border rounded-xl text-xs font-bold ${currentBhk === num ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-100 text-gray-500'}`}
              >
                {num === 'all' ? 'All' : `${num} BHK`}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSideBar;
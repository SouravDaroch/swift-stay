import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, MapPin, LayoutGrid } from 'lucide-react';

const SearchBar = () => {
  // local states 
  const [city, setCity] = useState('all');
  const [type, setType] = useState('all');
  const navigate = useNavigate();

  // filtering dependent on states 
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (city !== 'all') params.append('city', city.toLowerCase());
    if (type !== 'all') params.append('type', type.toLowerCase());

    const queryString = params.toString();
    navigate(queryString ? `/properties?${queryString}` : '/properties');
  };

  return (
    <div className="flex flex-col md:flex-row bg-white p-2 rounded-2xl md:rounded-full shadow-2xl w-full max-w-4xl mx-auto border border-gray-100">
      {/* City Dropdown */}
      <div className="flex items-center flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
        <MapPin className="text-blue-600 mr-2" size={20} />
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full bg-transparent outline-none font-semibold text-gray-700 cursor-pointer"
        >
          <option value="all">Select City</option>
          <option value="pune">Pune</option>
          <option value="hyderabad">Hyderabad</option>
        </select>
      </div>

      {/* Property Type (Optional placeholder) */}
      <div className="hidden md:flex items-center flex-1 px-4 py-3 border-r border-gray-100">
        <LayoutGrid className="text-blue-600 mr-2" size={20} />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full bg-transparent outline-none font-semibold text-gray-700 cursor-pointer">
          <option value={"all"}>Property Type</option>
          <option value={"apartment"}>Apartment</option>
          <option value={"villa"}>Villa</option>
          <option value={"Studio"}>Studio</option>
        </select>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl md:rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
      >
        <Search size={20} />
        <span>Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
import React from 'react';
import { Autocomplete } from '@react-google-maps/api';

const Header = ({ onPlaceChanged, onLoad }) => {
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-white text-2xl sm:hidden">Travel Advisor</h1>
          <h1 className="hidden sm:inline-block text-white text-2xl">Travel Advisor</h1>
          <div className="flex items-center">
            <h2 className="text-white text-lg">Explore new places</h2>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <div className="relative ml-3">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="text-gray-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
                <input
                  className="pl-10 pr-2 py-1 transition-all w-64 bg-opacity-50 focus:bg-opacity-75 focus:outline-none text-black"
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </Autocomplete>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

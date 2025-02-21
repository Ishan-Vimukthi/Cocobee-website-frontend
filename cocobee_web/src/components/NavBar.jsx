import React, { useState } from 'react';
import logo from '../assets/Logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-25">
          <div className="flex items-center">
           <img src={logo} alt="Cocobee" className="h-22 w-40" />
          </div>
          <div className="hidden md:flex space-x-4 ">
            <a href="menu" className="text-gray-700 hover:text-gray-900">Menu</a>
            <a href="outlets" className="text-gray-700 hover:text-gray-900">Outlets</a>
            <a href="abouteus" className="text-gray-700 hover:text-gray-900">About Us</a>
            <a href="contact" className="text-gray-700 hover:text-gray-900">Contact Us</a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="menu" className="block text-gray-700 hover:text-gray-900">Menu</a>
            <a href="outlets" className="block text-gray-700 hover:text-gray-900">Outlets</a>
            <a href="abouteus" className="block text-gray-700 hover:text-gray-900">About Us</a>
            <a href="contact" className="block text-gray-700 hover:text-gray-900">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
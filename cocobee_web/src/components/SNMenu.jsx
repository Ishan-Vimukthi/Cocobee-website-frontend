import React from 'react';

const SNMenu = () => {
  return (
    <div className="relative w-full">
      {/* Image for Sub Navbar */}
      <img 
        src='/subnav.png' 
        alt='Sub Navbar' 
        className='w-full h-auto object-cover' // Added object-cover for responsive image scaling
      />
      
      {/* Overlay text */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-primary font-bold text-center">
          OUR MENU
        </h1>
      </div>
    </div>
  );
};

export default SNMenu;

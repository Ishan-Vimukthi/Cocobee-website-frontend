import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SNOulets from '../components/SNOulets';
import TextinOutlets from '../components/TextinOutlets';

const outlets = [
  { name: "PETTAH", address: "192, 2nd Cross St. Colombo 11", phone: "011 - 264 3659" },
  { name: "KOCHCHIKADE", address: "19, Jampettah Rd. Colombo 11", phone: "011 - 264 3659" },
  { name: "ONE GALLE FACE", address: "192, 2nd Floor. Colombo 11", phone: "011 - 264 3659" },
  { name: "HAVELOCK", address: "192, 2nd Floor. Colombo 11", phone: "011 - 264 3659" }
];

const Outlets = () => {
  return (
    <div>
      <NavBar />
      <SNOulets />
      <TextinOutlets />
      <div className="container mx-auto px-4 py-10 flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {outlets.map((outlet, index) => (
            <div key={index} className="flex items-start space-x-4">
              <img src="/Route.png" alt="Location icon" className="w-10 h-10 mt-1" />
              <div>
                <h2 className="text-[#3FBFCA] font-bold text-xl">{outlet.name}</h2>
                <p className="text-gray-700">{outlet.address}</p>
                <p className="text-gray-700">MON - SUN : 10 AM - 10 PM</p>
                <div className="flex items-center space-x-2 mt-1">
                  <img src="/call.png" alt="Phone icon" className="w-5 h-5" />
                  <span className="text-gray-700">{outlet.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Outlets;

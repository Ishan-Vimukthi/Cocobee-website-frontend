import React from 'react'; 
import SNContactus from '../components/SNContactus';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TextinContactUs from '../components/TextinContactUs';

const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <SNContactus />
      <TextinContactUs />

      <div className="container mx-auto px-4 py-10">
        <div className="max-w-lg mx-auto space-y-6">
          
          {/* Address Section (With Icon) */}
          <div className="flex items-start">
            <img src="/Route.png" alt="Location icon" className="w-10 h-10 mt-1" />
            <div className="ml-4"> 
              <h2 className="text-[#3FBFCA] font-bold text-lg">ADDRESS</h2>
              <p className="text-gray-700 font-bold">145/5, Quarry Road, Dehiwala</p>
            </div>
          </div>

          {/* Hotline Section (Phone Icons for Each Number) */}
          <div className="flex items-start">
            <div className="ml-14"> {/* Aligned with Address text */}
              <h2 className="text-[#3FBFCA] font-bold text-lg">HOTLINE</h2>
              <p className="text-gray-700 font-bold flex items-center">
                <img src="/call.png" alt="Phone icon" className="w-5 h-5 mr-2" />
                077 430 2838
              </p>
              <p className="text-gray-700 font-bold flex items-center">
                <img src="/call.png" alt="Phone icon" className="w-5 h-5 mr-2" />
                075 620 8451
              </p>
            </div>
          </div>

          {/* Email Section (No Icon) */}
          <div className="flex items-start">
            <div className="ml-14"> {/* Aligned with Address text */}
              <h2 className="text-[#3FBFCA] font-bold text-lg">E-MAIL</h2>
              <p className="text-gray-700 font-bold">info@mrcocobee.com</p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;

import React from 'react';
import { motion } from 'framer-motion';

const WelcomeText = () => {
  return (
    <div className="p-6 flex flex-col items-center text-center font-primary font-extrabold">
      <motion.h3 
        className="text-[#3FBFCA] text-lg md:text-xl lg:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        WELCOME TO MR.COCOBEE
      </motion.h3>
      <motion.p 
        className="text-[#71B743] text-base md:text-lg lg:text-xl mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}  // Delay the fade-in for the paragraph
      >
        TO INSPIRE TO OFFER A HEALTHY FOOD AND LIFESTYLE CHOICE FOR EVERYONE
      </motion.p>
    </div>
  );
};

export default WelcomeText;

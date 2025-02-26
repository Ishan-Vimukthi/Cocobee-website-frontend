import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MiddleText = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the element is in view
    threshold: 0.5,    // Element needs to be at least 50% visible to trigger animation
  });

  return (
    <div
      ref={ref}
      className="p-6 lg:pt-15 sm:pt-5 md:pt-10 flex flex-col text-center justify-center font-primary font-extrabold"
    >
      <motion.h1
        className="text-[#3FBFCA] sm:text-lg md:text-2xl lg:text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        JOIN OUR MR.COCOBEE LOYALTY
      </motion.h1>
      <motion.h1
        className="text-[#71B743] sm:text-lg md:text-2xl lg:text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }} // Delay for second text
      >
        FAMILY TODAY!
      </motion.h1>
    </div>
  );
};

export default MiddleText;

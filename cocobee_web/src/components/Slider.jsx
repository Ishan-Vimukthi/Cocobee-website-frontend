// import React from 'react'
// import { useState, useEffect } from 'react'
// import image1 from '../assets/Sliders/1.jpg'
// import image2 from '../assets/Sliders/2.jpg'
// import image3 from '../assets/Sliders/4.jpg'

// const images = [image1, image2, image3];


// const Slider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide functionality
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 3000); // Change slide every 3 seconds

//             return () => clearInterval(intervalId); // Cleanup interval on unmount
//      }, []);

//   return (
//     <div className="relative w-full h-96 overflow-hidden">
//       {/* Slider container */}
//       <div className="flex transition-transform duration-500 ease-in-out"
//            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//         {images.map((image, index) => (
//           <div key={index} className="w-full flex-shrink-0">
//             <img src={image}
//                  alt={`Slide ${index + 1}`}
//                  className="w-full h-96 object-cover" />
//           </div>
//         ))}
//       </div>

//       {/* Navigation dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-3 h-3 rounded-full ${
//                     currentIndex === index ? "bg-white" : "bg-gray-400"
//                   }`} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Slider

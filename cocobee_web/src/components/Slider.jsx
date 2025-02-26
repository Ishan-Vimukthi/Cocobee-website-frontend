import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "../src/assets/Sliders/1.png",
  "../src/assets/Sliders/2.png",
  "../src/assets/Sliders/4.png",
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen max-w-full mx-auto">
      {/* Image Wrapper */}
      <div className="w-full h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[550px] overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out"
        />
      </div>

      {/* Left Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-opacity-50 p-3 rounded-full text-white sm:p-4 md:p-5 lg:p-6"
        onClick={prevSlide}
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-opacity-50 p-3 rounded-full text-white sm:p-4 md:p-5 lg:p-6"
        onClick={nextSlide}
      >
        <FaChevronRight size={20} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

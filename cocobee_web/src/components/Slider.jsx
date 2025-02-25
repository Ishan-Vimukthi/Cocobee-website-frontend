import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  '../src/assets/Sliders/1.png',
  '../src/assets/Sliders/2.png',
  '../src/assets/Sliders/4.png',
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
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden w-screen max-w-7xl mx-auto">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="w-full h-120 object-cover transition-all duration-1000 ease-in-out"
        />
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-opacity-50 p-2 rounded-full text-white"
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-opacity-50 p-2 rounded-full text-white"
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>
      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}

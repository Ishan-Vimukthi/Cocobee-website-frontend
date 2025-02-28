import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/Logo.png";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-25">
          <div className="flex items-center">
            <a href="/">
              <img src={logo} alt="Cocobee" className="h-22 w-40" />
            </a>
          </div>
          <div className="hidden md:flex flex-grow justify-center space-x-4 font-primary font-bold text-lg">
            <a
              href="/menu" // Changed href
              className={` ${
                location.pathname.includes("menu") ? "text-[#3FBFCA] border-b-4" : "text-gray-700 relative hover:text-[#3FBFCA] hover:border-b-4"
              }`}
            >
              Menu
              <div
                className={`absolute bottom-0 left-0 ${
                  activeLink === "menu" ? "w-full" : "w-0"
                } transition-all duration-300 h-2 bg-[#3FBFCA]`}
              />
            </a>
            <a
              href="/outlets" // Changed href
              className={` ${
                location.pathname.includes("outlets") ? "text-[#3FBFCA] border-b-4" : "text-gray-700 relative hover:text-[#3FBFCA] hover:border-b-4"
              }`}
            >
              Outlets
              <div
                className={`absolute bottom-0 left-0 ${
                  activeLink === "outlets" ? "w-full" : "w-0"
                } transition-all duration-300 h-2 bg-[#3FBFCA]`}
              />
            </a>
            {/* <a
              href="/abouteus" // Changed href
              className={` ${
                location.pathname.includes("abouteus") ? "text-[#3FBFCA] border-b-4" : "text-gray-700 relative hover:text-[#3FBFCA] hover:border-b-4"
              }`}
            >
              About Us
              <div
                className={`absolute bottom-0 left-0 ${
                  activeLink === "abouteus" ? "w-full" : "w-0"
                } transition-all duration-300 h-2 bg-[#3FBFCA]`}
              />
            </a> */}
            <a
              href="/contact" // Changed href
              className={` ${
                location.pathname.includes("contact") ? "text-[#3FBFCA] border-b-4" : "text-gray-700 relative hover:text-[#3FBFCA] hover:border-b-4"
              }`}
            >
              Contact Us
              <div
                className={`absolute bottom-0 left-0 ${
                  activeLink === "contact" ? "w-full" : "w-0"
                } transition-all duration-300 h-2 bg-[#3FBFCA]`}
              />
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <a
                href="https://www.facebook.com/share/155Y54RLUe/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#71B743] hover:text-[#3FBFCA]"
              >
                <FaFacebook className="w-6 h-6"
              />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#71B743] hover:text-[#3FBFCA]"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#71B743] hover:text-[#3FBFCA]"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-primary font-bold text-lg text-center flex flex-col">
            <a
              href="/menu" // Changed href
              className={` ${
                location.pathname.includes("menu") ? "text-[#3FBFCA] border-b-4" : "text-gray-700 relative hover:text-[#3FBFCA] hover:border-b-4"
              }`}
            >
              Menu
              <div
                className={`absolute bottom-0 left-0 ${
                  activeLink === "menu" ? "w-full" : "w-0"
                } transition-all duration-300 h-2 bg-[#3FBFCA]`}
              />
            </a>
            <a
              href="/outlets" // Changed href
              className={` ${
                location.pathname.includes("outlets") ? "text-[#3FBFCA] border-b-4" : "text-gray-700 relative hover:text-[#3FBFCA] hover:border-b-4"
              }`}
            >
              Outlets
              <div
                className={`absolute bottom-0 left-0 ${
                  activeLink === "outlets" ? "w-full" : "w-0"
                } transition-all duration-300 h-2 bg-[#3FBFCA]`}
              />
            </a>
            {/* <a
              href="/abouteus" // Changed href
              className={` ${
                location.pathname.includes("abouteus") ? "text-[#3FBFCA] border-b-4" : "text-gray-700 relative hover:text-[#3FBFCA] hover:border-b-4"
              }`}
            >
              About Us
              <div
                className={`absolute bottom-0 left-0 ${
                  activeLink === "abouteus" ? "w-full" : "w-0"
                } transition-all duration-300 h-2 bg-[#3FBFCA]`}
              />
            </a> */}
            <a
              href="/contact" // Changed href
              className={` ${
                location.pathname.includes("contact") ? "text-[#3FBFCA] border-b-4" : "text-gray-700 relative hover:text-[#3FBFCA] hover:border-b-4"
              }`}
            >
              Contact Us
              <div
                className={`absolute bottom-0 left-0 ${
                  activeLink === "contact" ? "w-full" : "w-0"
                } transition-all duration-300 h-2 bg-[#3FBFCA]`}
              />
            </a>
            <div className="flex space-x-4 mt-2 items-center justify-center">
              <a
                href="https://www.facebook.com/share/155Y54RLUe/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#71B743] hover:text-[#3FBFCA]"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#71B743] hover:text-[#3FBFCA]"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#71B743] hover:text-[#3FBFCA]"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavBar;

import React from 'react'
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    
    <div className="relative w-full h-[450px] bg-cover bg-center"
      style={{ backgroundImage: "url('/Footer.png')" }}>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center h">
        <h3 className="text-lg font-bold">FAQs</h3>
        
        {/* Social Icons */}
        <div className="flex gap-6 mt-4">
          <FaFacebook className="w-6 h-6" />
          <FaTiktok className="w-6 h-6" />
          <FaInstagram className="w-6 h-6" />
        </div>

        {/* Copyright */}
        <p className="mt-4 text-xs">
          © COPYRIGHT 2025 YI HAI CENTURY ENTERPRISE PTE LTD. ALL RIGHTS RESERVED.
        </p>
        <p className="text-xs underline">WEBSITE BY CREATIVE EWORLD PTE LTD</p>
      </div>

    </div>
  )
}

export default Footer

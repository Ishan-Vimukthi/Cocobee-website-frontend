import React from 'react'
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <img src='/Footer.png' alt='Footer' className='w-full h-10 lg:h-30' />
      <div className="bg-[#3FBFCA] text-white h-40 flex-col justify-center items-center">

       {/* Social Icons */}
       <div className="flex gap-4 justify-center items-center">
          <a href='https://www.facebook.com/share/155Y54RLUe/?mibextid=wwXIfr' target="_blank" rel="noopener noreferrer"><FaFacebook className="w-6 h-6" /></a>
          <a href=''><FaTiktok className="w-6 h-6" /></a>
          <a href=''><FaInstagram className="w-6 h-6" /></a>
        </div>

      {/* Copyright */}
         <p className="text-lg p-2 text-center">
           © COPYRIGHT 2025 COCOBEE PVT LTD. ALL RIGHTS RESERVED. 
         </p>
        
       </div>
      
    </footer>
  
  )
}

export default Footer

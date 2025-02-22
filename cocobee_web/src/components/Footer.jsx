import React from 'react'
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative">
        <div className="relative flex justify-center items-center">
            <img src='./Footer.png'/>
            <div className='absolute inset-0 flex justify-center items-center pt-20'>
            <p className='text-white font-extrabold pr-10 text-2xl'>FAQS</p>
            <a href='https://www.tiktok.com/' target='_blank' rel='noreferrer'><FaTiktok className='text-white text-2xl mx-2'/></a>
            <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'><FaFacebook className='text-white text-2xl mx-2'/></a>
            <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'><FaInstagram className='text-white text-2xl mx-2'/></a>
            <p className='text-white pl-10'>© 2021 MR.COCOBEE. ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer

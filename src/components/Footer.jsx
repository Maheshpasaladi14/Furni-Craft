import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=' h-[250px] w-full px-4 bg-primary items-center justify-between
    gap-10 flex '>
      <div className='  flex items-center justify-around '>
        <div className=' flex flex-col'  >
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link to="/">

              <span className=' text-5xl 
          font-bold font-protest text-white'>Furni Craft</span>
            </Link>
          </motion.div>

        </div>
      </div>
      <div className=' flex flex-col mt-6 text-center text-white'>
        <h1>Top Categories</h1>
        <a href="/">Chairs</a>
        <a href="/">Sofa</a>
        <a href="/">Mobiles</a>
        <a href="/">Watches</a>
      </div>
      <div className=' flex flex-col mb-4 text-white'>
        <h2>Follow Us</h2>
        <div className=' flex gap-7 text-3xl text-white'>
          <FaFacebook />
          <FaLinkedin />
          <FaInstagramSquare />
        </div>
      </div>
      <div className='flex flex-col text-white mb-4'>
        <h1>Contact Us</h1>
        <span>support@gmail.com</span>
        <span>Mobile: +91 987654321</span>
      </div>
      <div className='flex flex-col gap-10  ' >
        <div className=' flex items-center gap-4 ml-24  '>
          <FaGooglePlay className='text-6xl' />
          <FaApple className=' text-6xl' />
        </div>

        <span className=' flex items-center justify-end px-20 mr-10 text-white'>
          Developed By Mahesh Pasaladi
        </span>
      </div>
    </div>

  )
}

export default Footer
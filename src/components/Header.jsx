import React from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import user from './../assets/images/user-icon.png'
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalQuantity = useSelector(state=>state.cart.totalQuantity)
  return (
    <div className=' flex items-center justify-around h-20 '>
      <div  >
        <Link to="/">
        <span className=' text-5xl font-protest font-bold 
         text-primary'>Furni Craft</span>
        </Link>
      </div>
      <div >
        <ul className=' flex items-center gap-20'>
          <li >
            <Link to="/" className=' text-gray-500 font-semibold hover:text-primary hover:border-b-2 border-gray-300 duration-300 
            ease-in-out hover:border-b-gray-500'>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className=' text-gray-500 font-semibold hover:text-primary hover:border-b-2 border-gray-300 duration-300 
            ease-in-out hover:border-b-gray-500'>
              Shop
            </Link>
          </li>
          <li >
            <Link to="/cart" className=' text-gray-500 font-semibold hover:text-primary hover:border-b-2 border-gray-300 duration-300 
            ease-in-out hover:border-b-gray-500'>
              Cart
            </Link>
          </li>
        </ul>
      </div>
      <div className=' flex gap-8 items-center '>
       
        <div className=' relative flex'>
        <Link to="/cart">
        <FaShoppingBag size={26} className=' text-gray-600'/>
        <span className=' absolute bottom-3 left-4  
        rounded-[50%] bg-primary h-6 w-6 text-white
          text-center  p-1 items-center flex justify-center '>{totalQuantity}</span>
        </Link>
        </div>
        <div className=' w-10 h-10 bg-cover border rounded-full 
         cursor-pointer overflow-hidden'>
          <motion.div
          whileHover={{scale:1.1}}>
            <img src={user}alt=""className='w-10 h-10' />
          </motion.div>
          
        </div>
      </div>
    </div>
  )
}

export default Header
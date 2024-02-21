import { motion } from 'framer-motion';
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart } from '../Redux/cartSlice';
import {  toast } from 'react-toastify';
import { CiHeart } from "react-icons/ci";


const ProductCard = ({item}) => {
  const  dispatch=useDispatch()
  const  handleAddtoCart=(id)=>{
    dispatch(addToCart({...item,count:1}))
    toast.success('product added successfully')
  }
  return (
    <div className=' flex flex-col items-center gap-4 cursor-pointer'>
        <div className=' flex flex-col '>
          <motion.div 
             whileHover={{scale:1.1}} >
              <Link to={`/shop/${item.id}`}>
              <img src={item.imgUrl} alt="" className=' h-[450px] w-[450px]'/>
              </Link>
              
          </motion.div>
            
        </div>
        <h3 className=' text-primary font-semibold'>
            <Link to="/shop/id">
            {item.productName}
            </Link>
        </h3>
        <div className=' flex items-center gap-12'>
        <span className=' text-primary'>{item.category}</span>
        <p>${item.price}</p>
        <span className=' bg-primary px-2 py-2 rounded-full'>
            <FaPlus className=' text-white' onClick={handleAddtoCart} />
        </span>
        </div>
        
    </div>
  )
}

export default ProductCard
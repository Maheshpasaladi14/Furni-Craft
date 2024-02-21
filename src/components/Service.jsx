import React from 'react'
import { FaTruck } from "react-icons/fa";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { RiSecurePaymentFill } from "react-icons/ri";
import { SiStarlingbank } from "react-icons/si";
const Service = () => {
  return (
    <div className=' flex items-center justify-around w-full mt-14  '>
        <div className=' gap-6 flex text-center bg-card_1 
         items-center h-[95px] w-[20%] rounded-lg
          shadow-md justify-center'>
            <div className=' bg-primary px-4 py-4 rounded-full'>
            <FaTruck size={30} className=' text-white' />
            </div>
            <div className=' flex flex-col'>
            <h3 className=' text-xl text-primary font-semibold'>Free Shipping </h3>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className=' gap-6 flex text-center bg-card_2 
         items-center h-[95px] w-[20%] rounded-lg
          shadow-md justify-center'>
            <div className=' bg-primary px-4 py-4 rounded-full'>
            <HiArrowPathRoundedSquare size={30} className=' text-white' />
            </div>
            <div className=' flex flex-col'>
            <h3 className=' text-xl text-primary font-semibold'>Easy Returns </h3>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className=' gap-6 flex text-center bg-card_3
         items-center h-[95px] w-[20%] rounded-lg
          shadow-md justify-center'>
            <div className=' bg-primary px-4 py-4 rounded-full'>
            <RiSecurePaymentFill size={30} className=' text-white' />
            </div>
            <div className=' flex flex-col'>
            <h3 className=' text-xl text-primary font-semibold'>Secure Payment</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className=' gap-6 flex text-center bg-card_4
         items-center h-[95px] w-[20%] rounded-lg
          shadow-md justify-center'>
            <div className=' bg-primary px-4 py-4 rounded-full'>
            <SiStarlingbank size={30} className=' text-white' />
            </div>
            <div className=' flex flex-col'>
            <h3 className=' text-xl text-primary font-semibold'>Back Gaurantee</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
  )
}

export default Service
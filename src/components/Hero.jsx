import React from 'react'
import hero from './../assets/images/hero-img.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className=' flex flex-row px-4 w-full bg-hero_bg justify-center  h-[80vh]'>
        <div  className="w-1/2 mr-4 mt-20 ">
           <p>Trending Products in 2024</p>
           <h2 className=' text-3xl font-bold mt-5 text-primary space-x-1'>Make Your Interior More  Comfortable and Stylish with our
             Luxury Furniture.</h2>
             <p className=' mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ipsam ipsum nulla dolorem quaerat debitis eveniet quasi culpa ea quis commodi hic amet corporis
                 accusamus quidem, officia dicta omnis voluptatibus!
            </p>
            <button className=' bg-primary  p-[15px] text-xl 
             cursor-pointer last:font-semibold mt-10 text-white border-none rounded-md'>
                <Link to="/shop">Shop Now</Link>
             </button>
        </div>
        <div className=' mt-20 ml-10'>
            <img src={hero} alt="" />
        </div>
    </div>
  )
}

export default Hero
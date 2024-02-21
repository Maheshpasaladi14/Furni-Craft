import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import { IoStarSharp } from "react-icons/io5";
import { motion } from 'framer-motion';
import { addToCart } from '../Redux/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


const ProductDetails = ({item}) => {
  const  dispatch=useDispatch()
  const  handleAddtoCart=(id)=>{
    dispatch(addToCart({...item,count:1}))
    toast.success('product added successfully')
  }
  const reviewUser=useRef('') 
  const reviewMsg=useRef('')
  const {id} = useParams();
  const product = products.find(item=>item.id===id);

  const{productName,avgRating,price,category,review,imgUrl,shortDesc}=product;
  const submitHandler =  (e) => e.preventDefault();
   
  const reviewUserName= reviewUser.current.value;
  const reviewUserMsg= reviewMsg.current.value;

  return (
    <div>
      <div className='shop flex items-center justify-center'>
        <h1 className=' text-white text-6xl' >{productName}</h1>
      </div>
      <div className=' flex w[100%] '>
        <div className='  bg-slate-300'>
          <img src={imgUrl} alt="" className=' w-[500px] h-[500px]'  />
        </div>
        <div className=' flex flex-col gap-2 items-center text-center ml-20 mt-10'>
          <h1 className=' font-semibold'>{productName}</h1>
            <span>Price: ${price}.00</span>
            <div className=' flex'>
              Rating :<IoStarSharp color="yellow" size={24}/>
              <IoStarSharp color="yellow" size={24}/>
              <IoStarSharp color="yellow" size={24}/>
              <IoStarSharp color="yellow" size={24}/>
              <IoStarSharp color="gray" size={24}/>
            </div>
           Rating : {`${avgRating}/5 `}({review})
           
          <p >{shortDesc}</p>
          <motion.div whileHover={{scale:1.2}}>
          <button className="bg-primary mt-7 py-2 px-8
           rounded-full text-white" onClick={handleAddtoCart}>Add to Cart</button>
          </motion.div>
          
        </div>
        
      </div>
      <div className=' mt-10'>
            <div className=' border-b-2 ml-10 px-10'>
            <span className=' text-2xl font-semibold text-primary  w-full  px-16'>Review</span>
            </div>
           
            <div className=' flex items-center px-16 mt-6 ml-20 flex-col gap-4'>
              
                <h3 className=' text-2xl'>Leave Your Experience</h3>
                <div className='  w-[100%] items-center justify-center flex' >
                  <input type="text" placeholder='Enter Your Name...'
                   className=' w-[70%] h-12 outline-none border-2 px-4'/>
                </div>
                <div className=' flex items-center gap-20'>
                  <span>1<IoStarSharp/></span>
                  <span>2<IoStarSharp/></span>
                  <span>3<IoStarSharp/></span>
                  <span>4<IoStarSharp/></span>
                  <span>5<IoStarSharp/></span>
                </div>
                <div className='  w-[100%] items-center justify-center flex'>
                  <textarea rows={4} typeof='text' placeholder='Review Your Message '
                   className=' w-[70%] h-28 outline-none border-2 px-4 mt-4' />
                </div>
                <div>
                <button className=' bg-primary py-2 px-8
                 rounded-full text-white mb-4'onSubmit={submitHandler}>Submit</button>
                </div>
             
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
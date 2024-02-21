import React, { useEffect, useState } from 'react';
import Service from '../components/Service';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import counter_img from './../assets/images/counter-timer-img.png'
import products from './../assets/data/products';

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [topSales, setTopSales] = useState([]);

  useEffect(() => {
    const filteredTrendingProducts = products.filter(item => item.category === "chair");
    const filteredBestSellingProducts = products.filter(item => item.category === "sofa");
    const filteredMobilProducts = products.filter(item => item.category === "mobile");
    const filteredWirelesProducts = products.filter(item => item.category === "wireless");
    const filteredWatches = products.filter(item => item.category === "watch");
    setTrendingProducts(filteredTrendingProducts);
    setBestSellingProducts(filteredBestSellingProducts);
    setMobileProducts(filteredMobilProducts);
    setWirelessProducts(filteredWirelesProducts);
    setTopSales(filteredWatches)
  }, []);

  return (
    <div>
      <Hero />
      <Service />
      <section className='container mx-auto pt-8 px-4'>
        <div className='mb-8'>
          <h2 className='text-center font-semibold text-primary text-2xl mb-4'>Trending Products</h2>
          <ProductList data={trendingProducts} />
        </div>
        <div >
          <h2 className='text-center font-semibold text-primary text-2xl mb-4'>Best Sellings</h2>
          <ProductList data={bestSellingProducts} />
        </div>
      </section>
      <div className=' bg-primary h-[300px] flex flex-row px-8'>
        <div className='  w-[75%]'>
          <div className=' px-20 mt-10'>
            <h3 className='text-white text-4xl '>Limited Offers</h3>
            <h4 className=' text-gray-400 text-2xl'>Quality Arm Chairs</h4>
            <div className=' flex items-center mt-10 gap-5'>
              <span className=' text-white text-4xl'>10</span>
              <span className=' text-3xl text-white' >Days</span>
              <p className=' text-3xl text-white'>:</p>
              <span className=' text-white text-4xl'>10</span>
              <span className=' text-3xl text-white' >Hours</span>
              <p className=' text-3xl text-white'>:</p>
              <span className=' text-white text-4xl'>10</span>
              <span className=' text-3xl text-white' >Seconds</span>
            
            </div>
            <button className=' mt-6 bg-white px-5 py-3 rounded-xl text-xl font-semibold text-primary'>Visit Sore</button>
          </div>
        </div>
        <div className='  w-[25%]'>
          <img src={counter_img} alt="" className='h-[75%] w-[75%] mt-10'  style={{objectFit:"contain"}} />
        </div>
      </div>
      <section>
      <div className=' mt-20 '  >
          <h2 className='text-center font-semibold text-primary text-2xl mb-4'>New Arrivals</h2>
          <div className=''>
          <ProductList data={mobileProducts} />
          <ProductList data={wirelessProducts} />
          </div>
        </div>
        <div className=' mt-20'>
        <h2 className='text-center 
        font-semibold text-primary text-2xl mb-4'>Top Sales</h2>
        <div>
          <ProductList data={topSales} />
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

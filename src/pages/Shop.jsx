import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import products from '../assets/data/products';
import ProductList from '../components/ProductList';

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const [selectedSort, setSelectedSort] = useState(''); // State to track selected sorting option
  
// State to track search query

  const handleFilter = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === "all") {
      setProductsData(products); // Reset to all products
    } else {
      const filteredProducts = products.filter(product => product.category === selectedCategory);
      setProductsData(filteredProducts);
    }
  };

  const handleSort = (e) => {
    const selectedSortOption = e.target.value;
    setSelectedSort(selectedSortOption);
    let sortedProducts = [...productsData];
    if (selectedSortOption === 'price_ascending') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === 'price_descending') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProductsData(sortedProducts);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const searchedProducts = products.filter(item => item.productName.
      toLowerCase().includes(searchTerm.toLowerCase()));

      setProductsData(searchedProducts)
  };
  return (
    <div className=''>
      <div className='shop'>
        <h1 className='text-white'>Shop...</h1>
      </div>
      <div className='flex items-center justify-around pt-8 pb-8'>
        <div>
          <select className='py-4 px-8 flex items-center justify-center font-semibold text-xl rounded-lg border-2' onChange={handleFilter}>
            <option value="category">Filter by</option>
            <option value="all">All</option>
            <option value="chair">Chairs</option>
            <option value="sofa">Sofas</option>
            <option value="mobile">Mobiles</option>
            <option value="wireless">Wireless Products</option>
            <option value="watch">Watches</option>
          </select>
        </div>
        <div>
          <select className='px-8 py-4 font-semibold text-xl border-2 rounded-lg' onChange={handleSort} value={selectedSort}>
            <option value="sort">Sort By:</option>
            <option value="price_ascending">Price Ascending</option>
            <option value="price_descending">Price Descending</option>
          </select>
        </div>
        <div className='relative flex items-center border-2 w-[30%]'>
          <input type="text" placeholder='Search Products...'
           className='outline-none w-[100%] h-14 px-8' onChange={handleSearch}
           />
          <CiSearch className='absolute right-4 text-2xl font-semibold text-primary' />
        </div>
      </div>
      <div>
        {productsData.length === 0 ? (
          <h1>No Products available</h1>
        ) : (<ProductList data={productsData} />)}
      </div>
    </div>
  )
}

export default Shop;

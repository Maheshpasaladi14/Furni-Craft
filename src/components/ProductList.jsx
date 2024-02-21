import React from 'react'
import ProductCard from './ProductCard'
const ProductList = ({ data }) => {
    return (
        <div className=' flex flex-wrap justify-center'>
            {
                data.map((item,id) => (
                    <div key={id} className='w-1/3 mb-8 px-4' >
                        <ProductCard item={item} />
                    </div>
                ))
            }

        </div>
    )
}

export default ProductList
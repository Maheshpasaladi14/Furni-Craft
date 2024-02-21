import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdDelete } from "react-icons/md";
import { removeFromCart } from './../Redux/cartSlice'; // Import your cart slice action

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId)); // Dispatch remove item action
  };

  return (
    <div className="container mx-auto">
      <div className='shop flex items-center justify-center text-4xl font-semibold
       text-white py-6'>
        <h1>Welcome To Cart</h1>
      </div>
      <div className='pt-4 pb-4'>
        <table className='w-full'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='px-4 py-2 text-left'>Image</th>
              <th className='px-4 py-2 text-left'>Title</th>
              <th className='px-4 py-2 text-left'>Price</th>
              <th className='px-4 py-2 text-left'>Quantity</th>
              <th className='px-4 py-2 text-left'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr className='border' key={item.id}>
                <td className='px-4 py-2'>
                  <img src={item.image} alt={item.productName} className='w-20 h-20 object-cover' />
                </td>
                <td className='px-4 py-2'>{item.productName}</td>
                <td className='px-4 py-2'>{`$${item.price}`}</td>
                <td className='px-4 py-2'>{item.quantity}</td>
                <td className='px-4 py-2'>
                  <button onClick={() => handleRemoveItem(item.id)}>
                    <MdDelete className='text-red-500' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center px-4 py-2">
        <div>Total Quantity: {totalQuantity}</div>
        <div>Total Amount: ${totalAmount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Cart;

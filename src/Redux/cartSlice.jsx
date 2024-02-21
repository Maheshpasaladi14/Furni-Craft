// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        totalQuantity:0,
        totalAmount:0
    },
    reducers:{
        addToCart:(state,action)=>{
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item=> item.id === newItem.id);

            state.totalQuantity++
            if(!existingItem){
                state.cartItems.push({
                    id:newItem.id,
                    productName:newItem.productName,
                    image:newItem.imgUrl,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price
                })
            }
            else{
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.price) * Number(existingItem.totalPrice)+Number(newItem.price)
            }
            state.totalAmount=state.cartItems.reduce(
                (total,item) => total + Number(item.price)*Number(item.quantity)
            );
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.id === id);
            if (existingItemIndex !== -1) {
                state.totalQuantity -= state.cartItems[existingItemIndex].quantity;
                state.totalAmount -= state.cartItems[existingItemIndex].price * state.cartItems[existingItemIndex].quantity;
                state.cartItems.splice(existingItemIndex, 1);
            }
        },
        updateTotalQuantity: (state) => {
            state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addToCart, (state, action) => {
            updateLocalStorage(state);
        });
        builder.addCase(removeFromCart, (state, action) => {
            updateLocalStorage(state);
        });
    }
});

const updateLocalStorage = (state) => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    localStorage.setItem('totalQuantity', state.totalQuantity);
    localStorage.setItem('totalAmount', state.totalAmount);
};

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart, updateTotalQuantity} = cartSlice.actions;
export default cartSlice.reducer;

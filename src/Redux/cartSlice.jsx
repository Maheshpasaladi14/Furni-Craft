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
            const existingItem = state.cartItems.find(item => item.id === newItem.id);

            state.totalQuantity++;
            if(!existingItem){
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    image: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + item.totalPrice, 0);
            updateLocalStorage(state);
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.id === id);
            if (existingItemIndex !== -1) {
                state.totalQuantity -= state.cartItems[existingItemIndex].quantity;
                state.totalAmount -= state.cartItems[existingItemIndex].totalPrice;
                state.cartItems.splice(existingItemIndex, 1);
            }
            updateLocalStorage(state);
        },
        updateTotalQuantity: (state) => {
            state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        }
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

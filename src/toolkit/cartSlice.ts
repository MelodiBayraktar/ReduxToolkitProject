import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:[]
    },
    reducers:{
        addToCart:(state:any,action) =>{
            state.cartItems = [...state.cartItems, action.payload];
        },
        removeFromCart:(state:any,action) =>{
            state.cartItems = state.cartItems.filter((item:any) => item.id !== action.payload.id);
        },
        clearCart:(state) =>{
            state.cartItems = [];
        },

    }
});

export const {removeFromCart, addToCart,clearCart} = cartSlice.actions;

export const selectCart = (state:any) => state.cart.value;

export default cartSlice.reducer;
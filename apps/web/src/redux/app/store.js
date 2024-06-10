import { configureStore } from "@reduxjs/toolkit";
import cart, { cartsSlice } from "../features/cart";

export const store = configureStore({
    reducer:{
        cart:cartsSlice
    }
})
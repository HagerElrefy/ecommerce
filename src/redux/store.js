import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./slices/favoriteSlice";
import cartReducer from './slices/cartSlice';
import superReducer from "./slices/superSalesSlice";
import languageReducer from "./slices/languageSlice";
export const store = configureStore({
    reducer:{
        favorites: favoriteReducer,
        cart : cartReducer,
        superSales: superReducer,
        language: languageReducer,
    }
})
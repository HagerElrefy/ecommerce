import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, { payload }) => {
            const exists = state.cart.findIndex(product => product.id === payload.id) ;
            if (exists === -1) {
                state.cart.push(payload);
            }
        },
        removeFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(product => product.id !== payload);
        },
        editInCart :(state, { payload }) => {
            state.cart = state.cart.map((product) => 
                (product.id === payload.id
                ?  payload
                :  product)
            );
        },
    }
});

export const { addProductToCart, removeFromCart, editInCart } = cartSlice.actions;

export default cartSlice.reducer;

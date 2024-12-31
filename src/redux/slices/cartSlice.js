import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalPriceBeforeDiscount:0,
    totalPriceAfterDiscount:0
};

const getTotalPrices = (state)=>{
    state.totalPriceBeforeDiscount = state.cart.reduce(
        (accumulator, currentValue) => {
          return Math.round((accumulator + (currentValue.price * currentValue.QTY))*100)/100
        },
        0,
      )

    state.totalPriceAfterDiscount = state.cart.reduce(
        (accumulator, currentValue) => {
          return Math.round((accumulator + currentValue.totalProductPrice) *100 ) /100
        },
        0,
      )
      return state
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, { payload }) => {
            const exists = state.cart.findIndex(product => product.id === payload.id) ;
            if (exists === -1) {
                state.cart.push({...payload , totalProductPrice: Math.round(+payload.priceAfter*payload.QTY*100)/100});
            }
            state = getTotalPrices(state);
        },
        removeFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(product => product.id !== payload);
            state = getTotalPrices(state);
        },
        editInCart :(state, { payload }) => {
            state.cart = state.cart.map((product) => 
                (product.id === payload.id
                ?  {...product , QTY : payload.QTY, totalProductPrice: Math.round(+product.priceAfter*payload.QTY*100)/100}
                :  product)
            );
            state = getTotalPrices(state);

        },
    }
});

export const { addProductToCart, removeFromCart, editInCart } = cartSlice.actions;

export default cartSlice.reducer;

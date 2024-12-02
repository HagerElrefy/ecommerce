import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: []
};

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addProductToFavorites: (state, { payload }) => {
            const exists = state.favorites.findIndex(product => product.id === payload.id) ;
            if (exists === -1) {
                state.favorites.push(payload);
            }
        },
        removeFromFavorites: (state, { payload }) => {
            state.favorites = state.favorites.filter(product => product.id !== payload);
        },
        editInFavorites :(state, { payload }) => {
            state.favorites = state.favorites.map((product) => 
                (product.id === payload.id
                ?  payload
                :  product)
            );
        },
    }
});

export const { addProductToFavorites, removeFromFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;

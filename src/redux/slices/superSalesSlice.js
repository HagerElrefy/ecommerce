import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    superSalesList : []
}
export const superSalesSlice = createSlice({
    name: 'superSalesList',
    initialState,
    reducers:{
        addToSuperSalses: (state, { payload }) => {
            state.superSalesList.push(payload);
        },
    }
})
export const {addToSuperSalses} = superSalesSlice.actions;
export default superSalesSlice.reducer;

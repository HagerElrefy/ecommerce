import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    language:'en'
};
const languageSlice = createSlice(
    {
        name:'language',
        initialState,
        reducers:{
            change:(state , {payload})=>{
                state.language = state.language === 'en' ? 'ar' : 'en';
            }
        }
    }
)
export const {change} = languageSlice.actions;
export default languageSlice.reducer;

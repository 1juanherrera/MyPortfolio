import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
   name: 'language',
   initialState: {
       isLanguage: false
   },
   reducers: {
        changeLanguage: ( state ) => {
            state.isLanguage = !state.isLanguage;
        },
    }
});

export const { changeLanguage } = languageSlice.actions;
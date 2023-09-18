import { createSlice } from '@reduxjs/toolkit';

const isLanguage = localStorage.getItem('language') !== null 
? JSON.parse(localStorage.getItem('language')) : true;

export const languageSlice = createSlice({
   name: 'language',
   initialState: {
       isLanguage: isLanguage
   },
   reducers: {
        changeLanguage: ( state ) => {
            state.isLanguage = !state.isLanguage;
            localStorage.setItem('language', JSON.stringify(state.isLanguage));
        },
    }
});

export const { changeLanguage } = languageSlice.actions;
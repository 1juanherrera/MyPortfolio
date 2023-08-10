import { createSlice } from '@reduxjs/toolkit';

export const showSlice = createSlice({
   name: 'show',
   initialState: {
       isShow: false
   },
   reducers: {
        open: ( state ) => {
            state.isShow = true;
        },
        close: ( state ) => {
            state.isShow = false;
        }
    }
});

export const { open, close } = showSlice.actions;
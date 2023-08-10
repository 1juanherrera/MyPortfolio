import { configureStore } from '@reduxjs/toolkit'
import { showSlice } from './slices/show'

export const store = configureStore({
    reducer: {
        show: showSlice.reducer
    },
})
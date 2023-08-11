import { configureStore } from '@reduxjs/toolkit'
import { showSlice } from './slices/show'
import { languageSlice } from './slices/language'

export const store = configureStore({
    reducer: {
        show: showSlice.reducer,
        language: languageSlice.reducer
    },
})
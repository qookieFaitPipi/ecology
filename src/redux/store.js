import { configureStore } from '@reduxjs/toolkit'

// slices
import detailSlice from './slices/detailSlice'

export const store = configureStore({
  reducer: {
    detailSlice: detailSlice,
  },
})
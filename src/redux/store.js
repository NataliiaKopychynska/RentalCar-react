import { configureStore } from '@reduxjs/toolkit'
import carReducer from './slice'

export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
})

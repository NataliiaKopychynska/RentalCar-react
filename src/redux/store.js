import { configureStore } from '@reduxjs/toolkit'
import carsReducer from './slice'
import carReducer from './sliceCard'

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    carID: carReducer,
  },
})

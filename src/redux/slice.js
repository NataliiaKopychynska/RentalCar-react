import { createSlice } from '@reduxjs/toolkit'
import { getAllCars } from './operations'

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    likedCars: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggleLike: (state, action) => {
      const id = action.payload
      if (state.likedCars.includes(id)) {
        state.likedCars = state.likedCars.filter((carId) => carId !== id)
      } else {
        state.likedCars.push(id)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false
        state.items = action.payload.cars
        console.log(state.items)
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { toggleLike } = carSlice.actions
export default carSlice.reducer

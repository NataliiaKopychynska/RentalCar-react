import { createSlice } from '@reduxjs/toolkit'
import { getCarById } from './operations'

const carIdSlice = createSlice({
  name: 'carID',
  initialState: {
    currentCar: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarById.pending, (state, action) => {
        state.isLoading = true
        state.error = null
        state.car = null
      })
      .addCase(getCarById.fulfilled, (state, action) => {
        state.isLoading = false
        state.currentCar = action.payload
      })
      .addCase(getCarById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export default carIdSlice.reducer

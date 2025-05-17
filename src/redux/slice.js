import { createSlice } from '@reduxjs/toolkit'
import { getAllCars } from './operations'

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    filteredItems: [],
    likedCars: [],
    allItems: [],
    currentPage: 1,
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
    setFilteredCars: (state, action) => {
      state.filteredItems = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      // .addCase(getAllCars.fulfilled, (state, action) => {
      //   state.isLoading = false
      //   state.items = action.payload.cars
      //   console.log(state.items)
      // })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false

        const cars = action.payload.cars.cars || []
        const page = Number(
          action.payload.page ?? action.payload.cars.page ?? state.currentPage
        )

        state.items = [...state.items, ...cars]
        state.allItems = [...(state.allItems || []), ...cars]
        state.currentPage = page
      })

      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { toggleLike, setFilteredCars } = carSlice.actions
export default carSlice.reducer

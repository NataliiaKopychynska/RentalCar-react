import { createSlice } from '@reduxjs/toolkit'
import { getAllCars, getBrands, getCarById } from './operations'

const sliceCar = createSlice({
  name: 'cars',
  initialState: {
    carItems: [],
    likedCars: JSON.parse(localStorage.getItem('likedCars')) || [],
    page: 1,
    totalPages: 1,
    isLoading: false,
    error: null,
    brands: [],
  },
  reducers: {
    toggleLikeCard: (state, action) => {
      const newCar = action.payload
      const carId = newCar.id
      const index = state.likedCars.findIndex((car) => car.id === carId)

      if (index === -1) {
        state.likedCars.push(newCar)
      } else {
        state.likedCars.splice(index, 1)
      }
    },
    setLikedCars: (state, action) => {
      state.likedCars = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    getLikedCars: (state, action) => {
      state.carItems = JSON.parse(localStorage.getItem('likedCars')) || []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        const { cars, page, totalPages, shouldReset } = action.payload

        state.isLoading = false
        state.page = +page
        state.totalPages = +totalPages

        if (shouldReset) {
          state.carItems = cars
        } else {
          state.carItems = [
            ...state.carItems,
            ...cars.filter(
              (newCar) =>
                !state.carItems.some(
                  (existingCar) => existingCar.id === newCar.id
                )
            ),
          ]
        }
      })

      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(getBrands.pending, (state, action) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.brands = action.payload
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
    // .addCase(getCarById.pending, (state, action) => {
    //   state.isLoading = true
    //   state.error = null
    // })
    // .addCase(getCarById.fulfilled, (state, action) => {})
    // .addCase(getCarById.rejected, (state, action) => {
    //   state.isLoading = false
    //   state.error = action.payload
    // })
  },
})
export const {
  toggleLikeCard,
  setLikedCars,
  filterCars,
  setPage,
  getLikedCars,
} = sliceCar.actions
export default sliceCar.reducer

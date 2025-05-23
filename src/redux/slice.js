// import { createSlice } from '@reduxjs/toolkit'
// import {
//   getAllCars,
//   getCarById,
//   getBrands,
//   applyFiltersThunk,
// } from './operations'

// import { createSlice } from '@reduxjs/toolkit'

// const carSlice = createSlice({
//   name: 'cars',
//   initialState: {
//     items: [],
//     filteredItems: [],
//     likedCars: [],
//     allItems: [],
//     currentPage: 1,
//     hasMore: true,
//     isFiltered: false,

//     isLoading: false,
//     error: null,

//     selectedCar: null,
//     brands: [],
//   },
//   reducers: {
//     toggleLike: (state, action) => {
//       const id = action.payload
//       if (state.likedCars.includes(id)) {
//         state.likedCars = state.likedCars.filter((carId) => carId !== id)
//       } else {
//         state.likedCars.push(id)
//       }
//     },
//     resetCars: (state) => {
//       state.filteredItems = []
//       state.currentPage = 1
//       state.hasMore = true
//       state.isFiltered = false
//     },

//     resetFilteredState: (state) => {
//       state.filteredItems = []
//       state.isFiltered = false
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAllCars.pending, (state) => {
//         state.isLoading = true
//         state.error = null
//         state.hasMore = true
//       })

//       .addCase(getAllCars.fulfilled, (state, action) => {
//         state.isLoading = false
//         const cars = action.payload.cars || []
//         const page = Number(action.payload.page)
//         const newCars = cars.filter(
//           (car) => !state.items.some((existingCar) => existingCar.id === car.id)
//         )
//         state.items = [...state.items, ...newCars]
//         state.allItems = [...state.allItems, ...newCars]
//         // state.items = [...state.items, ...cars]
//         // state.items = cars

//         state.currentPage = page

//         if (page === 4) {
//           state.hasMore = false
//           // console.log(cars.length)
//         }
//       })

//       .addCase(getAllCars.rejected, (state, action) => {
//         state.isLoading = false
//         state.error = action.payload
//       })

//       .addCase(getCarById.pending, (state) => {
//         state.isLoading = true
//         state.error = null
//       })
//       .addCase(getCarById.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.selectedCar = action.payload
//       })
//       .addCase(getCarById.rejected, (state, action) => {
//         state.isLoading = false
//         state.error = action.payload
//       })

//       .addCase(getBrands.pending, (state) => {
//         state.isLoading = true
//         state.error = null
//       })
//       .addCase(getBrands.fulfilled, (state, action) => {
//         state.isLoading = false
//         state.brands = action.payload
//       })
//       .addCase(getBrands.rejected, (state, action) => {
//         state.isLoading = false
//         state.error = action.payload
//       })

//       .addCase(applyFiltersThunk.pending, (state) => {
//         state.isLoading = true
//         state.error = null
//       })
//       .addCase(applyFiltersThunk.fulfilled, (state, action) => {
//         state.filteredItems = action.payload
//         state.isFiltered = true
//         state.items = []
//       })
//       .addCase(applyFiltersThunk.rejected, (state, action) => {
//         state.isLoading = false
//         state.error = action.payload
//       })
//   },
// })

// export const { toggleLike, setFilteredCars, resetCars, resetFilteredState } =
//   carSlice.actions
// export default carSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { getAllCars, getBrands } from './operations'

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
      // .addCase(getAllCars.fulfilled, (state, action) => {
      //   state.isLoading = false
      //   state.carItems = [
      //     ...state.carItems,
      //     ...action.payload.cars.filter(
      //       (newCar) =>
      //         !state.carItems.some(
      //           (existingCar) => existingCar.id === newCar.id
      //         )
      //     ),
      //   ]
      //   state.page = +action.payload.page
      //   state.totalPages = +action.payload.totalPages
      //   state.filteredCars = [action.payload.cars]
      // })
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
  },
})
export const { toggleLikeCard, setLikedCars, filterCars, setPage } =
  sliceCar.actions
export default sliceCar.reducer

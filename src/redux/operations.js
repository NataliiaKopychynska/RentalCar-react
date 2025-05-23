import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://car-rental-api.goit.global/'

// export const getAllCars = createAsyncThunk(
//   'cars/getAll',
//   async (page = 1, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`/cars?page=${page}`)
//       return {
//         cars: data.cars,
//         page: data.page,
//         totalPages: data.totalPages,
//       }
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message)
//     }
//   }
// )

export const getAllCars = createAsyncThunk(
  'cars/getAll',
  async (
    {
      page = 1,
      rentalPrice,
      minMileage,
      maxMileage,
      brand,
      limit = 12,
      shouldReset = false,
    },
    thunkAPI
  ) => {
    try {
      // const { data } = await axios.get(`/cars?page=${page}`)
      const params = new URLSearchParams()

      params.append('page', page.toString())
      params.append('limit', limit.toString())

      if (rentalPrice) params.append('rentalPrice', rentalPrice.toString())
      if (minMileage) params.append('minMileage', minMileage.toString())
      if (maxMileage) params.append('maxMileage', maxMileage.toString())
      if (brand) params.append('brand', brand)

      const { data } = await axios.get(`/cars?${params.toString()}`)
      // console.log(data)

      return {
        cars: data.cars,
        page: data.page,
        totalPages: data.totalPages,
        shouldReset,
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const getCarById = createAsyncThunk(
  'cars/getCarById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/cars/${id}`)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const getBrands = createAsyncThunk(
  'cars/getBrands',
  async (__, thunkAPI) => {
    try {
      const { data } = await axios.get('/brands')

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

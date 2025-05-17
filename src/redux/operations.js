import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://car-rental-api.goit.global/'

// export const getAllCars = createAsyncThunk(
//   'cars/getAll',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('/cars')
//       // console.log(data)

//       return data
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message)
//     }
//   }
// )
export const getAllCars = createAsyncThunk(
  'cars/getAll',
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await axios.get(`/cars?page=${page}`) // якщо бекенд це підтримує
      // console.log('response.data:', data)
      return { cars: data, page }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

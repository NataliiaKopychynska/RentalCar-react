import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://car-rental-api.goit.global/'

export const getAllCars = createAsyncThunk(
  'cars/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/cars')
      // console.log(data)

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

import { configureStore } from '@reduxjs/toolkit'
import carsReducer from './slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  cars: carsReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cars'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
})

const persistor = persistStore(store)

export { store, persistor }

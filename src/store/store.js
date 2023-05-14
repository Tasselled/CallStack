import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer'

export const store = configureStore({
  reducer: {
    userReducer: userReducer,     
  }
})


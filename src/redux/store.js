import { configureStore } from '@reduxjs/toolkit'
import authReducer from'./auth' 
import usersReducer from './users'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer
  },
})
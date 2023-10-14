import { createSlice } from '@reduxjs/toolkit'
//localStorage.getItem("name")
const initialStateValue = false

export const authSlice = createSlice({
  name: 'auth',
  initialState:{value:initialStateValue},
  reducers: {
    login: (state) => {
        state.value = true
    },
   logout:(state) => {
    state.value = initialStateValue
   },
  
  },
})

// Action creators are generated for each case reducer function
export const { login,logout} = authSlice.actions

export default authSlice.reducer
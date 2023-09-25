import { createSlice } from '@reduxjs/toolkit'
//localStorage.getItem("name")
const initialState = {
  value: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    login: (state) => {
        state.value = true
    },
   logout:(state) => {
    state.value = false
   },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login,logout} = authSlice.actions

export default authSlice.reducer
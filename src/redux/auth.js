import { createSlice } from '@reduxjs/toolkit'
//localStorage.getItem("name")
const initialStateValue = {isauth:false,name:null,email:null,navi:['Home','Login']}

export const authSlice = createSlice({
  name: 'auth',
  initialState:{value:initialStateValue},
  reducers: {
    login: (state,action) => {
        state.value = action.payload;
    },
   logout:(state) => {
    state.value = initialStateValue
   },
  
  },
})

// Action creators are generated for each case reducer function
export const { login,logout} = authSlice.actions

export default authSlice.reducer
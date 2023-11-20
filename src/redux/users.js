import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../services/users";

const initialState = {
  users: null,
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = null;
    },
    getUsersFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getUsersLoading, getUsersSuccess, getUsersFailure } =
  usersSlice.actions;

export const selectUsers = (state) => state.users;

export const fetchUsers = () => (dispatch) => {
  dispatch(getUsersLoading());
  getUsers()
    .then((res) => {
      const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch(getUsersSuccess(data));
    })
    .catch((err) => dispatch(getUsersFailure(err)));
};

export default usersSlice.reducer;

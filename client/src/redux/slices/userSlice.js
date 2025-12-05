import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userDetails: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.userDetails = action.payload;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.userDetails = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
  name: "dialog",
  initialState: {
    isLoginOpen: false,
    isRegisterOpen: false,
  },
  reducers: {
    openLogin: (state) => {
      state.isLoginOpen = true;
      state.isRegisterOpen = false; // close register if open
    },
    closeLogin: (state) => {
      state.isLoginOpen = false;
    },
    openRegister: (state) => {
      state.isRegisterOpen = true;
      state.isLoginOpen = false; // close login if open
    },
    closeRegister: (state) => {
      state.isRegisterOpen = false;
    },
  },
});

export const {
  openLogin,
  closeLogin,
  openRegister,
  closeRegister,
} = dialogSlice.actions;

export default dialogSlice.reducer;

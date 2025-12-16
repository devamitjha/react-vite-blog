import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postData: [],     // 🔥 always array (all / category / slug)
  loading: false,
  error: null,
};

const postItemSlice = createSlice({
  name: "postItem",
  initialState,
  reducers: {
    // 🔄 START LOADING
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },

    // ✅ SET POSTS (ALL CASES)
    setPostData: (state, action) => {
      state.postData = action.payload;
      state.loading = false;
    },

    // ❌ ERROR
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // 🧹 RESET (OPTIONAL)
    resetPostData: (state) => {
      state.postData = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setLoading,
  setPostData,
  setError,
  resetPostData,
} = postItemSlice.actions;

export default postItemSlice.reducer;

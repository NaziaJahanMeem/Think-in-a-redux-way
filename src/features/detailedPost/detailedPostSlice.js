import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDetailedPost } from "./detailedPostAPI";

const initialState = {
  detailedPost: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchDetailedPost = createAsyncThunk(
  "detailedPost/fetchDetailedPost",
  async (filter) => {
    const detailedPost = await getDetailedPost(filter);
    return detailedPost;
  }
);

const detailedPostsSlice = createSlice({
  name: "blogPosts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailedPost.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchDetailedPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detailedPost = action.payload;
      })
      .addCase(fetchDetailedPost.rejected, (state, action) => {
        state.isLoading = false;
        state.detailedPost = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});
export default detailedPostsSlice.reducer;

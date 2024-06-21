import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateLike } from "./updateLikeAPI";

const initialState = {
  detailedPost: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const updatePostLike = createAsyncThunk(
  "updateLike/updatePostLike",
  async ({ id, like }) => {
    const data = await updateLike(id, like);
    return data;
  }
);

const updatePostLikeSlice = createSlice({
  name: "blogPosts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(updatePostLike.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(updatePostLike.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detailedPost = action.payload;
      })
      .addCase(updatePostLike.rejected, (state, action) => {
        state.isLoading = false;
        state.detailedPost = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});
export default updatePostLikeSlice.reducer;

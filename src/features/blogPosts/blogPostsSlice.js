import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogPosts } from "./blogPostsAPI";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchBlogPosts = createAsyncThunk(
  "blogPosts/fetchBlogPosts",
  async (filter) => {
    const posts = await getBlogPosts(filter);
    return posts;
  }
);

const blogPostsSlice = createSlice({
  name: "blogPosts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPosts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.posts = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});
export default blogPostsSlice.reducer;

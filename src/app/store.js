import { configureStore } from "@reduxjs/toolkit";
import blogPostsReducer from "../features/blogPosts/blogPostsSlice";
import detailedPostReducer from "../features/detailedPost/detailedPostSlice";
export const store = configureStore({
  reducer: {
    blogPosts: blogPostsReducer,
    detailedPost: detailedPostReducer,
  },
});

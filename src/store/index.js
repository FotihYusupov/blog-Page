import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./reducer/searchSlice"
import PostsReducer from "./reducer/postsSlice"

export default configureStore({
  reducer: {
    posts: PostsReducer,
    items: SearchReducer
  },
});
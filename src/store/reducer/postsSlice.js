import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useFetch from "../../hooks/useFetch";

export const getPosts = createAsyncThunk("posts/getPosts",  () => {
    let res = useFetch("https://blog-page-server.onrender.com/posts")
    return res
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
      posts: undefined,
      loading: false,
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload
      state.loading = false;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
      state.posts = action.payload
    },
  },
});

export default postSlice.reducer;
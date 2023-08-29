import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSearch = createAsyncThunk("search/getSearch", ({title}) => {
    if(title !== null) {
        return fetch(`https://blog-page-server.onrender.com/search/${title}`)
        .then(res => res.json())
    }
})

const searchSlice = createSlice({
    name: "search",
    initialState: {
        items: undefined,
        loading: false,
    },
    extraReducers: {
        [getSearch.pending]: (state) => {
            state.loading = true
        },
        [getSearch.fulfilled]: (state, action) => {
            state.items = action.payload
            state.loading = false
        },
        [getSearch.rejected]: (state, action) => {
            state.loading = false
            state.items = action.payload
        }
    }
})


export default searchSlice.reducer
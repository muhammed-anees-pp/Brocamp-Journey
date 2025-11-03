import { createSlice } from "@reduxjs/toolkit";
import fetchQuotes from "./fetchQuotes";


const quotesSlice = createSlice({
    name: 'quotes',
    initialState: {data: [], loading: false, error: false},
    extraReducers: (builder) => {
        builder
        .addCase(fetchQuotes.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchQuotes.fulfilled, (state,action) => {
            state.loading = false
            state.data = action.payload
        })
        .addCase(fetchQuotes.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})


export default quotesSlice.reducer
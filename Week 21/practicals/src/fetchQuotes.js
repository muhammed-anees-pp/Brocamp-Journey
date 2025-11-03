import { createAsyncThunk } from "@reduxjs/toolkit";


const fetchQuotes = createAsyncThunk('quotes/fetch', async () => {
    const res = await fetch('https://dummyjson.com/quotes')
    const data = await res.json()
    return data.quotes
})

export default fetchQuotes
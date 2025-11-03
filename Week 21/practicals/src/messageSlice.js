import { createSlice } from "@reduxjs/toolkit";



const messageSlice = createSlice({
    name: 'message',
    initialState: { text: "hello from parent"},
    reducers: {}
})



export default messageSlice.reducer
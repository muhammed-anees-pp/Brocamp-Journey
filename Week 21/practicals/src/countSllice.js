import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
    name: 'count',
    initialState: {value: 0},
    reducers: {
        increase: (state, action) => {state.value += action.payload},
        inc: (state) => {state.value++}
    }
})

export const {increase,inc} = countSlice.actions
export default countSlice.reducer
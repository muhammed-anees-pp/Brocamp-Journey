import { createSlice } from "@reduxjs/toolkit";



const calcSlice = createSlice({
    name: 'calculator',
    initialState: {
        num1: '',
        num2: '',
        result: 0
    },
    reducers: {
        setNum1: (state,action) => {state.num1 = action.payload},
        setNum2: (state,action) => {state.num2 = action.payload},
        add: (state) => {state.result = Number(state.num1) + Number(state.num2)},
        sub: (state) => {state.result = Number(state.num1) - Number(state.num2)},
        reset: (state) => {
            state.num1 = '',
            state.num2 = '',
            state.result = 0
        }
    }
})


export const {setNum1, setNum2, add, sub, reset} = calcSlice.actions
export default calcSlice.reducer
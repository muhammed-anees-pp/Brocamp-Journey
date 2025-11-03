import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todo',
    initialState: {list:[]},
    reducers: {
        addTask: (state,action) => {
            const existTask = state.list.some(
                todo => todo.toLowerCase() === action.payload.toLowerCase()
            )

            if (!existTask) {
                state.list.push(action.payload)
            }
        },
        removeTask: (state,action) => {
            state.list = state.list.filter((_,i) => i != action.payload)
        }
    }

})

export const {addTask, removeTask} = todoSlice.actions
export default todoSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import counterUse from './countSllice'
import userUse from './userSlice'
import todoUse from './todoSlice'
import themeUse from './themeSlice'
import calcUse from './calcSlice'
import tableUse from './tableSlice'
import quotesUse from './quotesSlice'
import messUse from './messageSlice'


const store = configureStore({
    reducer: {
        count: counterUse,
        user: userUse,
        todo: todoUse,
        theme: themeUse,
        calculus: calcUse,
        users: tableUse,
        quotes: quotesUse,
        message: messUse,
    }
})

export default store
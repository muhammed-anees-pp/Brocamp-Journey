import { createAsyncThunk } from "@reduxjs/toolkit";


const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    return await res.json()
})

export default fetchUsers
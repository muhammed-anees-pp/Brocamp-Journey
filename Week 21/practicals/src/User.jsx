import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from './userSlice'

function User() {
    const name = useSelector((state) => state.user.name)
    const dispatch = useDispatch()
    const [newName, setNewName] = useState('Guest')

  return (
    <div>
        <h1>User Details</h1>
        <h3>username: {name}</h3>
        <input type="text" placeholder='Enter name' onChange={(e) => dispatch(setNewName(e.target.value))}/>
        <button onClick={() => dispatch(changeName(newName))}>Change</button>
    </div>
  )
}

export default User
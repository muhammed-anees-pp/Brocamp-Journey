import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from './themeSlice'

function Theme() {
    const theme = useSelector((state) => state.theme.mode)
    const dispatch = useDispatch()

  return (
    <div style={{background: theme === 'light' ? "#fff" : "#333", color: theme === 'light' ? '#333' : '#fff', height: '100vh', width:'100vw'}}>
        <h3>Theme: {theme}</h3>
        <button onClick={() => dispatch(changeTheme())}>Change</button>
    </div>
  )
}

export default Theme
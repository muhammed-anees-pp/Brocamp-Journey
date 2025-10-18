import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

function Toolbar() {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div style={{
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: 20,
    }}>
        <h2>Theme: {theme}</h2>
        <button onClick={() => setTheme(t => t === "light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}

export default Toolbar
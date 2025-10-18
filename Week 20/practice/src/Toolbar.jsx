import React, { useContext } from 'react'
import ThemeContext from './context/ThemeContext'

function Toolbar() {
    const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div style={{background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#333" : "#eee"
    }}>
        <h3>Theme: {theme}</h3>
        <button onClick={() => setTheme(theme => theme === "light" ? "dark" : "light")}>Change</button>
    </div>
  )
}

export default Toolbar
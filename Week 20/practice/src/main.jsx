// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from './context/ThemeContext.jsx'


function Root() {
  const [theme, setTheme] = useState("light")


  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <App/>
    </ThemeContext.Provider>
  )
}

export default Root



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)











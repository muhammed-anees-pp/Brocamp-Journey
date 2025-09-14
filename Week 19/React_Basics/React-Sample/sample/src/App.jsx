import {} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Feature from './Components/Feature/Feature'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
      <Navbar/>
      <Home/>
      <Feature name={"Anees"} age={24} domain={"Python"}/>
      <Feature name={"Midlaj"} age={23} domain={"MERN"}/>
      <Feature name={"Salih"} age={19} domain={"Flutter"}/>

      <Footer/>
    </>
  )
}

export default App

import React from 'react'
import './Home.css'
import Button from '../../UI/Button/Button'

function Home() {
  return (
    <div className='head'>
        <h1 style={{fontSize:"3rem", background: '#000', color: "#fff"}}>Home</h1>
        <h2 className='headText'>Testing</h2>
        <Button link={"https://react.dev/learn/build-a-react-app-from-scratch"} name={"Test"} key={1}/>
        <Button link={"https://react.dev/learn/build-a-react-app-from-scratch"} name={"Home Coming"} key={2}/>
        <Button link={"https://react.dev/learn/build-a-react-app-from-scratch"} name={"Checking out"} key={3}/>
        <Button link={"https://react.dev/learn/build-a-react-app-from-scratch"} name={"Awesome"} key={4}/>
    </div>
  )
}

export default Home
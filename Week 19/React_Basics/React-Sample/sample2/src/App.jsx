import {useState} from 'react'
import Input from './Input'

function App() {
  // let count = 0;
  let [count,setCount] = useState(0)

  let [num,setNum] = useState()

  function increase() {
    // count += 1
    // console.log(count)
    count += 1
    setCount(count)
    console.log(count)
  }

  function decrease() {
    // if (count > 0) {
    //   count -= 1
    //   console.log(count)
    // } else {
    //   console.log(count)
    // }
    if (count > 0) {
      count -= 1
      setCount(count)
      console.log(count)
    } else {
      console.log(count)
    }

  }
  return (
    <>
      <h1>Counter</h1>
      <button onClick={increase}>Increase</button>
      <h2>{count}</h2>
      <button onClick={decrease}>Decrease</button>

      <h1>Input</h1>
      <input type="text" value={num} onChange={
        (e) => {
          console.log(e.target.value)
          console.log(typeof e.target.value)
          console.log(typeof num)
          setNum(Number(e.target.value))
          console.log(typeof num)
        }
      } placeholder='Enter a number:'/>

      <h2>{num}</h2>

      <Input/>

    </>
  )
}

export default App

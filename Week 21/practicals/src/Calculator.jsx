import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, reset, setNum1, setNum2, sub } from './calcSlice'

function Calculator() {
    const {num1, num2, result} = useSelector((state) => state.calculus)
    const dispatch = useDispatch()

  return (
    <div>
        <h1>Calculator</h1>
        <h3>Result: {result}</h3>
        <input type="number" value={num1} onChange={(e) => dispatch(setNum1(e.target.value))} />
        <input type="number" value={num2} onChange={(e) => dispatch(setNum2(e.target.value))}/>
        <button onClick={() => dispatch(add())}>Add</button>
        <button onClick={() => dispatch(sub())}>Sub</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Calculator
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase } from './countSllice'

function Counter() {
    const count = useSelector((state) => state.count.value)
    const dispatch = useDispatch()
    const [num,setNum] = useState(0)
  return (
    <div>
        <h1>Counter</h1>
        <h3>Count: {count}</h3>
        <input type="number" onChange={(e) => setNum(Number(e.target.value))} />
        <button onClick={() => dispatch(increase(num))}>Add</button>

    </div>
  )
}

export default Counter
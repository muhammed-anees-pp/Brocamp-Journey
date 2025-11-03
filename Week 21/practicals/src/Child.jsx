import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inc } from './countSllice'

function Child() {
    const msg = useSelector((state) => state.message.text)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Message from Parent: {msg}</h2>
        <button onClick={() => dispatch(inc())}>Increase</button>
    </div>
  )
}

export default Child
import React from 'react'
import Child from './Child'
import { useSelector } from 'react-redux'

function Parent() {
    const count = useSelector((state) => state.count.value)
  return (
    <div>
        <h1>Parent Component</h1>
        <h1>Count: {count}</h1>
        <Child/>

    </div>
  )
}

export default Parent
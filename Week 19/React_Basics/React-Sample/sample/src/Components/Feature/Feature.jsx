import React from 'react'

function Feature({name,age,domain}) {
  return (
    <div>
        <h5>Name: {name}</h5>
        <p>Age: {age}</p>
        <p>Domain: {domain}</p>
    </div>
  )
}

export default Feature
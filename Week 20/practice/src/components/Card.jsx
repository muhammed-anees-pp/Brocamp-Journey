import React from 'react'

function Card({title, description}) {
  return (
    <div style={{border: "1px solid red"}}>
        <h1>{title}</h1>
        <p>{description}</p>

    </div>
  )
}

export default Card
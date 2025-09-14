import React from 'react'
import './Button.css'

function Button({name,link}) {
  return (
    <>
        <a className='lbutton' href={link}>{name}</a>
    </>
  )
}

export default Button
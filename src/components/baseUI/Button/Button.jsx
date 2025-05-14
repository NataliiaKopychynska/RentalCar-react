import React from 'react'
import s from './Button.module.css'

function Button({ children, onClick }) {
  return (
    <button className={s.btnFilled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

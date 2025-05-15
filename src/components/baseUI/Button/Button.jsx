import React from 'react'
import s from './Button.module.css'

function Button({ children, onClick, btnType = 'submit' }) {
  return (
    <button type={btnType} className={s.btnFilled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

import React from 'react'
import s from './Button.module.css'

function ButtonLink({ children, onClick }) {
  return (
    <button className={s.btnLink} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonLink

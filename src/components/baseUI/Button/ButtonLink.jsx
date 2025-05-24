import React from 'react'
import s from './Button.module.css'

function ButtonLink({ children, onClick, addClass }) {
  return (
    <button className={`${s.btnLink} ${addClass}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default ButtonLink

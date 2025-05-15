import React from 'react'

function Icon({ id, onClass }) {
  return (
    <svg className={onClass}>
      <use href={`/symbol-defs.svg#${id}`}></use>
    </svg>
  )
}

export default Icon

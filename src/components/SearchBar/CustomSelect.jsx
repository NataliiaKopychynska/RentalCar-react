import React from 'react'
import { useState } from 'react'
import { useField } from 'formik'
import s from './CustomerSelect.module.css'

function CustomSelect({ label, name, options }) {
  const [field, meta, helpers] = useField(name)
  const [open, setOpen] = useState(false)

  const handleSelect = (option) => {
    helpers.setValue(option)
    setOpen(false)
  }

  return (
    <div className={s.customSelectWrapper}>
      <label>{label}</label>
      <div
        className={s.selectedOption}
        onClick={() => setOpen((prev) => !prev)}
      >
        {field.value || 'Choose option'}
        <svg className={s.svgDrop}>
          <use href="/symbol-defs.svg#icon-drop"></use>
        </svg>
      </div>

      {open && (
        <ul className={s.optionsList}>
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => handleSelect(opt)}
              className={opt === field.value ? 'active' : ''}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}

      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </div>
  )
}

export default CustomSelect

import { useEffect, useRef, useState } from 'react'
import s from './CustomSelect.module.css'
import { useFormikContext } from 'formik'

function CustomSelect({ name, options, placeholder = 'Select' }) {
  const { values, setFieldValue } = useFormikContext()
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  const selectedValue = values[name]

  const handleOpenSelect = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    // onChange(option)
    setFieldValue(name, option)
    setIsOpen(false)
  }

  const handleClickOutside = (e) => {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={s.selectContainer} ref={selectRef}>
      <div onClick={handleOpenSelect} className={s.select_box}>
        <div className={s.selected_value}>{selectedValue || placeholder}</div>
        <svg className={s.svgDrop}>
          <use href="/symbol-defs.svg#icon-drop"></use>
        </svg>
      </div>

      {isOpen && (
        <div className={s.select_options}>
          {options.map((option) => (
            <div
              key={option}
              className={`${s.option} ${
                option === selectedValue ? s.active : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomSelect

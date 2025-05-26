import React from 'react'
import { useField, useFormikContext } from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import s from './Input.module.css'

function Calendar({ name, label }) {
  const { setFieldValue, setFieldTouched } = useFormikContext()
  const [field, meta] = useField(name)
  const { value } = field

  const handleChange = (dates) => {
    setFieldValue(name, dates)
    setFieldTouched(name, true) // <--- ОЦЕ ДОДАЙ
  }
  return (
    <div className={s.inputWrapper}>
      <DatePicker
        selectsRange
        startDate={value?.[0] || null}
        endDate={value?.[1] || null}
        onChange={handleChange}
        isClearable
        placeholderText="Booking date"
        className={s.input}
        calendarClassName="custom-calendar"
      />
      {meta.touched && meta.error ? (
        <div name="rentalPeriod" className={s.error}>
          {meta.error}
        </div>
      ) : null}
    </div>
  )
}

export default Calendar

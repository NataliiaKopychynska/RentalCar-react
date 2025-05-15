import React from 'react'
import { useField, useFormikContext } from 'formik'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import s from './Input.module.css'

function Calendar({ name, label }) {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name)
  const { value } = field

  return (
    <div className="input-wrapper">
      <DatePicker
        selectsRange
        startDate={value?.[0] || null}
        endDate={value?.[1] || null}
        onChange={(dates) => setFieldValue(name, dates)}
        isClearable
        placeholderText="Booking date"
        className={s.input}
        calendarClassName="custom-calendar"
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}

export default Calendar

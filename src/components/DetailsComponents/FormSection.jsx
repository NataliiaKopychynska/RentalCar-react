import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import s from './Details.module.css'
import Calendar from '../baseUI/input/Calendar'
import Button from '../baseUI/Button/Button'
import * as Yup from 'yup'
import toast, { Toaster } from 'react-hot-toast'

const notify = () =>
  toast('Thank you! Your booking request has been sent successfully.')

function FormSection() {
  const validationSchema = Yup.object({
    // rentalPeriod: Yup.array().required('Date is required'),
    rentalPeriod: Yup.array()
      .of(Yup.date().nullable())
      .test('both-dates', 'Select a full date range', (value) => {
        return value?.[0] && value?.[1]
      }),
    name: Yup.string().required('Name is required.'),
    email: Yup.string().email('Email invalid').required('Email is required'),
    comment: Yup.string(),
  })

  return (
    <div>
      <div className={s.labelContainer}>
        <h3 className={s.topicLabel}>Book your car now</h3>
        <h4 className={s.IDCar}>
          Stay connected! We are always ready to help you.
        </h4>
      </div>
      <Formik
        initialValues={{
          rentalPeriod: [null, null],
          name: '',
          email: '',
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          // console.log(values)
          notify()
          resetForm()
        }}
      >
        <Form className={s.inputBox}>
          <Field className={s.input} name="name" placeholder="Name*" />
          <ErrorMessage name="name" component="div" className={s.error} />
          <Field className={s.input} name="email" placeholder="Email*" />
          <ErrorMessage name="email" component="div" className={s.error} />
          <Calendar name="rentalPeriod" />

          <Field className={s.input} name="comment" placeholder="Comment" />

          <Button>Submit</Button>
          <Toaster position="top-center" />
        </Form>
      </Formik>
    </div>
  )
}

export default FormSection

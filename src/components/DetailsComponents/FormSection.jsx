import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import s from './Details.module.css'
import Calendar from '../baseUI/input/Calendar'
import Button from '../baseUI/Button/Button'
import * as Yup from 'yup'

function FormSection() {
  const validationSchema = Yup.object({
    // rentalPeriod: Yup.date('Date is required.').min(
    //   new Date(),
    //   'Date cannot be in the past'
    // ),
    rentalPeriod: Yup.array().required('Date is required'),
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
        onSubmit={(values) => console.log(values)}
      >
        <Form className={s.inputBox}>
          <Field className={s.input} name="name" placeholder="Name*" />
          <ErrorMessage name="name" component="div" className={s.error} />
          <Field className={s.input} name="email" placeholder="Email*" />
          <ErrorMessage name="email" component="div" className={s.error} />
          <Calendar name="rentalPeriod" />
          <ErrorMessage
            name="rentalPeriod"
            component="div"
            className={s.error}
          />

          <Field className={s.input} name="comment" placeholder="Comment" />

          <Button>Submit</Button>
        </Form>
      </Formik>
    </div>
  )
}

export default FormSection

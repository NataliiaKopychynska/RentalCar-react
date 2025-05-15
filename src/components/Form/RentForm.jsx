import React from 'react'
import { Formik, Form } from 'formik'
import Calendar from '../baseUI/input/Calendar'
import Button from '../baseUI/Button/Button'
// import * as Yup from 'yup'

function RentForm() {
  return (
    <div>
      <Formik
        initialValues={{ rentalPeriod: [null, null] }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <Calendar name="rentalPeriod" />
          <Button>Submit</Button>
        </Form>
      </Formik>
    </div>
  )
}

export default RentForm

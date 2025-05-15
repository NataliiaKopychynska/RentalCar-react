import { useState } from 'react'
import Button from '../baseUI/Button/Button'
import s from './SearchBar.module.css'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'

// const carBrands = [
//   'Aston Martin',
//   'Audi',
//   'BMW',
//   'Bentley',
//   'Buick',
//   'Chevrolet',
//   'Chrysler',
//   'GMC',
//   'HUMMER',
// ]
// const prices = [30, 40, 50, 60, 70, 80]

function SearchBar() {
  const [carBrands, setCarBrands] = useState([])

  useEffect(() => {
    axios
      .get('/cars')
      .then((response) => {
        setCarBrands(response.data)
      })
      .catch((error) => {
        console.error('Error fetching brands:', error)
      })
  }, [])

  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <Formik
      initialValues={{
        brand: '',
        rentalPrice: '',
        minMileage: '',
        maxMileage: '',
      }}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Field className={s.input} as="select" name="brand">
            <option value="">Select brand</option>
            <option value="audi">Aston Martin</option>
            <option value="bmw">Audi</option>
            <option value="tesla">BMW</option>
            <option value="">Bentley</option>
            <option value="audi">Buick</option>
            <option value="bmw">Chevrolet</option>
            <option value="tesla">GMC</option>
            <option value="tesla">HUMMER</option>
          </Field>
          <Field type="text" name="rentalPrice" />

          <Field type="text" name="minMileage" />
          <Field type="text" name="maxMileage" />

          <Button type="submit">Search</Button>
        </Form>
      )}
    </Formik>
  )
}

export default SearchBar

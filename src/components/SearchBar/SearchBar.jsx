import { Formik, Form, Field } from 'formik'
import { useSelector } from 'react-redux'
import s from './SearchBar.module.css'
import Button from '../baseUI/Button/Button'
import { useDispatch } from 'react-redux'
import { setFilteredCars } from '../../redux/slice'

function SearchBar() {
  const dispatch = useDispatch()
  const hourPrice = 1000

  //   const cars = useSelector((state) => state.cars.items)
  //   const cars = useSelector((state) => state.cars.allItems)
  //   const brands = [...new Set(cars.map((car) => car.brand))]
  const cars = useSelector((state) => state.cars.allItems) || []
  const brands = [...new Set(cars.map((car) => car.brand))]

  const handleSubmit = (values) => {
    const { brand, rentalPrice, minMileage, maxMileage } = values

    const min = minMileage ? Number(minMileage) : null
    const max = maxMileage ? Number(maxMileage) : null
    const price = rentalPrice ? Number(rentalPrice) : null

    const filtered = cars.filter((car) => {
      const matchBrand = brand ? car.brand === brand : true
      const matchPrice = price ? Number(car.rentalPrice) <= price : true
      const matchMin = min !== null ? car.mileage >= min : true
      const matchMax = max !== null ? car.mileage <= max : true

      return matchBrand && matchPrice && matchMin && matchMax
    })

    dispatch(setFilteredCars(filtered))
  }

  //   console.log(brands)
  //   console.log(cars[0])

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
        <Form className={s.form}>
          <div className={s.selectWrapper}>
            <label htmlFor="brand" className={s.labelGrid}>
              Car brand
            </label>
            <div className={s.selectContainer}>
              <Field className={s.select} as="select" name="brand">
                <option value="">Choose a brand</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </Field>
              <svg className={s.svgDrop}>
                <use href="/symbol-defs.svg#icon-drop"></use>
              </svg>
            </div>
          </div>

          <div className={s.selectWrapper}>
            <label htmlFor="rentalPrice" className={s.labelGrid}>
              Price per hour
            </label>
            <div className={s.selectContainer}>
              <Field className={s.input} as="select" name="rentalPrice">
                <option value="">Choose a price</option>
                {Array.from(
                  { length: hourPrice / 10 },
                  (_, i) => i * 10 + 10
                ).map((price) => (
                  <option key={price} value={price}>
                    {price}
                  </option>
                ))}
              </Field>
              <svg className={s.svgDrop}>
                <use href="/symbol-defs.svg#icon-drop"></use>
              </svg>
            </div>
          </div>

          <div className={s.formDiv}>
            <label htmlFor="minMileage" className={s.labelGrid}>
              Сar mileage / km
            </label>
            <Field
              className={`${s.input} ${s.input1}`}
              type="number"
              name="minMileage"
              placeholder="from"
            />
            <Field
              className={`${s.input} ${s.input2}`}
              type="number"
              name="maxMileage"
              placeholder="to"
            />
          </div>

          <Button type="submit">Search</Button>
        </Form>
      )}
    </Formik>
  )
}

export default SearchBar

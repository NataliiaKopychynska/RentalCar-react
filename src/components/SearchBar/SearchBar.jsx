import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import s from './SearchBar.module.css'
import Button from '../baseUI/Button/Button'
import CustomSelect from './CustomSelect'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars, getBrands, filteredCards } from '../../redux/operations'
import ButtonLink from '../baseUI/Button/ButtonLink'
import { getLikedCars, setPage } from '../../redux/slice'
// import { setPage } from '../../redux/slice'

function SearchBar({ filtersRef }) {
  const dispatch = useDispatch()
  const brands = useSelector((state) => state.cars.brands)
  const [priseArr, setPriseArr] = useState([])
  const maxPrise = 150

  useEffect(() => {
    const prise = []
    for (let i = 10; i <= maxPrise; i += 10) {
      prise.push(i)
    }
    setPriseArr(prise)
  }, [setPriseArr])

  useEffect(() => {
    dispatch(getBrands())
  }, [dispatch])

  const handleSubmit = (values) => {
    filtersRef.current = values
    dispatch(
      filteredCards({
        ...values,
        page: 1,
        shouldReset: true,
      })
    )
    dispatch(setPage(1))
    // console.log('Formik values on submit:', values)
  }

  const handleReset = () => {
    dispatch(
      getAllCars({
        page: 1,
        limit: 12,
        shouldReset: true,
      })
    )
    dispatch(setPage(1))
  }

  const handleLikeCar = () => {
    dispatch(getLikedCars())
  }

  return (
    <div className={s.containerBar}>
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
              <CustomSelect
                name="brand"
                options={brands}
                placeholder="Choose a brand"
              />
            </div>

            <div className={s.selectWrapper}>
              <label htmlFor="rentalPrice" className={s.labelGrid}>
                Price per hour
              </label>
              <CustomSelect
                name="rentalPrice"
                options={priseArr}
                placeholder="Choose a brand"
              />
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
      <ButtonLink addClass={s.btnReset} type="button" onClick={handleReset}>
        Reset
      </ButtonLink>
      <ButtonLink onClick={handleLikeCar}>
        <svg className={s.svgLike}>
          <use href="/symbol-defs.svg#icon-like"></use>
        </svg>
      </ButtonLink>
    </div>
  )
}

export default SearchBar

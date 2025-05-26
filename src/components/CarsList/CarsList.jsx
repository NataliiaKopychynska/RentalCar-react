import React, { useEffect } from 'react'
import s from './Card.module.css'
import { getAllCars } from '../../redux/operations'
import { useSelector, useDispatch } from 'react-redux'
import CarCard from './CarCard'
import ButtonLink from '../baseUI/Button/ButtonLink'
import { setPage } from '../../redux/slice'
import { BeatLoader } from 'react-spinners'

// function CarsList({ filtersRef }) {
function CarsList() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.cars.carItems)
  const page = useSelector((state) => state.cars.page)
  // const newPage = page + 1
  // console.log(newPage)

  const totalPages = useSelector((state) => state.cars?.totalPages || 1)
  console.log(totalPages)

  const loading = useSelector((state) => state.cars.isLoading)

  // useEffect(() => {
  // dispatch(getAllCars({ ...filtersRef.current, page, shouldReset: true }))
  //   // console.log(filtersRef)
  // }, [dispatch, page, filtersRef])
  useEffect(() => {
    dispatch(getAllCars({ page }))
  }, [dispatch, page])

  const handleLoadMore = () => {
    const nextPage = page + 1
    dispatch(setPage(nextPage))
    dispatch(getAllCars({ page: nextPage }))
    // dispatch(getAllCars({ page }))
    // dispatch(setPage(page + 1))
  }

  return (
    <div className={s.containerContent}>
      <div className={s.cardsContainer}>
        {items.map((car) => (
          <CarCard key={car.id} dataCar={car} />
        ))}
      </div>
      {items.length === 0 && !loading && (
        <div className={s.containerNotFoundCar}>
          <h1 className={s.h1Title}>Cars not found</h1>
          <div className={s.svgContainer}>
            <svg className={s.svgCar}>
              <use href="/symbol-defs.svg#icon-car-go"></use>
            </svg>
            <svg className={s.svgRout}>
              <use href="/symbol-defs.svg#icon-rout"></use>
            </svg>
          </div>
        </div>
      )}
      {!loading && totalPages && page < totalPages && (
        <ButtonLink onClick={handleLoadMore}>Load more</ButtonLink>
      )}
      {loading && <BeatLoader />}
    </div>
  )
}

export default CarsList

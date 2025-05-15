import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../../redux/operations'
import CarCard from './CarCard'
import s from './Card.module.css'

function CarsList() {
  const dispatch = useDispatch()
  const cars = useSelector((state) => state.cars.items)
  console.log(cars)

  //   const carArray = cars.cars || []

  useEffect(() => {
    dispatch(getAllCars())
  }, [dispatch])
  //   console.log('cars:', cars)
  //   console.log('Array.isArray(cars):', Array.isArray(cars))
  return (
    <div className={s.cardsContainer}>
      {Array.isArray(cars) ? (
        cars.map((car) => <CarCard key={car.id} dataCar={car} />)
      ) : (
        <p>Loading or no cars available.</p>
      )}
    </div>
  )
}

export default CarsList

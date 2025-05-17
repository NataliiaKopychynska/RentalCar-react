import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../../redux/operations'
import CarCard from './CarCard'
import s from './Card.module.css'
import ButtonLink from '../baseUI/Button/ButtonLink'

function CarsList() {
  const dispatch = useDispatch()

  const items = useSelector((state) => state.cars.items)
  const filtered = useSelector((state) => state.cars.filteredItems)
  const currentPage = useSelector((state) => state.cars.currentPage)
  const isLoading = useSelector((state) => state.cars.isLoading)

  const carsToRender = filtered.length > 0 ? filtered : items
  const uniqueCarsToRender = carsToRender.filter(
    (car, index, self) => index === self.findIndex((c) => c.id === car.id)
  )

  useEffect(() => {
    if (items.length === 0) {
      dispatch(getAllCars(1)) // перша сторінка
    }
  }, [dispatch, items.length])

  const loadMoreAction = () => dispatch(getAllCars(currentPage + 1))

  return (
    <div className={s.cardsContainer}>
      {Array.isArray(uniqueCarsToRender) ? (
        <>
          {uniqueCarsToRender.map((car) => (
            <CarCard key={car.id} dataCar={car} />
          ))}
          {!isLoading && (
            <ButtonLink onClick={loadMoreAction}>Load more</ButtonLink>
          )}
        </>
      ) : (
        <p>Loading or no cars available.</p>
      )}
    </div>
  )
}

export default CarsList

import React, { useState } from 'react'
import s from './Card.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLikeCard } from '../../redux/slice'
// import { likedCars } from '../../redux/slice'

function CarCard({ dataCar }) {
  // const [isLiked, setIsLiked] = useState(false)
  const likedCars = useSelector((state) => state.cars.likedCars)

  const isLiked = likedCars.some((car) => car.id === dataCar.id)

  // const isLiked = useSelector((state) => state.cars.isLiked)

  const dispatch = useDispatch()

  const handleLike = (e) => {
    e.preventDefault()
    // setIsLiked(!isLiked)
    dispatch(toggleLikeCard(dataCar))
  }

  const addressCar = dataCar.address.split(',')

  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <img className={s.img} src={dataCar.img} />
        <svg
          className={`${s.iconLike} ${isLiked ? s.iconLikeActive : ''}`}
          onClick={handleLike}
        >
          <use href="/symbol-defs.svg#icon-like"></use>
        </svg>
      </div>
      <div className={s.titleContainer}>
        <h3>
          {dataCar.brand}
          <span className={s.titleSpan}> {dataCar.model} </span>
          {dataCar.year}
        </h3>
        <h3>${dataCar.rentalPrice}</h3>
      </div>
      <div>
        <p className={s.paragraf}>
          {addressCar[1]}
          <span> | </span>
          {addressCar[2]}
          <span> | </span>
          {dataCar.rentalCompany}
          <span> | </span> <br />
          {dataCar.type}
          <span> | </span>
          {`${dataCar.mileage}km`}
        </p>
      </div>
      <Link to={`/cars/${dataCar.id}`} className={s.btnFilled}>
        Read more
      </Link>
    </div>
  )
}

export default CarCard

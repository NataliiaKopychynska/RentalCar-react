import React from 'react'
import s from './Card.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLike } from '../../redux/slice'

function CarCard({ dataCar }) {
  const dispatch = useDispatch()
  const likedCars = useSelector((state) => state.cars.likedCars)
  const isLiked = likedCars.includes(dataCar.id)

  const addressCar = dataCar.address.split(',')
  //   console.log(addressCar)

  const handleLike = () => {
    dispatch(toggleLike(dataCar.id))
  }

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

import React from 'react'
import s from './Details.module.css'
import Icon from '../baseUI/Icons/Icon'

function DetailsTitle({ dataCar }) {
  const addressCar = dataCar.address.split(',')
  //   console.log(addressCar)

  return (
    <div>
      <section className={s.section}>
        <div>
          <h2>
            {dataCar.brand}, {dataCar.model}
          </h2>
          <h4>Id: {dataCar.mileage}</h4>
        </div>
        <div>
          <Icon id="icon-location" onClass={s.icon} />
          <p>
            {addressCar[1]}, {addressCar[2]}
          </p>
          <p>Mileage: {dataCar.mileage}km</p>
        </div>
        <h3>${dataCar.rentalPrice}</h3>
        <p>{dataCar.description}</p>
      </section>
      <section className={s.section}></section>
    </div>
  )
}

export default DetailsTitle

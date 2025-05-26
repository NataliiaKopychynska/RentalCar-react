import React from 'react'
import s from './Details.module.css'
import Icon from '../baseUI/Icons/Icon'

function DetailsTitle({ dataCar }) {
  const addressCar = dataCar.address.split(',')

  return (
    <div>
      <div className={s.divFlexRow}>
        <h2 className={s.h2}>
          {dataCar.brand}, {dataCar.model}
        </h2>
        <h4 className={s.IDCar}>Id: {dataCar.mileage}</h4>
      </div>
      <div className={s.divFlexRow}>
        <div className={s.itemContainer}>
          <Icon id="icon-location" onClass={s.icon} />
          <p>
            {addressCar[1]}, {addressCar[2]}
          </p>
        </div>
        <p>Mileage: {dataCar.mileage}km</p>
      </div>
      <h3 className={s.prise}>${dataCar.rentalPrice}</h3>
      <p>{dataCar.description}</p>

      <section className={s.section}>
        <div>
          <h3 className={s.topicContainer}>Rental Conditions:</h3>
          <div className={s.itemsContainer}>
            {dataCar.rentalConditions.map((item, i) => (
              <div key={i} className={s.itemContainer}>
                <Icon id="icon-check-circle" onClass={s.icon} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className={s.topicContainer}>Rental Conditions:</h3>
          <div className={s.itemsContainer}>
            <div className={s.itemContainer}>
              <Icon id="icon-calendar" onClass={s.icon} />
              <p>Year: {dataCar.year}</p>
            </div>

            <div className={s.itemContainer}>
              <Icon id="icon-car" onClass={s.icon} />
              <p>Type: {dataCar.type}</p>
            </div>

            <div className={s.itemContainer}>
              <Icon id="icon-fuel-pump" onClass={s.icon} />
              <p>Fuel Consumption: {dataCar.fuelConsumption}</p>
            </div>

            <div className={s.itemContainer}>
              <Icon id="icon-gear" onClass={s.icon} />
              <p>Engine Size: {dataCar.engineSize}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className={s.topicContainer}>Accessories and functionalities:</h3>
          <div className={s.itemsContainer}>
            {dataCar.accessories.map((item, i) => (
              <div key={i} className={s.itemContainer}>
                <Icon id="icon-check-circle" onClass={s.icon} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default DetailsTitle

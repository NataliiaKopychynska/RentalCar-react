import React from 'react'
import Button from '../components/baseUI/Button/Button'
import s from './Page.module.css'
import { Link } from 'react-router-dom'
import buttonCSS from '../components/baseUI/Button/Button.module.css'

function HomePage() {
  return (
    <div className={s.containerHome}>
      <div className={s.titleContainer}>
        <h1 className={s.h1Title}>Find your perfect rental car</h1>
        <h3 className={s.pTitle}>
          Reliable and budget-friendly rentals for any journey
        </h3>
        {/* <Button>View Catalog</Button> */}
        <Link to="catalog" className={buttonCSS.btnFilled}>
          View Catalog
        </Link>
      </div>
    </div>
  )
}

export default HomePage

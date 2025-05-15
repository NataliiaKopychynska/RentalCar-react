import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import s from './Page.module.css'
import CarsList from '../components/CarsList/CarsList'

function CatalogPage() {
  return (
    <div className={s.containerCatalog}>
      {/* <SearchBar /> */}
      <CarsList />
    </div>
  )
}

export default CatalogPage

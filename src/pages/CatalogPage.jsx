import React, { useRef } from 'react'
import s from './Page.module.css'
import SearchBar from '../components/SearchBar/SearchBar'
import CarsList from '../components/CarsList/CarsList'

function CatalogPage() {
  const filtersRef = useRef({})

  return (
    <div className={s.containerCatalog}>
      <SearchBar filtersRef={filtersRef} />
      <CarsList filtersRef={filtersRef} />
    </div>
  )
}

export default CatalogPage

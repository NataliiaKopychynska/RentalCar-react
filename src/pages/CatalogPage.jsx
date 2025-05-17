import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import s from './Page.module.css'
import CarsList from '../components/CarsList/CarsList'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCars } from '../redux/operations'

function CatalogPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCars(1))
  }, [dispatch])
  return (
    <div className={s.containerCatalog}>
      <SearchBar />
      <CarsList />
    </div>
  )
}

export default CatalogPage

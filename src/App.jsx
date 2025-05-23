import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setLikedCars } from './redux/slice'
function App() {
  const dispatch = useDispatch()
  const likedCars = useSelector((state) => state.cars.likedCars)

  useEffect(() => {
    const saved = localStorage.getItem('likedCars')

    if (saved) {
      const parsed = JSON.parse(saved)
      dispatch(setLikedCars(parsed))
    }
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('likedCars', JSON.stringify(likedCars))
  }, [likedCars])
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App

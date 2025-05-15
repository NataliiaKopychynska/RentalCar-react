import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Button from './components/baseUI/Button/Button'
import ButtonLink from './components/baseUI/Button/ButtonLink'
import IconStatic from './components/baseUI/Icons/IconStatic'
// import s from './components/baseUI/Icons/Icons.module.css'
function App() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  )
}

export default App

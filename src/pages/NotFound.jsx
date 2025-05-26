import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import s from './Page.module.css'

function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true })
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className={s.container}>
      <h1 className={s.title}>404</h1>
      <p className={s.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className={s.homeLink}>
        Go back home
      </Link>
    </div>
  )
}

export default NotFound

import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true })
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <h1>
      Page not found...
      <br />
      Page not found...
      <br />
      Page not found...
      <br />
      Page not found...
      <br />
      Page not found...
      <br />
      Page not found...
      <br />
    </h1>
  )
}

export default NotFound

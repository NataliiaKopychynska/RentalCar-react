import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import clsx from 'clsx'

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.activeLink)
}

function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <p className={s.logo}>
          Rental
          <span className={s.accent}>Car</span>
        </p>
        <nav className={s.navContainer}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
          <NavLink className={buildLinkClass} to="/catalog">
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header

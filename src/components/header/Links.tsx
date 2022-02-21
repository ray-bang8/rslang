import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthButton from './AuthButton'
import Logout from './Logout'

function Links(props: any) {
  const { linkList } = props
  return (
    <ul className={linkList ? 'active nav__ul' : ' nav__ul'}>
      <li className="nav__ul-li">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="nav__ul-li">
        <NavLink to="/ebook">E-book</NavLink>
      </li>
      <li className="nav__ul-li">
        <NavLink to="/games">Games</NavLink>
      </li>
      <li className="nav__ul-li">
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li className="nav__ul-li">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="nav__ul-li">
        {(JSON.parse(localStorage.getItem('userData')!).message === 'Authenticated' && JSON.parse(localStorage.getItem('userData')!).name) ? (
          <NavLink to="/">
            <Logout />
          </NavLink>
        ) : (
          <NavLink to="/login">
            <AuthButton />
          </NavLink>
        )}
      </li>
    </ul>
  )
}

export default Links

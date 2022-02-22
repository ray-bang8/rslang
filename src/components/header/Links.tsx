import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthButton from './AuthButton'

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
      {/* <li className="nav__ul-li"> */}
      {/* </li> */}

    </ul>
  )
}

export default Links

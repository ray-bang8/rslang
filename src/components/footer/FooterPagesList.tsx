import React from 'react'
import {
  NavLink
} from 'react-router-dom'

function FooterPagesList() {
  return (
    <div>
      <ul className="pages">
        <li className="pages__title header-list">Pages</li>
        <li className="pages__li">
          <NavLink to="/main">Home</NavLink>
        </li>
        <li className="pages__li">
          <NavLink to="/e-book">E-book</NavLink>
        </li>
        <li className="pages__li">
          <NavLink to="/games">Games</NavLink>
        </li>
        <li className="pages__li">
          <NavLink to="/statistics">Statistics</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default FooterPagesList

import React, { useState } from 'react'
import './header.css'
import Links from './Links'
import Auth from './Auth'
import '../../fonts/font-awesome-4.7.0/css/font-awesome.min.css'

function Header() {
  const [linkList, setLinkList] = useState(false)
  return (
    <header>
      <nav className="navbar">
        <img src={require('../../img/logo.png')} className="nav__logo" />
        <i
          className="fa fa-bars bar-icon"
          aria-hidden="true"
          onClick={(e) => setLinkList(!linkList)}
        ></i>
        <Links setLinkList={setLinkList} linkList={linkList} />
        <Auth />
      </nav>
    </header>
  )
}

export default Header

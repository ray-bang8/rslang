import { faBars } from '@fortawesome/fontawesome-free-solid'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import AuthButton from './AuthButton'
import Links from './Links'
import './header.css'

const logo = require('../../img/logo.png')

const bars = faBars as IconProp

function Header() {
  const [linkList, setLinkList] = useState(false)
  return (
    <header>
      <nav className="navbar">
        <img alt="logo-icon" className="nav__logo" src={logo} />

        <FontAwesomeIcon
          className="fa fa-bars bar-icon"
          icon={bars}
          onClick={() => setLinkList(!linkList)}
        />
        <Links linkList={linkList} setLinkList={setLinkList} />
        <AuthButton />
      </nav>
    </header>
  )
}

export default Header

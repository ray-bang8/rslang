import './header.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import AuthButton from './AuthButton'
import Links from './Links'

function Header() {
  const [linkList, setLinkList] = useState(false)
  return (
    <header>
      <nav className="navbar">
        <img
          alt="logo-icon"
          className="nav__logo"
          /* eslint-disable global-require */
          src={require('../../img/logo.png')}
          /* eslint-enable global-require */
        />
        {/* <FontAwesomeIcon
          className="fa fa-bars bar-icon"
          icon={faBars}
          onClick={() => setLinkList(!linkList)}
        /> */}
        <Links linkList={linkList} setLinkList={setLinkList} />
        <AuthButton />
      </nav>
    </header>
  )
}

export default Header

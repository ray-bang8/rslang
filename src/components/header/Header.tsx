import './header.css'
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
        <img
          alt=""
          aria-hidden={true}
          className="bar-icon"
          onClick={() => setLinkList(!linkList)}
          onKeyPress={() => setLinkList(!linkList)}
          src="https://www.clipartmax.com/png/middle/358-3587928_download-burger-menu-icon-orange-clipart-hamburger-hamburger-menu-icon-orange.png"
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

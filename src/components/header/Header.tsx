import './header.css'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Links from './Links'

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

      </nav>

    </header>

  )

}


export default Header

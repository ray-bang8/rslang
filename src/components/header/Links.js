import React, { useState } from 'react'

function Links(props) {
  const setLinkList = props.setLinkList
  const linkList = props.linkList
  return (
    <ul className={linkList ? 'active nav__ul' : ' nav__ul'}>
      <li className="nav__ul-li">
        <a href="">Home</a>
      </li>
      <li className="nav__ul-li">
        <a href="">E-book</a>
      </li>
      <li className="nav__ul-li">
        <a href="">Games</a>
      </li>
      <li className="nav__ul-li">
        <a href="">Statistics</a>
      </li>
      <li className="nav__ul-li">
        <a href="">About</a>
      </li>
    </ul>
  )
}

export default Links

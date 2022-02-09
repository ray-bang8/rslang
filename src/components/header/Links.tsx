import React from 'react'

function Links(props: any) {
  const { linkList } = props
  return (
    <ul className={linkList ? 'active nav__ul' : ' nav__ul'}>
      <li className="nav__ul-li">
        <a href="a">Home</a>
      </li>
      <li className="nav__ul-li">
        <a href="a">E-book</a>
      </li>
      <li className="nav__ul-li">
        <a href="a">Games</a>
      </li>
      <li className="nav__ul-li">
        <a href="a">Statistics</a>
      </li>
      <li className="nav__ul-li">
        <a href="a">About</a>
      </li>
    </ul>
  )
}

export default Links

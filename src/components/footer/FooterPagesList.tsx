import React from 'react'

function FooterPagesList() {
  return (
    <div>
      <ul className="pages">
        <li className="pages__title header-list">Pages</li>
        <li className="pages__li">
          <a href="pages">Home</a>
        </li>
        <li className="pages__li">
          <a href="pages">E-book</a>
        </li>
        <li className="pages__li">
          <a href="pages">Games</a>
        </li>
        <li className="pages__li">
          <a href="pages">Statistics</a>
        </li>
      </ul>
    </div>
  )
}

export default FooterPagesList

import React from 'react'

const img = require('../../img/rslogo.png')

function LeftSide() {
  return (
    <div className="left-slide">
      <div className="left__wrapper">
        <img alt="logo" className="left__img" src={img} />
        <p className="left__description">
          This is a prototype of language learning platform
          which is developed by the team of young enthusiasts
        </p>
      </div>
    </div>
  )
}

export default LeftSide

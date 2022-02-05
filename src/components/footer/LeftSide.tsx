import React from 'react'

const img = require('../../img/rslogo.png')

function LeftSide() {
  return (
    <div className="left-slide">
      <div className="left__wrapper">
        <img alt="logo" className="left__img" src={img} />
        <p className="left__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
    </div>
  )
}

export default LeftSide

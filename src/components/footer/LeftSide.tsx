import React from 'react'

function LeftSide() {
  return (
    <div className="left-slide">
      <div className="left__wrapper">
        <img
          alt="logo"
          className="left__img"
          /* eslint-disable global-require */
          src={require('../../img/rslogo.png')}
          /* eslint-enable global-require */
        />
        <p className="left__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
    </div>
  )
}

export default LeftSide

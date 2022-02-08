import React from 'react'

const fbIcon = require('../../img/fb.svg')
const instaIcon = require('../../img/insta.svg')
const twitterIcon = require('../../img/twit.svg')

function Follow() {
  return (
    <div>
      <h5 className="follow__title header-list">Follow Us</h5>
      <div className="follow__icon-wrapper">
        <a className="follow__icon" href="github.com">
          <img alt="facebook icon" src={fbIcon} />
        </a>
        <a className="follow__icon" href="github.com">
          <img alt="twitter icon" src={twitterIcon} />
        </a>
        <a className="follow__icon" href="github.com">
          <img alt="insta icon" src={instaIcon} />
        </a>
      </div>
    </div>
  )
}

export default Follow

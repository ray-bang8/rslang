import React from 'react'

// import fbIcon from '../../img/fb.svg'

const fbIcon = require('../../img/fb.png')
const instaIcon = require('../../img/insta.png')
const twitterIcon = require('../../img/twit.png')

function Follow() {
  return (
    <div>
      <h5 className="follow__title header-list">Follow Us</h5>
      <div className="follow__icon-wrapper">
        <a className="follow__icon" href="github.com">
          <img alt="facebook icon" className="folllow__i" src={fbIcon} />
        </a>
        <a className="follow__icon" href="github.com">
          <img alt="twitter icon" className="folllow__i" src={twitterIcon} />
        </a>
        <a className="follow__icon" href="github.com">
          <img alt="insta icon" className="folllow__i" src={instaIcon} />
        </a>
      </div>
    </div>
  )
}

export default Follow

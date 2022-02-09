import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Follow() {
  return (
    <div>
      <h5 className="follow__title header-list">Follow Us</h5>
      <div className="follow__icon-wrapper">
        <a className="follow__icon" href="github.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="follow__icon" href="github.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className="follow__icon" href="github.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  )
}

export default Follow

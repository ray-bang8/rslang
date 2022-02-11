import {
  faInstagram,
  faFacebookSquare,
  faTwitterSquare
} from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Follow() {
  return (
    <div>
      <h5 className="follow__title header-list">Follow Us</h5>
      <div className="follow__icon-wrapper">
        <a className="follow__icon" href="github.com">
          {/*  @ts-ignore */}
          <FontAwesomeIcon className="follow__i" icon={faFacebookSquare} />
        </a>
        <a className="follow__icon" href="github.com">
          {/*  @ts-ignore */}
          <FontAwesomeIcon className="follow__i" icon={faInstagram} />
        </a>
        <a className="follow__icon" href="github.com">
          {/*  @ts-ignore */}
          <FontAwesomeIcon className="follow__i" icon={faTwitterSquare} />
        </a>
      </div>
    </div>
  )
}

export default Follow

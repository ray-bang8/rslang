import {
  faInstagram,
  faFacebookSquare,
  faTwitterSquare
} from '@fortawesome/fontawesome-free-brands'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const fbIcon = faFacebookSquare as IconProp
const instaIcon = faInstagram as IconProp
const twitIcon = faTwitterSquare as IconProp

function Follow() {
  return (
    <div>
      <h5 className="follow__title header-list">Follow Us</h5>
      <div className="follow__icon-wrapper">
        <a className="follow__icon" href="github.com">
          <FontAwesomeIcon className="follow__i" icon={fbIcon} />
        </a>
        <a className="follow__icon" href="github.com">
          <FontAwesomeIcon className="follow__i" icon={instaIcon} />
        </a>
        <a className="follow__icon" href="github.com">
          <FontAwesomeIcon className="follow__i" icon={twitIcon} />
        </a>
      </div>
    </div>
  )
}

export default Follow

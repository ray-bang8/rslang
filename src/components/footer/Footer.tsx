import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import './footer.scss'

function Footer() {
  return (
    <footer>
      <div className="footer">
        <LeftSide />
        <RightSide />
      </div>
      <div className="footer__copyright">
        Copyright © 2022. RS-School. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import Follow from './Follow'
import FooterPagesList from './FooterPagesList'
import FooterProfilesList from './FooterProfilesLists.'

function RightSide() {
  return (
    <div className="right-slide">
      <FooterPagesList />
      <FooterProfilesList />
      <Follow />
    </div>
  )
}

export default RightSide

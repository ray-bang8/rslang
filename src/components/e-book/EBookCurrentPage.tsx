import React from 'react'

interface PropCurPage {
  curPage: number
}

function EBookCurrentPage(props: PropCurPage) {
  const { curPage } = props

  return (
    <div className="current-page">
      <span>{curPage}/30</span>
    </div>
  )
}

export default EBookCurrentPage

import React from 'react'

interface PropPrevPage {
  setPrevPage: (value: number) => void
  curPage: number
}

function EBookPrevPage(props: PropPrevPage) {
  const { setPrevPage, curPage } = props

  return (
    <button
      className="prev-page-btn"
      onClick={() => (curPage !== 1 ? setPrevPage(curPage - 1) : '')}
      type="button"
    >
      Prev Page
    </button>
  )
}

export default EBookPrevPage

import React from 'react'

interface PropNextPage {
  setNextPage: (value: number) => void
  curPage: number
}

function EBookNextPage(props: PropNextPage) {
  const { setNextPage, curPage } = props

  return (
    <button
      className="next-page-btn"
      onClick={() => (curPage !== 30 ? setNextPage(curPage + 1) : ' ')}
      type="button"
    >
      Next Page
    </button>
  )
}

export default EBookNextPage

import React from 'react'

interface PropNextPage {
  setNextPage: (value: number) => void
  curPage: number
}

function EBookNextPage(props: PropNextPage) {
  const { setNextPage, curPage } = props

  const handleClickBtn = () => {
    if (curPage !== 30) {
      setNextPage(curPage + 1)
      localStorage.setItem('curPage', `${curPage + 1}`)
    }
  }

  return (
    <button className="next-page-btn" onClick={handleClickBtn} type="button">
      Next Page
    </button>
  )
}

export default EBookNextPage

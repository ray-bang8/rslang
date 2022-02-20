import React, { Dispatch, SetStateAction } from 'react'

interface PropPrevPage {
  setPrevPage: Dispatch<SetStateAction<number>>
  curPage: number
}

function EBookPrevPage(props: PropPrevPage) {
  const { setPrevPage, curPage } = props

  const handleClickBtn = () => {
    if (curPage !== 1) {
      setPrevPage(curPage - 1)
      localStorage.setItem('curPage', `${curPage - 1}`)
    }
  }

  return (
    <button className="prev-page-btn" onClick={handleClickBtn} type="button">
      Prev Page
    </button>
  )
}

export default EBookPrevPage

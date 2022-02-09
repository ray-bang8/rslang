import React from 'react'
import './navigator.css'

function EBookNavPages(props: NavPageProps) {
  const { setNavStatus, setPage, setPageState } = props

  const handleClickBtn = (e: React.MouseEvent) => {
    const page = (e.target as Element).textContent
    setPage(Number(page))
    setPageState(false)
    setNavStatus(false)
  }

  return (
    <div className="nav-pages">
      <h5>Choose page</h5>
      <ul className="nav-pages__ul">
        <li>
          <button onClick={handleClickBtn} type="button">
            1
          </button>
        </li>
        <li>
          <button onClick={handleClickBtn} type="button">
            2
          </button>
        </li>
        <li>
          <button onClick={handleClickBtn} type="button">
            3
          </button>
        </li>
        <li>
          <button onClick={handleClickBtn} type="button">
            4
          </button>
        </li>
        <li>
          <button onClick={handleClickBtn} type="button">
            5
          </button>
        </li>
        <li>
          <button onClick={handleClickBtn} type="button">
            6
          </button>
        </li>
      </ul>
    </div>
  )
}

export default EBookNavPages

interface NavPageProps {
  /* eslint-disable no-unused-vars */
  setPage: (value: number) => void
  setNavStatus: (value: boolean) => void
  setPageState: (value: boolean) => void
}

/* eslint-enable no-unused-vars */

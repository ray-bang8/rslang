import React from 'react'
import './navigator.css'

function EBookNavPages(props: NavPageProps) {
  const { setNavStatus, setPage, setPageState } = props

  const handleClickBtn = (e: React.MouseEvent) => {
    const page = (e.target as Element).textContent
    setPage(Number(page))
    setPageState(false)
    setNavStatus(false)
    localStorage.setItem('curPage', `${page}`)
    localStorage.setItem('navStatus', `${false}`)
  }
  const pages: number[] = []

  for (let i = 0; i < 31; i++) {
    pages.push(i)
  }

  return (
    <div className="nav-pages">
      <h5>Choose page</h5>
      <ul className="nav-pages__ul">
        {pages.map((el) => (
          <li>
            <button key={`${el}`} onClick={handleClickBtn} type="button">
              {el}
            </button>
          </li>
        ))}
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

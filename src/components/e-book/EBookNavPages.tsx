import React, { Dispatch, SetStateAction } from 'react'
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
  const pages: Array<{ id: number; num: number }> = []
  const maxSizePages = 30

  for (let i = 0; i < maxSizePages; i++) {
    const pageObject = {
      id: +`68245${i}`,
      num: i + 1
    }
    pages.push(pageObject)
  }

  return (
    <div className="nav-pages">
      <h5>Choose page</h5>
      <ul className="nav-pages__ul">
        {pages.map((el) => (
          <li key={el.id} onClick={handleClickBtn} role="presentation">
            <button type="button">{el.num}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EBookNavPages

interface NavPageProps {
  setPage: Dispatch<SetStateAction<number>>
  setNavStatus: Dispatch<SetStateAction<boolean>>
  setPageState: Dispatch<SetStateAction<boolean>>
}

/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
// @ts-ignore
import bookIcon from '../../img/book.png'
import EBookNavPages from './EBookNavPages'
import './navigator.css'

interface NavProps {
  setPages: (value: number) => void
  setGr: (value: number | string | null) => void
  setNavStatus: (value: boolean) => void
}

function EBookNavigator(props: NavProps) {
  const { setNavStatus, setGr, setPages } = props
  const [pageStatus, setPageStatus] = useState(false)

  const handleClickBtn = (e: React.MouseEvent) => {
    const id = (e.target as HTMLElement).getAttribute('id')
    setGr(id)
    localStorage.setItem('curGroup', `${id}`)
    setPageStatus(!pageStatus)
  }

  return (
    <div className="navigator">
      {pageStatus ? (
        <EBookNavPages
          setNavStatus={setNavStatus}
          setPage={setPages}
          setPageState={setPageStatus}
        />
      ) : (
        ''
      )}
      <ul className="navigator__ul">
        <li className="nav__icon">
          <img alt="bookLogo" className="bookIcon" src={`${bookIcon}`} />
          <span className="navigator__title">EBook</span>
        </li>
        <li>
          <button id="1" onClick={handleClickBtn} type="button">
            Chapter 1
          </button>
        </li>
        <li>
          <button id="2" onClick={handleClickBtn} type="button">
            Chapter 2
          </button>
        </li>
        <li>
          <button id="3" onClick={handleClickBtn} type="button">
            Chapter 3
          </button>
        </li>
        <li>
          <button id="4" onClick={handleClickBtn} type="button">
            Chapter 4
          </button>
        </li>
        <li>
          <button id="5" onClick={handleClickBtn} type="button">
            Chapter 5
          </button>
        </li>
        <li>
          <button id="6" onClick={handleClickBtn} type="button">
            Chapter 6
          </button>
        </li>
      </ul>
    </div>
  )
}

export default EBookNavigator

/* eslint-enable no-unused-vars */

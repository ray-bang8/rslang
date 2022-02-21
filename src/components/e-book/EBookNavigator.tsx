import React, { useState, Dispatch, SetStateAction } from 'react'
import EBookNavPages from './EBookNavPages'
import './navigator.css'

const bookIcon = require('../../img/book.png')

interface NavProps {
  setPages: Dispatch<SetStateAction<number>>
  setGr: Dispatch<SetStateAction<number>>
  setNavStatus: Dispatch<SetStateAction<boolean>>
}

function EBookNavigator(props: NavProps) {
  const { setNavStatus, setGr, setPages } = props
  const [pageStatus, setPageStatus] = useState(false)

  const handleClickBtn = (e: React.MouseEvent) => {
    const id = (e.target as HTMLElement).getAttribute('id')
    setGr(Number(id) - 1)
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

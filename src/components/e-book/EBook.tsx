import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './ebook.css'
import EBookCurrentPage from './EBookCurrentPage'
import EBookNavigator from './EBookNavigator'
import EBookNextPage from './EBookNextPage'
import EBookPrevPage from './EBookPrevPage'
import WordCardEbook from './WordCardEbook'

function EBook() {
  const [data, setData] = useState([
    {
      word: 'Loading',
      id: 0,
    },
  ])

  const [group, setGroup] = useState(1)
  const [page, setPage] = useState(1)
  const [navStatus, setNavStatus] = useState(true)

  useEffect(() => {
    const basicURL = 'https://rslang-team48.herokuapp.com/'
    const getPage = localStorage.getItem('curPage')
    const getGroup = localStorage.getItem('curGroup')
    const getNavStatus = localStorage.getItem('navStatus')

    if (getNavStatus === 'true') {
      setNavStatus(true)
    } else {
      setNavStatus(false)
      setGroup(Number(getGroup))
      setPage(Number(getPage))
    }

    fetch(`${basicURL}words?group=${group}&page=${page}`)
      .then((i) => i.json())
      .then((i) => {
        setData(i)
      })
      .catch((err) => {
        throw err
      })
  }, [group, page])

  return (
    <div>
      <Header />
      <div className="cards-wrapper">
        {navStatus ? (
          <EBookNavigator
            setGr={setGroup}
            setNavStatus={setNavStatus}
            setPages={setPage}
          />
        ) : (
          data.map((el) => <WordCardEbook data={el} key={el.id} />)
        )}

        <button
          className="menu-wrapper"
          onClick={() => {
            setNavStatus(true)
            localStorage.setItem('navStatus', `${true}`)
          }}
          type="button"
        >
          Menu
        </button>
        <EBookPrevPage curPage={page} setPrevPage={setPage} />
        <EBookNextPage curPage={page} setNextPage={setPage} />
        <EBookCurrentPage curPage={page} />
        <div className="blured-opacity"> </div>
      </div>
      <Footer />
    </div>
  )
}
export default EBook

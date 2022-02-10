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
      id: '5e9f5ee35eb9e72bc21af70c',
      group: 1,
      page: 1,
      word: 'anxious',
      image: 'files/02_0621.jpg',
      audio: 'files/02_0621.mp3',
      audioMeaning: 'files/02_0621_meaning.mp3',
      audioExample: 'files/02_0621_example.mp3',
      textMeaning: '<i>Anxious</i> means feeling worried or nervous.',
      textExample:
        'She was <b>anxious</b> about not making her appointment on time.',
      transcription: '[ǽŋkʃəs]',
      textExampleTranslate:
        'Она беспокоилась о том, чтобы не договориться о встрече вовремя',
      textMeaningTranslate:
        'Тревожно означает чувствовать себя обеспокоенным или нервным',
      wordTranslate: 'озабоченный',
    },
  ])

  const [group, setGroup] = useState(1)
  const [page, setPage] = useState(1)
  const [navStatus, setNavStatus] = useState(true)

  useEffect(() => {
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

    fetch(
      `https://rslang-team48.herokuapp.com/words?group=${group}&page=${page}`
    )
      .then((i) => {
        if (i) return i.json()
        return i
      })
      .then((i) => {
        setData(i)
        console.log(data)
      })
  }, [group, page])

  return (
    <div>
      <Header />
      <div className="cards-wrapper">
        {navStatus ? (
          <EBookNavigator
            // @ts-ignore
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
      </div>
      <Footer />
    </div>
  )
}
export default EBook

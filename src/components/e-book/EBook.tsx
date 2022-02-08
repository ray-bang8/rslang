import React, { useEffect, useState } from 'react'
// import Footer from '../footer/Footer'
// import Header from '../header/Header'
import './ebook.css'
import EBookNavigator from './EBookNavigator'
import WordCardEbook from './WordCardEbook'

// interface Card {
//   audio: string
//   audioExample: string
//   audioMeaning: string
//   group: number
//   id: string | number
//   image: string
//   page: number
//   textExample: string
//   textExampleTranslate: string
//   textMeaning: string
//   textMeaningTranslate: string
//   transcription: string
//   word: string
//   wordTranslate: string
// }

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
      wordTranslate: 'озабоченный'
    }
  ])

  const [group, setGroup] = useState(1)
  const [page, setPage] = useState(1)
  const [navStatus, setNavStatus] = useState(true)

  useEffect(() => {
    fetch(
      `https://rslang-team48.herokuapp.com/words?group=${group}&page=${page}`
    )
      .then((i) => {
        console.log(i)
        if (i) return i.json()
        return i
      })
      .then((i) => {
        setData(i)
        console.log(page, 'page')
        console.log(group, 'group')
        console.log(navStatus, 'navStatus')
        console.log(data)
      })
  }, [group, page])

  return (
    <div>
      <div className="cards-wrapper">
        {navStatus ? (
          <EBookNavigator
            // @ts-ignore
            setGr={setGroup}
            setNavStatus={setNavStatus}
            // @ts-ignore
            setPages={setPage}
          />
        ) : (
          data.map((el) => <WordCardEbook data={el} key={el.id} />)
        )}
      </div>
    </div>
  )
}
export default EBook

import React, { useEffect, useState } from 'react'
import './ebook.css'
import WordCardEbook from './WordCardEbook'

interface Card {
  audio: string
  audioExample: string
  audioMeaning: string
  group: number
  id: string | number
  image: string
  page: number
  textExample: string
  textExampleTranslate: string
  textMeaning: string
  textMeaningTranslate: string
  transcription: string
  word: string
  wordTranslate: string
}

function EBook() {
  const [data, setData] = useState([])
  const [group, setGroup] = useState(1)

  useEffect(() => {
    fetch(`https://rslang-team48.herokuapp.com/words?group=${group}&page=1`)
      .then((i) => i.json())
      .then((i) => {
        console.log(i)
        setData(i)
      })
  }, [])

  return (
    <div>
      <div className="cards-wrapper">{/* <WordCardEbook data={data} /> */}</div>
    </div>
  )
}

export default EBook

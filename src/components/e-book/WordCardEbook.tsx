import React, { useEffect, useState } from 'react'
import BottomSideCard from './BottomSideCard'
import EBookWordBtns from './EBookWordBtns'
import RandomBgColor from './RandomBgColor'
import UpSideCard from './UpSideCard'

interface propCard {
  data: Card
}
const userData = {
  message: 'Authenticated'
}
localStorage.setItem('userData', JSON.stringify(userData))

function WordCardEbook(props: propCard) {
  const { data } = props
  const styleBg = RandomBgColor()
  const [authStatus, setAuthStatus] = useState(false)

  const authenticated = localStorage.getItem('userData')
  // const [aggregatedWords, setAggregatedWords] = useState([])
  // const basicURL = 'https://rslang-team48.herokuapp.com/'
  // const id = '620017fcc1edf60016d3eb88authenticated'
  // // const { id } = authenticated

  useEffect(() => {
    if (authenticated) {
      setAuthStatus(true)
    }
    //   fetch(`${basicURL}words/users/${id}/words`)
    //   fetch(
    //     'https://rslang-team48.herokuapp.com/users/620017fcc1edf60016d3eb88/words'
    //   )
    //     .then((i) => i.json())
    //     .then((i) => {
    //       console.log(i)
    //     })
  }, [])

  return (
    <figure className={authStatus ? 'card active' : 'card'}>
      <EBookWordBtns />
      <UpSideCard card={data} styleBg={`${styleBg}`} />
      <BottomSideCard card={data} styleBg={`${styleBg}`} />
    </figure>
  )
}

export default WordCardEbook

type Card = {
  audio?: string
  audioExample?: string
  audioMeaning?: string
  group?: number
  id?: string | number
  image?: string
  page?: number
  textExample?: string
  textExampleTranslate?: string
  textMeaning?: string
  textMeaningTranslate?: string
  transcription?: string
  word?: string
  wordTranslate?: string
  data?: object | string
}

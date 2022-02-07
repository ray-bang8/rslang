import React from 'react'
import BottomSideCard from './BottomSideCard'
import RandomBgColor from './RandomBgColor'
import UpSideCard from './UpSideCard'

interface propCard {
  data: Card
}

function WordCardEbook(props: propCard) {
  // @ts-ignore
  const { data } = props
  const styleBg = RandomBgColor()

  return (
    <figure className="card">
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

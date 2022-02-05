import React from 'react'
import BottomSideCard from './BottomSideCard'
import UpSideCard from './UpSideCard'

function WordCardEbook(props: Array<ObjectOfCard> | object) {
  // @ts-ignore
  const { data } = props
  const { word } = data
  return (
    <figure className="card">
      <UpSideCard card={data} />
      <BottomSideCard card={data} />
    </figure>
  )
}

export default WordCardEbook

interface ObjectOfCard {
  data: Card
}

type Card = {
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
  data: object | string
}

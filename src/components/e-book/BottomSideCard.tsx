import React from 'react'

type CardChunk = {
  textExample: string
  textExampleTranslate: string | JSON
  word: string
  image: string
  audio: string
  textMeaningTranslate: string
  textMeaning: string
}

interface propCardChunk {
  card: CardChunk
}

function BottomSideCard(props: propCardChunk) {
  const { card } = props
  const {
    textExample,
    textExampleTranslate,
    word,
    image,
    audio,
    textMeaningTranslate,
    textMeaning,
  } = card
  return (
    <div>
      <p>{textMeaning}</p>
      <p>{textMeaningTranslate}</p>
    </div>
  )
}

export default BottomSideCard

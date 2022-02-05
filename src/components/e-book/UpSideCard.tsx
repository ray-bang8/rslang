import React from 'react'

type CardChunk = {
  transcription: string
  string: string | JSON
  word: string
  wordTranslate: string
  image: string
  audio: string
  textMeaningTranslate: string
  textMeaning: string
}

interface propCardChunk {
  card: CardChunk
}

function UpSideCard(props: propCardChunk) {
  const { card } = props as propCardChunk
  const { word } = card
  return <div>{word}</div>
}

export default UpSideCard

import React from 'react'

type CardChunk = {
  textExample?: string
  textExampleTranslate?: string
  word?: string
  image?: string
  audio?: string
  textMeaningTranslate?: string
  textMeaning?: string
}

interface propCardChunk {
  card: CardChunk
  styleBg: string
  showExampleTranslate: boolean
  showMeaningTranslate: boolean
}

function BottomSideCard(props: propCardChunk) {
  const {
    card, styleBg, showExampleTranslate, showMeaningTranslate
  } = props
  const { textExampleTranslate, textMeaningTranslate } = card

  return (
    <div className="card__bottom" style={{ background: `${styleBg}` }}>
      <hr className="card__bottom-hr" />
      {showMeaningTranslate ? <p>{textMeaningTranslate}</p> : ''}
      {showExampleTranslate ? (
        <p className="card__top-end">{textExampleTranslate}</p>
      ) : (
        ''
      )}
    </div>
  )
}

export default BottomSideCard

import React, { useEffect, useState } from 'react'

type CardChunk = {
  transcription?: string
  string?: string | JSON
  word?: string
  wordTranslate?: string
  image?: string
  audio?: string
  textMeaningTranslate?: string
  textExample?: string
  textMeaning?: string
}

interface propCardChunk {
  card: CardChunk
  styleBg: string
}

function UpSideCard(props: propCardChunk) {
  const { card, styleBg } = props
  const {
    word,
    wordTranslate,
    transcription,
    textMeaning,
    textExample,
    image
  } = card

  const [img, setImg] = useState('')
  const mainUrl = 'https://rslang-team48.herokuapp.com/'

  useEffect(() => {
    if (image) {
      setImg(image)
    }
  }, [card, image])

  return (
    <div className="card__top" style={{ background: `url(${mainUrl}${img})` }}>
      <div
        className="card__blur"
        style={{ backgroundImage: `linear-gradient(transparent, ${styleBg})` }}
      />

      <div className="card__top-text">
        <h3 className="card__top-text-title">{word}</h3>
        <p className="card__top-text-mean">
          <span>{wordTranslate}</span>{' '}
          <span className="card__top-des">{transcription}</span>{' '}
          <span>
            <b>i</b>
          </span>
        </p>
        <p className="card__top-center">{`${textMeaning}`}</p>
        <p className="card__top-end">{`${textExample}`}</p>
      </div>
    </div>
  )
}

export default UpSideCard

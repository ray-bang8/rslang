/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react'
import volumeIcon from '../../img/volume.svg'

type CardChunk = {
  transcription?: string
  word?: string
  wordTranslate?: string
  image?: string
  audio?: string
  textMeaningTranslate?: string
  textExample?: string
  textMeaning?: string
  audioExample?: string
  audioMeaning?: string
}

interface propCardChunk {
  card: CardChunk
  styleBg: string
}

function UpSideCard(props: propCardChunk) {
  const { card, styleBg } = props
  const {
    audio,
    audioExample,
    audioMeaning,
    word,
    wordTranslate,
    transcription,
    textMeaning,
    textExample,
    image
  } = card

  const [img, setImg] = useState('')
  const mainUrl = 'https://rslang-team48.herokuapp.com/'

  // sound voice
  const [soundSrc, setSoundSrc] = useState('')
  const sound = new Audio()

  useEffect(() => {
    if (image) {
      setImg(image)
    }
    setSoundSrc(`${mainUrl}${audio}`)
  }, [card, image, audio])

  // sound Player
  const handlerSoundClick = () => {
    sound.src = soundSrc

    sound.play().then(() => {
      setTimeout(() => {
        sound.src = `${mainUrl}${audioMeaning}`

        sound.play().then(() => {
          setTimeout(() => {
            sound.src = `${mainUrl}${audioExample}`

            sound.play()
          }, sound.duration * 1000)
        })
      }, sound.duration * 1000)
    })
  }

  return (
    <div className="card__top" style={{ background: `url(${mainUrl}${img})` }}>
      <div
        className="card__blur"
        style={{ backgroundImage: `linear-gradient(transparent, ${styleBg})` }}
      />

      <div className="card__top-text">
        <h3 className="card__top-text-title">{word}</h3>
        <div className="card__top-text-mean">
          <span>{wordTranslate}</span>{' '}
          <span className="card__top-des">{transcription}</span>
          <div
            aria-hidden={true}
            className="volume"
            onClick={() => void handlerSoundClick()}
            onKeyPress={() => void handlerSoundClick()}
          >
            <img alt="volume" className="volumeIcon" src={`${volumeIcon}`} />
          </div>
        </div>
        <div
          className="card__top-center"
          dangerouslySetInnerHTML={{ __html: `${textMeaning}` }}
        />
        <div
          className="card__top-end"
          dangerouslySetInnerHTML={{ __html: `${textExample}` }}
        />
      </div>
    </div>
  )
}

export default UpSideCard

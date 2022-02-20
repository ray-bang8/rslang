import React, { Dispatch, SetStateAction } from 'react'
import putHardWords from './putHardWords'
import putLearntWord from './putLearntWord'

function EBookWordBtns({
  data,
  userData,
  setHardWord,
  hardWord,
  hardWords,
  status,
  learntWords,
  setIsLearnWord,
  isLearnWord,
  isBusy,
  setIsBusy,
}: EbookWordBtns) {
  const { userId, refreshToken, token } = userData

  const handleImgClick = () => {
    console.log(data)
    putHardWords(userId, token, data)
    setHardWord(true)
    setIsBusy(true)
  }
  const handleLearnClick = () => {
    console.log(data, hardWords)
    setIsBusy(true)
    // putLearntWord(userId, token, data)
    // setIsLearnWord(true)
  }
  return (
    <div className="card__word-btns">
      {status === 'ebook' && !isBusy && !hardWord && !isLearnWord ? (
        <button className="card__set-btn" type="button">
          <img
            alt="lightning"
            className="card__btn"
            onClick={handleImgClick}
            role="presentation"
            src="https://cdn-icons-png.flaticon.com/512/179/179547.png"
          />
        </button>
      ) : (
        ''
      )}
      {/* {status === 'ebook' && hardWord !== true ? ( */}
      {status === 'ebook' && !isBusy ? (
        <button className="card__set-btn" type="button">
          <img
            alt="lightning"
            className="card__btn"
            onClick={handleLearnClick}
            role="presentation"
            src="https://www.clipartmax.com/png/middle/18-183566_eco-green-light-bulb-icon-green-lightbulb-icon-png.png"
          />
        </button>
      ) : (
        ''
      )}
      {/* {(status === 'learnt') | (status === undefined) ? ( */}
      {(status === 'learnt') | (status === undefined) ? (
        <button className="card__delete-btn" type="button">
          <img
            alt="bucket"
            className="card__btn"
            src="https://icon-library.com/images/delete-icon-image/delete-icon-image-17.jpg"
          />
        </button>
      ) : (
        ''
      )}
      {/* {status === 'hard' ? ( */}
      {status === 'hard' ? (
        <button className="card__delete-btn" type="button">
          <img
            alt="bucket"
            className="card__btn"
            src="https://icon-library.com/images/delete-icon-image/delete-icon-image-17.jpg"
          />
        </button>
      ) : (
        ''
      )}
    </div>
  )
}

export default EBookWordBtns

interface EbookWordBtns {
  data: Card
  userData: { userId: string; refreshToken: string; token: string }
  setHardWord: Dispatch<SetStateAction<boolean>>
  hardWord: boolean
  status: string
  setIsLearnWord: Dispatch<SetStateAction<boolean>>
  learntWords: Array<Card>
  hardWords: Array<Card>
  isLearnWord: boolean
  isBusy: boolean
  setIsBusy: Dispatch<SetStateAction<boolean>>
}

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

/* eslint-disable no-param-reassign */
import React, { Dispatch, SetStateAction } from 'react'
import putHardWords from './putHardWords'
import putLearntWord from './putLearntWord'
import deleteWord from './deleteWord'

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
  setUpdate,
  update,
}: EbookWordBtns) {
  const { userId, refreshToken, token } = userData

  const handleImgClick = () => {
    console.log(data)
    putHardWords(userId, token, data)
    setHardWord(true)
    setIsBusy(true)
    setUpdate(update + 1)
  }
  const handleLearnClick = () => {
    console.log(data, userData.userId)
    putLearntWord(userId, token, data)
    setIsLearnWord(true)
    setIsBusy(true)
    setUpdate(update + 1)
  }

  const handleDeleteClick = () => {
    const { userId } = userData
    const { token } = userData
    console.log('delete')
    deleteWord(userId, token, data.id)
    setUpdate(update + 1)
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
      {status === 'learnt' || status === undefined ? (
        <button className="card__delete-btn" type="button">
          <img
            alt="bucket"
            className="card__btn"
            onClick={handleDeleteClick}
            role="presentation"
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
            onClick={handleDeleteClick}
            role="presentation"
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
  setUpdate: Dispatch<SetStateAction<number>>
  update: number
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

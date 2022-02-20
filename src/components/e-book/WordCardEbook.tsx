/* eslint-disable prefer-destructuring */
/* eslint-disable no-nested-ternary */
import React, {
  useEffect, useState, Dispatch, SetStateAction
} from 'react'
import BottomSideCard from './BottomSideCard'
import EBookWordBtns from './EBookWordBtns'
import RandomBgColor from './RandomBgColor'
import UpSideCard from './UpSideCard'

interface propCard {
  data: Card
  authStatus: boolean
  setAuthStatus: Dispatch<SetStateAction<boolean>>
  status: string
  hardWords: Array<Card>
  learntWords: Array<object>
  update: number
  setUpdate: Dispatch<SetStateAction<number>>
}

function WordCardEbook({
  data,
  authStatus,
  setAuthStatus,
  status,
  hardWords,
  learntWords,
  update,
  setUpdate
}: propCard) {
  const styleBg = RandomBgColor()

  const userDataInfo: object | null | string = localStorage.getItem('userData')
  // @ts-ignore
  const [isInHardWord, setIsInHardWord] = useState(false)
  const [isLearnWord, setIsLearnWord] = useState(false)
  const [isBusy, setIsBusy] = useState(false)

  let userId
  let refreshToken
  let token

  if (userDataInfo) {
    userId = JSON.parse(userDataInfo).userId
    refreshToken = JSON.parse(userDataInfo).refreshToken
    token = JSON.parse(userDataInfo).token
  }

  useEffect(() => {
    if (userDataInfo) {
      setAuthStatus(true)
    }
    if (hardWords) {
      hardWords.map((el) => {
        if (data.id === (el as WordData).wordId) {
          setIsInHardWord(true)
          setIsBusy(true)
        }
        return el
      })
    }

    if (learntWords) {
      learntWords.map((el) => {
        if (data.id === (el as WordData).wordId) {
          setIsLearnWord(true)
          setIsBusy(true)
        }
        return el
      })
    }
  }, [status])

  return authStatus ? (
    <figure
      className={
        isInHardWord
          ? 'card active hard'
          : isLearnWord
            ? 'card active learnt'
            : authStatus
              ? 'card active'
              : 'card'
      }
    >
      {authStatus ? (
        <EBookWordBtns
          data={data}
          hardWord={isInHardWord}
          hardWords={hardWords}
          isBusy={isBusy}
          isLearnWord={isLearnWord}
          learntWords={learntWords}
          setHardWord={setIsInHardWord}
          setIsBusy={setIsBusy}
          setIsLearnWord={setIsLearnWord}
          setUpdate={setUpdate}
          status={status}
          update={update}
          userData={{ userId, refreshToken, token }}
        />
      ) : (
        ''
      )}
      <UpSideCard card={data} styleBg={`${styleBg}`} />
      <BottomSideCard card={data} styleBg={`${styleBg}`} />
    </figure>
  ) : (
    <figure
      className={
        isInHardWord
          ? 'card active hard'
          : isLearnWord
            ? 'card active learnt'
            : authStatus
              ? 'card active'
              : 'card'
      }
    >
      {authStatus ? (
        // @ts-ignore
        <EBookWordBtns
          data={data}
          hardWord={isInHardWord}
          hardWords={hardWords}
          isBusy={isBusy}
          isLearnWord={isLearnWord}
          learntWords={learntWords}
          setHardWord={setIsInHardWord}
          setIsBusy={setIsBusy}
          setIsLearnWord={setIsLearnWord}
          setUpdate={setUpdate}
          status={status}
          update={update}
        />
      ) : (
        ''
      )}
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

type WordData = {
  difficulty: string
  wordId: string
}

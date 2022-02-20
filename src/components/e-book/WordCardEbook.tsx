/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'
import BottomSideCard from './BottomSideCard'
import EBookWordBtns from './EBookWordBtns'
import HardWords from './HardWords'
import RandomBgColor from './RandomBgColor'
import UpSideCard from './UpSideCard'

interface propCard {
  data: Card
  authStatus: boolean
  setAuthStatus: Dispatch<SetStateAction<boolean>>
  status: string
  hardWords: Array<Card>
  setHardWords: Dispatch<SetStateAction<Array<object>>>
  setLearntWords: Dispatch<SetStateAction<Array<Card>>>
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
  setHardWords,
  setLearntWords,
  learntWords,
  update,
  setUpdate,
}: propCard) {
  const styleBg = RandomBgColor()

  // useEffect(() => {
  //   async function fetchHardWords() {
  //     const fetchedHardWords = await HardWords(String(userId), token)

  //     const filteredLearntWords: Array<object> = []
  //     const filteredHardWords = (fetchedHardWords as Array<object>).reduce(
  //       // @ts-ignore
  //       (acc: Array<object>, el: UserData) => {
  //         if (el.difficulty === 'hard') {
  //           acc.push(el)
  //         } else if (el.difficulty === 'learnt') {
  //           filteredLearntWords.push(el)
  //         }
  //         return acc
  //       },
  //       []
  //     )

  //     setHardWords(filteredHardWords)
  //     setLearntWords(filteredLearntWords)
  //   }

  //   if (update === true) {
  //     fetchHardWords()
  //     setUpdate(false)
  //   }
  // }, [status, hardWords])

  const userDataInfo: object | null | string = localStorage.getItem('userData')
  // @ts-ignore
  const { userId, refreshToken, token } = JSON.parse(userDataInfo)
  const [isInHardWord, setIsInHardWord] = useState(false)
  const [isLearnWord, setIsLearnWord] = useState(false)
  const [isBusy, setIsBusy] = useState(false)

  useEffect(() => {
    if (userDataInfo) {
      setAuthStatus(true)
    }
    if (hardWords) {
      const filteredHardWord = hardWords.map((el) => {
        if (data.id === (el as WordData).wordId) {
          setIsInHardWord(true)
          setIsBusy(true)
        }
        return el
      })
    }

    if (learntWords) {
      const filteredLearntWord = learntWords.map((el) => {
        if (data.id === (el as WordData).wordId) {
          setIsLearnWord(true)
          setIsBusy(true)
        }
        return el
      })
    }
  }, [status])

  return (
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

interface UserData {
  token: string
  refreshToken: string
  message?: 'authenticated'
  userId?: string
  difficulty: string
}

type WordData = {
  difficulty: string
  wordId: string
}

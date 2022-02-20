/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'
import BottomSideCard from './BottomSideCard'
import EBookWordBtns from './EBookWordBtns'
import HardWords from './HardWords'
import RandomBgColor from './RandomBgColor'
import UpSideCard from './UpSideCard'

let stopRequest = true

interface propCard {
  data: Card
  authStatus: boolean
  setAuthStatus: Dispatch<SetStateAction<boolean>>
  status: string
  hardWords: Array<Card>
  setHardWords: Dispatch<SetStateAction<Array<Card>>>
  setLearntWords: Dispatch<SetStateAction<Array<Card>>>
  learntWords: Array<object>
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
}: propCard) {
  const styleBg = RandomBgColor()

  useEffect(() => {
    async function fetchHardWords() {
      const fetchedHardWords = await HardWords(String(userId), token)

      const filteredLearntWords: Array<object> = []
      const filteredHardWords = (fetchedHardWords as Array<object>).reduce(
        // @ts-ignore
        (acc: Array<object>, el: UserData) => {
          if (el.difficulty === 'hard') {
            acc.push(el)
          } else if (el.difficulty === 'learnt') {
            filteredLearntWords.push(el)
          }
          return acc
        },
        []
      )
      // console.log(filteredHardWords)

      setHardWords(filteredHardWords)
      // @ts-ignore
      setLearntWords(fetchedHardWords)
    }

    if (stopRequest) {
      fetchHardWords()
      stopRequest = false
    }
  }, [status])

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
        // console.log(el)

        if (data.id === (el as WordData).wordId) {
          setIsInHardWord(true)
        }
        return el
      })
      // console.log(hardWords, 'filteredHardWord')
    }
    if (learntWords) {
      const filteredLearntWord = learntWords.map((el) => {
        if (data.id === (el as WordData).wordId) {
          console.log(data.id, (el as WordData).wordId)
          setIsLearnWord(true)
          setIsBusy(true)
        }
        return el
      })
    }
  }, [learntWords])

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
          learntWords={learntWords}
          setHardWord={setIsInHardWord}
          setIsLearnWord={setIsLearnWord}
          status={status}
          userData={{ userId, refreshToken, token }}
          isLearnWord={isLearnWord}
          isBusy={isBusy}
          setIsBusy={setIsBusy}
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

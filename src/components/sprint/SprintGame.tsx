import React, { useEffect, useState, SetStateAction } from 'react'
import SprintCheckResult from './SprintCheckResult'
import SprintDeleteQuestion from './SprintDeleteQuestion'
import SprintFindWord from './SprintFindWord'
import getRandomWord from './getRandomWord'
import './sprint.scss'

function SprintGame() {
  const [group, setGroup] = useState(0)
  const [page, setPage] = useState(0)
  const [data, setData] = useState([])
  const [currentObject, setCurrentObject] = useState({})
  const [currentWord, setCurrentWord] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState('')
  let [score, setScore] = useState(0)
  let [scoreLevel, setScoreLevel] = useState(0)
  const results: Array<Object> = []

  const setNewWord = async (data: Array<Word>) => {
    const resWord = await getRandomWord(data)
    setCurrentObject(resWord)

    console.log(resWord)
    if (resWord) {
      const { word } = resWord as Word
      setCurrentWord(word)
    }
  }

  useEffect(() => {
    async function handleUseEffect() {
      const res = await fetch(
        `https://rslang-team48.herokuapp.com/words?group=${group}&page=${page}`
      )
      const resData = await res.json()

      await setData(resData)
      console.log(resData)

      const randomWord = (await getRandomWord(resData)) || { word: 'Loading' }

      console.log(randomWord)

      if (randomWord) {
        await setNewWord(resData)
      }

      // set question
      const randomQuestion = getRandomWord(resData)
      setCurrentQuestion((randomQuestion as Word).wordTranslate)
    }
    handleUseEffect()
  }, [])

  function handleClickBtn() {
    SprintFindWord(currentWord, data)
    console.log(SprintFindWord(currentWord, data))
  }

  async function handleNextWord() {
    // delete last
    SprintDeleteQuestion(data, currentWord)
    // console.log(data)

    if (data) {
      // set next new question
      setNewWord(data)
      const randomQuestion = getRandomWord(data)
      if (randomQuestion)
        setCurrentQuestion((randomQuestion as Word).wordTranslate)
    }
  }

  function handleFalseBtn() {
    if (currentObject) {
      const result = SprintCheckResult(
        currentObject as Word,
        currentQuestion as string
      )

      const resultObject = {
        ...currentObject,
        result: Boolean(result),
      }
      if (result) {
        console.log('true')
      }
    }
  }

  function handleTruebtn() {
    if (currentObject) {
      const result = SprintCheckResult(
        currentObject as Word,
        currentQuestion as string
      )

      const resultObject = {
        ...currentObject,
        result: Boolean(result),
      }
      if (result) {
        console.log('true')
        return ''
      } else console.log(false)
    }
  }

  return (
    <div className="sprint-body">
      <p onClick={handleNextWord} role="presentation">
        asdasd{}
      </p>
      {/* <p>{currentWord || ' '}</p>
      <p>{currentQuestion || ' '}</p> */}
      <div className="sprint">
        <div className="sprint__img">
          <img alt="as" src="" />
        </div>
        <div className="sprint__text">
          <h4 className="sprint__question">{currentWord}</h4>
          <p className="sprint__answer">{currentQuestion}</p>
        </div>
        <div className="sprint__btns">
          <button type="button">False</button>
          <button onClick={handleTruebtn} type="button">
            True
          </button>
        </div>
      </div>
    </div>
  )
}

export default SprintGame

interface Word {
  audio: string
  audioExample: string
  audioMeaning: string
  group: number | string
  id: string
  image: string
  page: number | string
  textExample: string
  textExampleTranslate: string
  textMeaning: string
  textMeaningTranslate: string
  transcription: string
  word: string
  wordTranslate: string
}

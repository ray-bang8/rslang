import React, { useEffect, useState, KeyboardEventHandler } from 'react'
import SprintAddScore from './SprintAddScore'
import SprintCheckResult from './SprintCheckResult'
import SprintDeleteQuestion from './SprintDeleteQuestion'
import SprintMenu from './SprintMenu'
import SprintResult from './SprintResult'
import SprintSetTime from './SprintSetTime'
import getRandomWord from './getRandomWord'
import './sprint.scss'

function SprintGame() {
  const [gameStatus, setGameStatus] = useState(false)
  const [group, setGroup] = useState(0)
  const [page, setPage] = useState(0)
  const [data, setData] = useState([])
  const [currentObject, setCurrentObject] = useState({})
  const [currentWord, setCurrentWord] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState('')
  const [score, setScore] = useState(0)
  const [scoreLevel, setScoreLevel] = useState(0)
  // const results: Array<Object> = []
  const [results, setResults] = useState([])
  const [end, setEnd] = useState(false)

  const setNewWord = async(data: Array<Word>) => {
    if (data.length < 1) {
      setEnd(true)
    }
    const resWord = await getRandomWord(data)
    setCurrentObject(resWord)

    if (resWord) {
      const { word } = resWord as Word
      setCurrentWord(word)
    }
  }

  useEffect(() => {
    async function handleUseEffect() {
      const randomPage = (Math.random() * 5).toFixed()
      const res = await fetch(
        `https://rslang-team48.herokuapp.com/words?group=${group}&page=${randomPage}`
      )
      const resData = await res.json()
      console.log(resData)

      await setData(resData)

      const randomWord = (await getRandomWord(resData)) || { word: 'Loading' }
      if (randomWord) {
        await setNewWord(resData)
      }

      // set question
      const randomQuestion = getRandomWord(resData)
      setCurrentQuestion((randomQuestion as Word).wordTranslate)
    }
    handleUseEffect()
  }, [page, group])

  async function handleNextWord() {
    // delete last
    SprintDeleteQuestion(data, currentWord)

    if (data) {
      // set next new question
      setNewWord(data)
      const randomQuestion = getRandomWord(data)
      if (randomQuestion) {
        setCurrentQuestion((randomQuestion as Word).wordTranslate)
      }
    }
  }

  function handleFalseBtn() {
    if (currentObject) {
      const res = SprintCheckResult(
        currentObject as Word,
        currentQuestion as string
      )

      const resultObject = {
        ...currentObject,
        result: res === true ? 'false' : 'true'
      }
      // @ts-ignore
      setResults((oldArray) => [...oldArray, resultObject])
      console.log(results, 'result')

      if (res) {
        setScoreLevel(0)
        console.log('seyscoreLeveled')
      } else {
        SprintAddScore(score, setScore, scoreLevel, setScoreLevel)
      }
    }
    handleNextWord()
  }

  function handleTruebtn() {
    if (currentObject) {
      const res = SprintCheckResult(
        currentObject as Word,
        currentQuestion as string
      )

      const resultObject = {
        ...currentObject,
        result: res
      }
      console.log(resultObject);

      // @ts-ignore
      (results as Array<Word>).push(resultObject)
      console.log(results, 'result')

      if (res) {
        SprintAddScore(score, setScore, scoreLevel, setScoreLevel)
      } else {
        setScoreLevel(0)
      }
    }

    handleNextWord()
  }

  function handleKeyBtn(event: KeyboardEventHandler<HTMLDivElement>) {
    console.log(event)
  }

  return (
    <div>
      <div
        className={gameStatus ? 'sprint-body active' : 'sprint-body'}
        // @ts-ignore
        onKeyPress={handleKeyBtn}
        role="presentation"
      >
        <div className="sprint">
          <div className="sprint__time">
            <SprintSetTime gameStatus={gameStatus} setEnd={setEnd} />
          </div>
          ``
          <div className="sprint__text">
            <h4 className="sprint__question">{currentWord}</h4>
            <p className="sprint__answer">{currentQuestion}</p>
          </div>
          <div className="sprint__btns">
            <button onClick={handleFalseBtn} type="button">
              False
            </button>
            <button onClick={handleTruebtn} type="button">
              True
            </button>
          </div>
          {end}
          <span className="sprint__score">{`${score}`}</span>
        </div>
        {end === true ? <SprintResult results={results} /> : ''}
      </div>
      {gameStatus ? (
        ''
      ) : (
        <SprintMenu
          setGameStatus={setGameStatus}
          setGroup={setGroup}
          setScore={setScore}
          setScoreLevel={setScoreLevel}
        />
      )}
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
  result: boolean
}

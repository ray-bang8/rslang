import React, { useEffect, useState, KeyboardEventHandler } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import SprintAddScore from './SprintAddScore'
import SprintCheckResult from './SprintCheckResult'
import SprintDeleteQuestion from './SprintDeleteQuestion'
import SprintMenu from './SprintMenu'
import SprintResult from './SprintResult'
import SprintSetTime from './SprintSetTime'
import SprintSettings from './SprintSettings'
import getRandomWord from './getRandomWord'
import './sprint.scss'

function SprintGame() {
  const [gameStatus, setGameStatus] = useState(false)
  const [group, setGroup] = useState(0)
  const [page] = useState(0)
  const [data, setData] = useState([])
  const [currentObject, setCurrentObject] = useState({})
  const [currentWord, setCurrentWord] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState('')
  const [score, setScore] = useState(0)
  const [scoreLevel, setScoreLevel] = useState(0)
  const [scoreAddAnimation, setScoreAddAnimation] = useState(false)
  const [results, setResults] = useState([])
  const [end, setEnd] = useState(false)
  const [audioStatus, setAudioStatus] = useState(true)
  const [time, setTime] = useState(60)
  const [resultsBoolean, setResultsBoolean] = useState([])

  const setNewWord = async(data: Array<Word>) => {
    if (data.length < 1) {
      setEnd(true)
      setTime(0)
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

      await setData(resData)

      const randomWord = (await getRandomWord(resData)) || { word: 'Loading' }
      if (randomWord) {
        await setNewWord(resData)
      }

      const randomQuestion = getRandomWord(resData)
      setCurrentQuestion((randomQuestion as Word).wordTranslate)
    }
    handleUseEffect()
  }, [page, group])

  async function handleNextWord() {
    SprintDeleteQuestion(data, currentWord)

    if (data) {
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
      resultsBoolean.push(resultObject.result)
      // @ts-ignore
      results.push(resultObject)

      if (res) {
        setScoreLevel(0)
        if (audioStatus) {
          const audio = new Audio()
          audio.src = 'http://freesoundeffect.net/sites/default/files/negative-game-hit-01-sound-effect-47344971.mp3'
          audio.play()
        }
      } else {
        SprintAddScore(
          score,
          setScore,
          scoreLevel,
          setScoreLevel,
          setScoreAddAnimation
        )
        if (audioStatus) {
          const audio = new Audio()
          audio.src = 'http://freesoundeffect.net/sites/default/files/correct-double-ding-04-sound-effect-74166871.mp3'
          audio.play()
        }
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

      // @ts-ignore
      resultsBoolean.push(resultObject.result)
      // @ts-ignore
      results.push(resultObject)

      if (res) {
        SprintAddScore(
          score,
          setScore,
          scoreLevel,
          setScoreLevel,
          setScoreAddAnimation
        )
        if (audioStatus) {
          const audio = new Audio()
          audio.src = 'http://freesoundeffect.net/sites/default/files/correct-double-ding-04-sound-effect-74166871.mp3'
          audio.play()
        }
      } else {
        setScoreLevel(0)
        if (audioStatus) {
          const audio = new Audio()
          audio.src = 'http://freesoundeffect.net/sites/default/files/negative-game-hit-01-sound-effect-47344971.mp3'
          audio.play()
        }
      }
    }

    handleNextWord()
  }

  function handleKeyBtn(
    event: KeyboardEventHandler<HTMLDivElement> | KeyboardEvent | any
  ) {
    // @ts-ignore
    if (event.key === 'ArrowRight') {
      handleTruebtn()
    }
    // @ts-ignore
    if (event.key === 'ArrowLeft') {
      handleFalseBtn()
    }
  }
  function handleRepeatBtn() {
    setEnd(true)
    setResultsBoolean([])
    setGameStatus(false)
    setScore(0)
    setScoreLevel(0)
    const randomWord = getRandomWord(data) || { word: 'Loading' }
    if (randomWord) {
      setNewWord(data)
    }
    setTime(60)
    setResults([])

    // set question
    const randomQuestion = getRandomWord(data)
    setCurrentQuestion((randomQuestion as Word).wordTranslate)
  }

  return (
    <div>
      <Header />
      <div
        className={gameStatus ? 'sprint-body active' : 'sprint-body'}
        onKeyDown={handleKeyBtn}
        role="presentation"
        tabIndex={-1}
      >
        <div
          className="opacitied"
          onKeyDown={handleKeyBtn}
          role="presentation"
          tabIndex={-1}
        >
          {}
        </div>
        <div className="sprint">
          <div className="sprint__time">
            <SprintSetTime
              end={end}
              gameStatus={gameStatus}
              setEnd={setEnd}
              setTime={setTime}
              time={time}
            />
          </div>
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
        <div
          className={
            scoreAddAnimation ? 'score-animation active' : 'score-animation'
          }
          role="presentation"
        >
          {/* eslint-disable-next-line no-nested-ternary */}
          {scoreLevel === 1 ? '20+' : scoreLevel === 2 ? '40+' : '60+'}{' '}
          {/* eslint-enable-next-line no-nested-ternary */}
        </div>
        <img
          alt="repeat"
          className="repeat-icon"
          onClick={handleRepeatBtn}
          role="presentation"
          src="http://cdn.onlinewebfonts.com/svg/img_564603.png"
        />
        <SprintSettings
          audioStatus={audioStatus}
          setAudioStatus={setAudioStatus}
        />
        {end === true ? (
          <SprintResult results={results} resultsBoolean={resultsBoolean} />
        ) : (
          ''
        )}
      </div>
      {gameStatus ? (
        ''
      ) : (
        <SprintMenu
          setEnd={setEnd}
          setGameStatus={setGameStatus}
          setGroup={setGroup}
          setScore={setScore}
          setScoreLevel={setScoreLevel}
          setTime={setTime}
        />
      )}
      <Footer />
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

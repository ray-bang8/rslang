import React, { useState, useEffect } from 'react'
import './AudioCalls.scss'

// eslint-disable-next-line react/prop-types
function AudioHome({ level, parentCallback }) {
  const url = 'https://rslang-team48.herokuapp.com/'
  const [words, setWords] = useState([])
  const [index, setIndex] = useState(0)
  const [page, setPage] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    fetch(`${url}words?group=${level}&page=${page}`)
      .then((response) => response.json())
      .then((data) => setWords(data))
  }, [])

  function pageIncrementor() {
    let numPage = page
    numPage++
    setPage(numPage)
    setIndex(0)
    setAnswers([])
    setWords([])
    fetch(`${url}words?group=${level}&page=${numPage}`)
      .then((response) => response.json())
      .then((data) => setWords(data))
  }

  const wordList = [],
    imageList = [],
    audioList = [],
    translateList = []

  words.map((item) => {
    wordList.push(item.word)
    imageList.push(item.image)
    audioList.push(item.audio)
    translateList.push(item.wordTranslate)
    return item
  })

  // random choices generator --------------- start
  const [randomWords1, setRandomWords1] = useState([])
  const [randomWords2, setRandomWords2] = useState([])
  const [randomWords3, setRandomWords3] = useState([])
  const [randomWords4, setRandomWords4] = useState([])

  useEffect(() => {
    if (randomWords1.length !== 0) {
      return
    }
    fetch(`${url}words?group=${level}&page=${Math.floor(Math.random() * 28) + 1}`)
      .then((response) => response.json())
      .then((data) => setRandomWords1([...data]))
  }, [])

  useEffect(() => {
    if (randomWords1.length !== 0) {
      return
    }
    fetch(`${url}words?group=${level}&page=${Math.floor(Math.random() * 28) + 1}`)
      .then((response) => response.json())
      .then((data) => setRandomWords2([...data]))
  }, [])

  useEffect(() => {
    fetch(`${url}words?group=${level}&page=${Math.floor(Math.random() * 28) + 1}`)
      .then((response) => response.json())
      .then((data) => setRandomWords3([...data]))
  }, [])

  useEffect(() => {
    if (randomWords1.length !== 0) {
      return
    }
    fetch(`${url}words?group=${level}&page=${Math.floor(Math.random() * 28) + 1}`)
      .then((response) => response.json())
      .then((data) => setRandomWords4([...data]))
  }, [])


  const randomWordList1 = []

  randomWords1.map((item) => {
    randomWordList1.push(item.wordTranslate)
    return item
  })

  const randomWordList2 = []

  randomWords2.map((item) => {
    randomWordList2.push(item.wordTranslate)
    return item
  })

  const randomWordList3 = []

  randomWords3.map((item) => {
    randomWordList3.push(item.wordTranslate)
    return item
  })

  const randomWordList4 = []

  randomWords4.map((item) => {
    randomWordList4.push(item.wordTranslate)
    return item
  })
  // random choices generator -------------- end
  function play() {
    const audio = new Audio(`${url}${audioList[index]}`)
    audio.play()
  }
  play()

  function checkAnswer(e) {
    e.preventDefault()
    if (translateList[index] === e.target.value) {
      setAnswers((answers) => [...answers, { result: '+', word: wordList[index], translation: translateList[index] }])
      e.target.classList.add('correct')
    } else {
      setAnswers((answers) => [...answers, { result: '-', word: wordList[index], translation: translateList[index] }])
      e.target.classList.add('incorrect')
      document.querySelectorAll('.choice').forEach((userItem) => {
        if (userItem.value === translateList[index]) {
          userItem.classList.add('correct')
        }
      })
    }
    setDisabled(!disabled)
    document.querySelector('.answer-image').src = `${url}${imageList[index]}`
    document.querySelector('.answer-image').style.display = 'block'

    document.querySelector('.answer-word').innerHTML = `${wordList[index]}`
    document.querySelector('.answer-word').style.display = 'block'
  }

  function next() {
    document.querySelectorAll('.correct').forEach((userItem) => {
      userItem.classList.remove('correct')
    })
    document.querySelectorAll('.incorrect').forEach((userItem) => {
      userItem.classList.remove('incorrect')
    })

    if (answers.length !== index + 1) {
      setAnswers((answers) => [...answers, { result: '-', word: wordList[index], translation: translateList[index] }])
    }
    setIndex(index + 1)
    if (disabled !== false) {
      setDisabled(!disabled)
    }
    document.querySelector('.answer-image').src = ''
    document.querySelector('.answer-image').style.display = 'none'

    document.querySelector('.answer-word').innerHTML = ''
    document.querySelector('.answer-word').style.display = 'none'
  }

  const versionsArray = [translateList[index],
    randomWordList1[index],
    randomWordList2[index],
    randomWordList3[index],
    randomWordList4[index]]

  const shuffle = function(originalArray) {
    const array = [].concat(originalArray)
    let currentIndex = array.length,
      temporaryValue,
      randomIndex

    while (0 !== currentIndex) {
      if (index < 5) {
        randomIndex = index
      } else if (index < 10) {
        randomIndex = 2
      } else if (index < 15) {
        randomIndex = index - 10
      } else {
        randomIndex = 4
      }
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }

  const choices = shuffle([...versionsArray])

  return (
    <div>
      <div className="audio-calls__start">
        { index === 20
          ? (
            <div className="results">
              <div className="audio-calls__start--correct">
                <span className="audio-calls__start--correct--title">Correct answers:</span>
                <br />
                {
                // eslint-disable-next-line react/no-array-index-key
                answers.filter((answer) => answer.result === '+').map((answer, index) => (<div key={index}>{answer.word} - {answer.translation}</div>))
                }
              </div>
              <div className="audio-calls__start--incorrect">
                <span className="audio-calls__start--incorrect--title">Incorrect answers:</span>
                <br />
                {
                // eslint-disable-next-line react/no-array-index-key
                answers.filter((answer) => answer.result === '-').map((answer, index) => (<div key={index}>{answer.word} - {answer.translation}</div>))
                }
              </div>
              <button className="new-game" onClick={pageIncrementor} type="button">
                New game
              </button>
            </div>
          )
          : (
            <div className="audio-calls__arena">
              <h2>Question {index + 1}</h2>
              <img alt="answer" className="answer-image" src="" style={{ display: 'none' }} />
              <span className="answer-word" style={{ display: 'none' }} />
              <div>
                <input className="audio" onClick={play} type="button" />
                <div className="audio-calls__arena--answers">
                  <input className="choice" disabled={disabled} onClick={checkAnswer} type="button" value={choices[0] || ''} />
                  <input className="choice" disabled={disabled} onClick={checkAnswer} type="button" value={choices[1] || ''} />
                  <input className="choice" disabled={disabled} onClick={checkAnswer} type="button" value={choices[2] || ''} />
                  <input className="choice" disabled={disabled} onClick={checkAnswer} type="button" value={choices[3] || ''} />
                  <input className="choice" disabled={disabled} onClick={checkAnswer} type="button" value={choices[4] || ''} />
                </div>
                <input className="next" onClick={next} type="button" />
              </div>
            </div>
          )}
      </div>
      <input
        className="audio-calls__start--back"
        onClick={() => {
          parentCallback(true, 1)
        }}
        type="button"
      />
    </div>
  )
}

export default AudioHome

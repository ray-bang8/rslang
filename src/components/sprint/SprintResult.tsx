import {
  faVolumeUp,
  faCheck,
  faWindowClose
} from '@fortawesome/fontawesome-free-solid'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'

const volumeIcon = faVolumeUp as IconProp
const checkIcon = faCheck as IconProp
const closeIcon = faWindowClose as IconProp

function SprintResult({ results, resultsBoolean }: Results | empty) {
  const [trues, setTrues] = useState(0)
  const [falses, setFalses] = useState(0)

  function countTrues() {
    let cons = 0
    let pros = 0
    resultsBoolean.map((el: boolean) => {
      const tempEl = String(el)
      // eslint-disable-next-line eqeqeq
      if (tempEl == 'true') {
        cons++
        // eslint-disable-next-line eqeqeq
      } else if (tempEl == 'false') {
        pros++
      }
      return el
    })

    setTrues(cons)
    setFalses(pros)
  }

  useEffect(() => {
    countTrues()
  }, [results])

  function handleVolumeBtn(el: Word) {
    const sound: HTMLAudioElement = new Audio()
    sound.src = `https://rslang-team48.herokuapp.com/${el.audio}`
    sound.play()
  }

  return (
    <div className="results">
      <h3 className="result__title">
        Results <span className="trues">+{trues}</span>{' '}
        <span className="falses">-{falses}</span>{' '}
      </h3>
      <table className="result__table">
        <tbody>
          <tr>
            <th>Word</th>
            <th>Translate</th>
            <th>Transcription</th>
            <th>Result</th>
            <th>Listen</th>
          </tr>
          {results.map((el: Word) => (
            <tr key={el.id}>
              <td>{el.word}</td>
              <td>{el.wordTranslate}</td>
              <td>{el.transcription}</td>
              <td>
                {String(el.result) === 'true' ? (
                  <FontAwesomeIcon className="true-icon" icon={checkIcon} />
                ) : (
                  <FontAwesomeIcon className="close-icon" icon={closeIcon} />
                )}
              </td>
              <td>
                <FontAwesomeIcon
                  className="result__volume-icon"
                  icon={volumeIcon}
                  onClick={() => handleVolumeBtn(el)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SprintResult

type Word = {
  audio?: string
  audioExample?: string
  audioMeaning?: string
  group?: number | string
  id?: string
  image?: string
  page?: number | string
  textExample?: string
  textExampleTranslate?: string
  textMeaning?: string
  textMeaningTranslate?: string
  transcription?: string
  word?: string
  wordTranslate?: string
  result: string | boolean
}

interface Results {
  results: Array<Word>
  resultsBoolean: Array<boolean>
  // setEnd: Dispatch<SetStateAction<number>>
}

interface empty {
  results: []
  resultsBoolean: []
}

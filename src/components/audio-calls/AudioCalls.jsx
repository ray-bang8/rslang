import React, { useCallback, useState } from 'react'
import './AudioCalls.scss'
import AudioHome from './AudioHome'


function AudioCalls() {
  const [start, setStart] = useState(true)
  const [level, setLevel] = useState(1)

  const callback = useCallback((start, level) => {
    setStart(start)
    setLevel(level)
  }, [])

  const rules = (
    <div className="audio-calls__start">
      <div className="instructions">
        <h1>AudioCall</h1>
        <h2>This game is dedicated to improve your active listening skills</h2>
        <p className="instructions--list">Please, before playing the game read the instructions:</p>
        <ul className="instructions--list">
          <li>You will be given 20 questions, after answering
            them you can see results including correct answers;
          </li>
          <li>Select the difficulty level and click "Start" button;</li>
          <li>Repeat the audio with clicking corresponding button;</li>
          <li>By clicking next button you can skip question,
            but the answer will be marked as wrong;
          </li>
          <li>Start new game with the help of "New game" button.</li>
        </ul>
      </div>
      <div className="instructions--buttons">
        <select
          id="audio-calls__level"
          name="level"
          onChange={(selected) => {
            setLevel(selected.target.value)
          }}
          selected={level}
        >
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
          <option value="4">Level 4</option>
          <option value="5">Level 5</option>
        </select>
        <button
          className="audio-calls__start--level"
          onClick={() => {
            setStart(false)
          }}
          type="button"
        >Start
        </button>
      </div>
    </div>
  )
  return (
    <div className="audio-calls">
      <div className="audio-background" />
      { start ? rules : (
        <AudioHome
          level={level}
          parentCallback={callback}
          start={start}
        />
      ) }
    </div>
  )
}

export default AudioCalls

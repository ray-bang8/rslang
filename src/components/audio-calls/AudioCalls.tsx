import React from 'react'
import './AudioCalls.css'

function AudioCalls() {
  const chooseLevel = function(event: React.MouseEvent) {
    console.log(event.target)
  }
  return (
    <div className="audio-calls">
      <div className="audio-calls__instructions">
        <h1>AudioCall</h1>
        <p>This game is dedicated for improving your active listening skills</p>
        <p>Please, before playing the game read the instructions:</p>
        <ul>
          <li>Select the difficulty level</li>
          <li>Answer with a mouse click or pressing one the keys from 1 to 5</li>
          <li>Press Space key for repeating the sound</li>
          <li>Press Enter key to skip the question</li>
        </ul>
      </div>
      <div className="audio-calls__start">
        <button className="audio-calls__start--level" onClick={chooseLevel} type="button">1</button>
        <button className="audio-calls__start--level" onClick={chooseLevel} type="button">2</button>
        <button className="audio-calls__start--level" onClick={chooseLevel} type="button">3</button>
        <button className="audio-calls__start--level" onClick={chooseLevel} type="button">4</button>
        <button className="audio-calls__start--level" onClick={chooseLevel} type="button">5</button>
        <button className="audio-calls__start--level" onClick={chooseLevel} type="button">6</button>
      </div>
    </div>
  )
}

export default AudioCalls

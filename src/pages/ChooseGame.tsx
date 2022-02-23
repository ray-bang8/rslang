import React from 'react'
import { Link } from 'react-router-dom'
import audioCallImg from '../img/audiocall.png'
import sprintImg from '../img/sprint.png'

export default function ChooseGame() {
  return (
    <div className="choose-game">
      <Link to="/audioCall"><img alt="audio" className="rightImg first" src={audioCallImg} /></Link>
      <Link to="/sprint"><img alt="sprint" className="rightImg second" src={sprintImg} /></Link>
    </div>
  )
}

import React from 'react'
import audioCallImg from '../img/audiocall.png'
import gamesBgImg from '../img/gamesbg.png'
import sprintImg from '../img/sprint.png'

export default function GamesSection() {
  return (
    <section className="gamesSection container">
      <h2 className="headText">Games</h2>
      <img alt="" className="leftImg" src={gamesBgImg} />
      <div className="gamesField">
        <div className="leftField">
          <h2 className="leftText">Play a game, <br /> improve your <br /> skills</h2>
        </div>
        <div className="rightField">
          <img alt="" className="rightImg first" src={audioCallImg} />
          <img alt="" className="rightImg second" src={sprintImg} />
        </div>
      </div>

    </section>
  )
}

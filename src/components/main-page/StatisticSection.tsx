/* eslint-disable react/button-has-type */
import React from 'react'
import { Link } from 'react-router-dom'
import statBgImg from '../../img/statBg.png'
import statImg from '../../img/statImg.png'
import timerImg from '../../img/timer.png'

export default function StatisticSection() {
  return (
    <section className="statSection container">
      <h2 className="statText">Statistics</h2>
      <img alt="" className="statBgImg" src={statBgImg} />
      <div className="statsField">
        <div className="leftStatField">
          <img alt="" className="timerImg" src={timerImg} />
          <img alt="" className="statImg" src={statImg} />
        </div>
        <div className="rightStatField">
          <h2 className="rightText">Check your progress</h2>
          <Link to="/statistics"><button className="statsBtn">Stats</button></Link>
        </div>
      </div>

    </section>
  )
}

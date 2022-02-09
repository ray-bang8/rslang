/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import leftBgMain from '../img/left.png'
import schoolImg from '../img/mainImg.png'
import rightBgMain from '../img/right.png'
import '../styles/mainPage.scss'

export default function mainSection() {
  return (
    <section className="homePage container">
      <div className="bgDesign">
        <img alt="" className="bgImg leftSide" src={leftBgMain} />
        <img alt="" className="bgImg schoolImg" src={schoolImg} />
        <img alt="" className="bgImg rightSide" src={rightBgMain} />
      </div>
      <div className="mainText">
        <h2>Education platform</h2>
        <p>Start your language learning journey <br /> with <a href="#">PolyLang</a> </p>
      </div>
    </section>
  )
}

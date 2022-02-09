/* eslint-disable react/button-has-type */
import React from 'react'
import circles from '../img/circles.png'
import ebookImg from '../img/ebook.png'

export default function EbookSection() {
  return (
    <section className="ebookPage container">
      <h2 className="headText">E-book</h2>
      <div className="ebookDesign">
        <img alt="" className="ebookImg leftImg" src={circles} />
        <img alt="" className="ebookImg rightImg" src={ebookImg} />
      </div>
      <div className="eBookStart">
        <h2>Make learning new <br />words a daily habit </h2>
        <button className="startBtn">Start</button>
      </div>
    </section>
  )
}

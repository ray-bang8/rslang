import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutTeamSection() {
  return (
    <section className="aboutSection container">
      <div className="aboutBody">
        <h2 className="aboutHeader">About</h2>
        <h2 className="aboutText">Talent win Games, but Teamwork <br /> championships</h2>
        <Link to="/about"><button className="teamBtn" type="button">Team</button></Link>
      </div>
    </section>
  )
}

import React from 'react'
import './AboutTeam.css'
import arayImg from '../../img/aray.jpg'
import elyorImg from '../../img/elyor.jpg'
import shamshodImg from '../../img/shamshod.jpg'
import Member from './Member'

type MemberShip = {
  name: string
  position: String[]
  img: string
  github: string[]
  parts: Array<string>
  id: string
}

function AboutTeam() {
  const team = [
    {
      name: 'Aray',
      position: ['TeamLeader', 'Front', 'Code-review'],
      img: arayImg,
      github: ['https://github.com/ray-bang8', 'ray-bang8'],
      parts: ['Games'],
      id: '18562841468'
    },
    {
      name: 'Shamshod',
      position: ['Front', 'Code-review'],
      img: shamshodImg,
      github: ['https://github.com/ShamshodIsayev', 'shamshodisayev'],
      parts: ['Sprint'],
      id: '26735416389'
    },
    {
      name: 'Elyor',
      position: ['Back', 'Front', 'Code-review'],
      img: elyorImg,
      github: ['https://github.com/elygo', 'elygo'],
      parts: ['Book'],
      id: '11322564858'
    }
  ]
  return (
    <main className="team">
      <div className="teamImg" />
      <h1 className="team-title"> Our Team</h1>
      <div className="team-wrapper">
        {team.map((member: MemberShip) => (
          <div className="teamContainer">
            <Member key={member.id} member={member} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default AboutTeam

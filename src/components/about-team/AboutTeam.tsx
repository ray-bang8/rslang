import React from 'react'
import './AboutTeam.css'
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
      img: '',
      github: ['https://github.com/ray-bang8', 'ray-bang8'],
      parts: ['Games'],
      id: '18562841468'
    },
    {
      name: 'Elyor',
      position: ['Back', 'Front', 'Code-review'],
      img: '',
      github: ['https://github.com/elygo', 'elygo'],
      parts: ['Book'],
      id: '11322564858'
    },
    {
      name: 'Shamshod',
      position: ['Front', 'Code-review'],
      img: '',
      github: ['https://github.com/ShamshodIsayev', 'shamshodisayev'],
      parts: ['Sprint'],
      id: '26735416389'
    }
  ]
  return (
    <main className="team">
      <h1 className="team-title"> Our Team</h1>
      <div className="team-wrapper">
        {team.map((member: MemberShip) => (
          <Member key={member.id} member={member} />
        ))}
      </div>
    </main>
  )
}

export default AboutTeam

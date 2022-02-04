import React from 'react'
import './AboutTeam.css'
import Member from './Member'

function AboutTeam() {
  const team = [
    {
      name: 'Aray',
      position: ['TeamLeader', 'Front', 'Code-review'],
      img: '',
      github: ['https://github.com/ray-bang8', 'nicknAray'],
      parts: ['Games'],
    },
    {
      name: 'Elyor',
      position: ['Back', 'Front', 'Code-review'],
      img: '',
      github: ['https://github.com/elygo', 'nicknElyor'],
      parts: ['Book'],
    },
    {
      name: 'Shamshod',
      position: ['Front', 'Code-review'],
      img: '',
      github: ['https://github.com/ShamshodIsayev', 'nickSha'],
      parts: ['Sprint'],
    },
  ]
  return (
    <main className="team">
      <h1 className="team-title"> Our Team</h1>
      <div className="team-wrapper">
        {team.map((member, index) => {
          return <Member member={member} key={parseFloat(Math.random())} />
        })}
      </div>
    </main>
  )
}

export default AboutTeam

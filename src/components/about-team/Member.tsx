import React from 'react'

import RoleBlock from './RoleBlock'

type MemberShip = {
  name: string
  position: String[]
  img: string
  github: string[]
  parts: Array<string>
  id: string
}

interface Members {
  member: MemberShip
}

function Member(props: Members) {
  const { member } = props
  const {
    name, img, position, github, parts
  } = member as MemberShip
  const [gitHubLink, gitHubId] = github
  String(parts)
  return (
    <figure className="team-member">
      <img
        alt="avatar-img"
        className="team-member__img"
        src={
          img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0fGXCbb1mvwXRj7lTKO9CDOGulBjWZHHsg&usqp=CAU'
        }
      />
      <h5 className="team-member__name">{name}</h5>
      <RoleBlock role={position} />
      <a className="team-member__hub" href={gitHubLink}>{gitHubId} </a>
    </figure>
  )
}
export default Member

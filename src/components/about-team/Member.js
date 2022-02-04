import React from 'react'
import RoleBlock from './RoleBlock'

function Member(props) {
  const { name, img, position, github, parts } = props.member
  return (
    <>
      <figure className="team-member">
        <img
          className="team-member__img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0fGXCbb1mvwXRj7lTKO9CDOGulBjWZHHsg&usqp=CAU"
        />
        <h5 className="team-member__name">{name}</h5>
        <RoleBlock role={position} />
        <a href={github[0]}>{github[1]} </a>
      </figure>
    </>
  )
}

export default Member

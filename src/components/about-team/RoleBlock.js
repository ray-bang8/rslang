import React from 'react'
import Role from './Role'

function RoleBlock(props) {
  const role = props.role
  return (
    <p className="team-member__role">
      {role.map((member, index) => {
        return <Role role={member} key={index} />
      })}
    </p>
  )
}

export default RoleBlock

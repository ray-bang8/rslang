import React from 'react'
import Role from './Role'

function RoleBlock(props: any) {
  const { role } = props
  return (
    <p className="team-member__role">
      {role.map((member: any) => (
        <Role key={member} role={member} />
      ))}
    </p>
  )
}

export default RoleBlock

import React from 'react'
import { Link } from 'react-router-dom'

function AuthButton() {
  return (
    <div className="auth-block">
      <Link to="/auth"><button type="button">Sign Up</button></Link>
    </div>
  )
}

export default AuthButton

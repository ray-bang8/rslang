import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const history = useNavigate()
  const clearStorage = () => {
    window.localStorage.removeItem('userData')
    history('/')
  }
  return (
    <div className="auth-block">
      <button onClick={clearStorage} type="button">Logout</button>
    </div>
  )
}

export default Logout

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthButton() {
  const [value, setValue] = useState(false)
  const history = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('userData') !== null) {
      setValue(true)
    }
  }, [])
  const clearStorage = () => {
    window.localStorage.removeItem('userData')
    setValue(false)
    history('/')
  }

  return (
    <div className="auth-block">
      <button className="log" onClick={clearStorage} type="button">{value ? 'Logout' : 'Login' }</button>
    </div>
  )
}

export default AuthButton

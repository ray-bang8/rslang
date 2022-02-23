import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Auth.scss'
import { signIn } from './Requests'

function FormLogin() {
  const baseUrl: string = 'https://rslang-team48.herokuapp.com/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useNavigate()
  const handleLoginSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await signIn(baseUrl, email, password)
    setEmail('')
    setPassword('')
    if (localStorage.getItem('userData') !== null) {
      history('/')
    }
    window.location.reload()
    return false
  }

  const handleRoute = () => {
    history('/auth')
  }

  return (
    <div className="form-container">
      <div className="title">Welcome</div>
      <form className="form" onSubmit={handleLoginSubmit}>
        <input
          className="email-sign-in"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          value={email}
        />
        <input
          className="password-sign-in"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          value={password}
        />
        <input className="login" type="submit" value="Login" />
      </form>
      <div className="no-account" style={{ width: '100%' }}>Have no account yet?</div>
      <Link to="/register"><button className="to-register" onClick={handleRoute} type="button">Registration</button></Link>
    </div>
  )
}

export default FormLogin


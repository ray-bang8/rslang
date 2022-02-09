/* eslint-disable jsx-a11y/anchor-is-valid */
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './Auth.css'
import {
  Link
} from 'react-router-dom'
import { signIn } from './Requests'

function FormLogin() {
  const baseUrl: string = 'https://rslang-team48.herokuapp.com/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await signIn(baseUrl, email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="form-container">
      <div className="home-button">
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </div>
      <div className="title">
        Welcome
      </div>
      <form className="form" onSubmit={handleLoginSubmit}>
        <input className="email-sign-in" onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" value={email} />
        <input className="password-sign-in" onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" value={password} />
        <input className="login" type="submit" value="Login" />
      </form>
      <div className="no-account">
        Have no account yet?
      </div>
      <Link to="/auth"><button className="to-register" type="button">Registration</button> </Link>
    </div>
  )
}

export default FormLogin


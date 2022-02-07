import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './Auth.css'
import { createUser } from './Requests'

function FormRegister() {
  const baseUrl: string = 'https://rslang-team48.herokuapp.com/'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegisterSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await createUser(baseUrl, name, email, password)
    setName('')
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
      <form className="form" onSubmit={handleRegisterSubmit}>
        <input className="name" onChange={(e) => setName(e.target.value)} placeholder="Name" type="text" value={name} />
        <input className="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" value={email} />
        <input className="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" value={password} />
        <input className="login" type="submit" value="Register" />
      </form>
      <div className="no-account">
        Already have an account?
      </div>
      <button className="to-register" type="button">Login</button>
    </div>
  )
}

export default FormRegister


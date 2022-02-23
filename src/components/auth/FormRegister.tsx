import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.scss'
import { createUser } from './Requests'
import SideBar from './SideBar'

function FormRegister() {
  const baseUrl: string = 'https://rslang-team48.herokuapp.com/'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useNavigate()
  const handleRegisterSubmit = async(
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    await createUser(baseUrl, name, email, password)
    setName('')
    setEmail('')
    setPassword('')
  }

  const handleRoute = () => {
    history('/auth')
  }

  return (

    <div className="auth">
      <SideBar />
      <div className="form-container">
        <div className="title">Welcome</div>
        <form className="form" onSubmit={handleRegisterSubmit}>
          <input
            className="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            value={name}
          />
          <input
            className="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            value={email}
          />
          <input
            className="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            value={password}
          />
          <input className="login" type="submit" value="Register" />
        </form>
        <div className="no-account">Already have an account?</div>
        <button className="to-register" onClick={handleRoute} type="button">
          Login
        </button>
      </div>
    </div>
  )
}

export default FormRegister

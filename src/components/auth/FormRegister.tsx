<<<<<<< HEAD
=======
import { IconProp } from '@fortawesome/fontawesome-svg-core'
>>>>>>> 7df0a1e8c7f44fd004f9e212f963f2cde876646c
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './Auth.css'
import { createUser } from './Requests'

<<<<<<< HEAD
=======
const timesIcon = faTimes as IconProp

>>>>>>> 7df0a1e8c7f44fd004f9e212f963f2cde876646c
function FormRegister() {
  const baseUrl: string = 'https://rslang-team48.herokuapp.com/'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

<<<<<<< HEAD
  const handleRegisterSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
=======
  const handleRegisterSubmit = async(
    event: React.FormEvent<HTMLFormElement>
  ) => {
>>>>>>> 7df0a1e8c7f44fd004f9e212f963f2cde876646c
    event.preventDefault()
    await createUser(baseUrl, name, email, password)
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className="form-container">
      <div className="home-button">
<<<<<<< HEAD
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
=======
        <FontAwesomeIcon icon={timesIcon} size="2x" />
      </div>
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
      <button className="to-register" type="button">
        Login
      </button>
>>>>>>> 7df0a1e8c7f44fd004f9e212f963f2cde876646c
    </div>
  )
}

export default FormRegister
<<<<<<< HEAD

=======
>>>>>>> 7df0a1e8c7f44fd004f9e212f963f2cde876646c

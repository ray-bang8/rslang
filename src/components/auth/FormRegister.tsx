import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Auth.css'
import { createUser } from './Requests'

function FormRegister() {
  const baseUrl: string = 'https://rslang-team48.herokuapp.com/'
  const handleRegisterSubmit = async(event: any) => {
    event.preventDefault()
    const inputName: string = (document.querySelector('.name') as HTMLInputElement).value
    const inputEmail: string = (document.querySelector('.email') as HTMLInputElement).value
    const inputPassword: string = (document.querySelector('.password') as HTMLInputElement).value
    await createUser(baseUrl, inputName, inputEmail, inputPassword)
  }
  return (
    <div className="form-container">
      <div className="home-button">
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </div>
      <div className="title">
        Welcome
      </div>
      <div className="form">
        <input className="name" name="name" placeholder="Name" type="text" />
        <input className="email" name="email" placeholder="Email" type="email" />
        <input className="password" name="password" placeholder="Password" type="password" />
        <button className="login" onClick={handleRegisterSubmit} type="submit">Register</button>
      </div>
      <div className="no-account">
        Already have an account?
      </div>
      <button className="to-register" type="button">Login</button>
    </div>
  )
}

export default FormRegister


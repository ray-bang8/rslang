import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Auth.css'
import { signIn } from './Requests'

function FormLogin() {
  const baseUrl: string = 'https://rslang-team48.herokuapp.com/'
  const handleLoginSubmit = async(event: any) => {
    event.preventDefault()
    const inputEmailSignin: string = (document.querySelector('.email-sign-in') as HTMLInputElement).value
    const inputPasswordSignin: string = (document.querySelector('.password-sign-in') as HTMLInputElement).value
    await signIn(baseUrl, inputEmailSignin, inputPasswordSignin)
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
        <input className="email-sign-in" name="email" placeholder="Email" type="email" />
        <input className="password-sign-in" name="password" placeholder="Password" type="password" />
        <button className="login" onClick={handleLoginSubmit} type="submit">Log in</button>
      </div>
      <div className="no-account">
        Have no account yet?
      </div>
      <button className="to-register" type="button">Registration</button>
    </div>
  )
}

export default FormLogin


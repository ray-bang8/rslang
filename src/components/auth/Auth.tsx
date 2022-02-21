import React from 'react'
import './Auth.css'
import FormLogin from './FormLogin'
import SideBar from './SideBar'

function Auth() {
  return (
    <div className="auth">
      <SideBar />
      <FormLogin />
    </div>
  )
}

export default Auth

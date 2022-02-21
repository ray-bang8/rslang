import React from 'react'
import './Auth.scss'
import FormLogin from './FormLogin'
// import FormRegister from './FormRegister'
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

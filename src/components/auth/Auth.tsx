import React from 'react'
import './Auth.css'
import FormLogin from './FormLogin'
// import FormRegister from './FormRegister'
import SideBar from './SideBar'

function Auth() {
  return (
    <div className="auth">
      <SideBar />
      <FormLogin />
      {/* <FormRegister /> */}
    </div>
  )
}

export default Auth

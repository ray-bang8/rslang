import React from 'react'
import './Auth.scss'
import FormRegister from './FormRegister'
// import FormRegister from './FormRegister'
import SideBar from './SideBar'

function Reg() {
  return (
    <div className="auth">
      <SideBar />
      <FormRegister />
    </div>
  )
}

export default Reg

import React from 'react'
import '../styles/App.css'
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'
// import AboutTeamPage from './AboutTeamPage'
import FormRegister from '../components/auth/FormRegister'
import AuthPage from './AuthPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<AuthPage />} path="/" />
          <Route element={<FormRegister />} path="/auth" />

        </Routes>
      </Router>

    </div>
  )
}

export default App

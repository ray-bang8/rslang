import React from 'react'
import '../styles/App.css'
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'
import FormRegister from '../components/auth/FormRegister'
import AboutTeamPage from './AboutTeamPage'
import AuthPage from './AuthPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route element={<AuthPage />} path="/" /> */}
          <Route element={<FormRegister />} path="/auth" />
          <Route element={<AuthPage />} path="/login" />
          {/* <Route element={} path="/e-book" /> */}
          {/* <Route element={} path="/games" /> */}
          {/* <Route element={} path="/statistics" /> */}
          <Route element={<AboutTeamPage />} path="/" />

        </Routes>
      </Router>

    </div>
  )
}

export default App

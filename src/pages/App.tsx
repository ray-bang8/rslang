import React from 'react'
import '../styles/App.css'
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'
import FormRegister from '../components/auth/FormRegister'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import AboutTeamPage from './AboutTeamPage'
import AuthPage from './AuthPage'
import EBookPage from './EBookPage'
import MainPage from './MainPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          {/* <Route element={<AuthPage />} path="/" /> */}
          <Route element={<FormRegister />} path="/auth" />
          <Route element={<AuthPage />} path="/login" />
          <Route element={<EBookPage />} path="/ebook" />
          <Route element={<AboutTeamPage />} path="/about" />
          {/* <Route element={} path="/statistics" /> */}
          <Route element={<MainPage />} path="/" />

        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default App

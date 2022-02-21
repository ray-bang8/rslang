import React from 'react'
import '../styles/App.css'
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom'
import FormLogin from '../components/auth/FormLogin'
import FormRegister from '../components/auth/FormRegister'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import StatisticPage from '../components/statistic/StatisticPage'
import AboutTeamPage from './AboutTeamPage'
import AudioCallsPage from './AudioCallsPage'
import AuthPage from './AuthPage'
import ChooseGame from './ChooseGame'
import EBookPage from './EBookPage'
import MainPage from './MainPage'
import SprintGamePage from './SprintGamePage'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route element={<ChooseGame />} path="/games" />
          <Route element={<SprintGamePage />} path="/sprint" />
          <Route element={<AuthPage />} path="/auth" />
          <Route element={<FormLogin />} path="/login" />
          <Route element={<EBookPage />} path="/ebook" />
          <Route element={<AboutTeamPage />} path="/about" />
          <Route element={<StatisticPage />} path="/statistics" />
          <Route element={<MainPage />} path="/" />
          <Route element={<FormRegister />} path="/register" />
          <Route element={<AudioCallsPage />} path="/audioCall" />

        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default App

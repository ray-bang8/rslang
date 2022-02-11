import React from 'react'
import AboutTeamSection from '../components/AboutTeamSection'
import EbookSection from '../components/EbookSection'
import GamesSection from '../components/GamesSection'
import MainSection from '../components/MainSection'
import StatisticSection from '../components/StatisticSection'

function MainPage() {
  return (
    <main>
      <MainSection />
      <EbookSection />
      <GamesSection />
      <StatisticSection />
      <AboutTeamSection />
    </main>
  )
}
export default MainPage


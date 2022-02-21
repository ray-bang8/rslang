import React from 'react'
import AboutTeamSection from '../components/main-page/AboutTeamSection'
import EbookSection from '../components/main-page/EbookSection'
import GamesSection from '../components/main-page/GamesSection'
import MainSection from '../components/main-page/MainSection'
import StatisticSection from '../components/main-page/StatisticSection'

function MainPage() {
  console.log('проверьте пожалуйста чуть позже,доделываю проект')
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


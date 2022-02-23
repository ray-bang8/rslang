import React from 'react'
import AboutTeamSection from '../components/main-page/AboutTeamSection'
import EbookSection from '../components/main-page/EbookSection'
import GamesSection from '../components/main-page/GamesSection'
import MainSection from '../components/main-page/MainSection'
import StatisticSection from '../components/main-page/StatisticSection'

function MainPage() {
  console.log('Мы по ошибке засабмитили ссылку на деплой,вот ссылка на PR https://github.com/ray-bang8/rslang/pull/38 , самооценка 500/600.Еще дорабатываем,можете оставить свой ник пожалуйста если проверяете')
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


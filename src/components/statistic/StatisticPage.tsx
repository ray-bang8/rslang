import React, { useState } from 'react'


export default function StatisticPage() {

  const [sprintStatistic, setSprintStatistic] = useState<string>('')
  const [longestStreak, setLongestStreak] = useState<string>('')
  const [correctAnswer, setCorrectAnswer] = useState<number>(0)

  const as = JSON.parse(localStorage.getItem('userData') as string)
  async function getStatistics(id:string, token:string) {
    const res = await fetch(
      `https://rslang-team48.herokuapp.com/users/${id}/statistics`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    )
    const data = await res.json()
    setSprintStatistic(data.optional.correctAnswers)
    setLongestStreak(data.optional.bestSeries)
    setCorrectAnswer((Number(sprintStatistic) * 100) / 20)
    return data
  }
  getStatistics(as.userId, as.token)
  return (
    <div className="stat-page">
      <h3 className="stat-page__header">Statistic for today</h3>
      <div className="stat-table">
        <table className="stat-table__body table">
          <thead className="stat-table__head">
            <tr className="stat-table__row">
              <th className="row__head">Game</th>
              <th className="row__head">Learned words</th>
              <th className="row__head">Correct(%)</th>
              <th className="row__head">The longest streak</th>
            </tr>
          </thead>
          <tbody className="stat-table__field">
            <tr className="field__row">
              <th className="field__row-root">Audio challenge</th>
              <td className="field__row-root data">0</td>
              <td className="field__row-root data">0%</td>
              <td className="field__row-root data">0</td>
            </tr>
            <tr className="field__row">
              <th className="field__row-root">Sprint</th>
              <td className="field__row-root data">{sprintStatistic}</td>
              <td className="field__row-root data">{`${correctAnswer}%`}</td>
              <td className="field__row-root data">{longestStreak}</td>
            </tr>
            <tr className="field__row">
              <th className="field__row-root">New words</th>
              <td className="field__row-root data">0</td>
              <td className="field__row-root data">0%</td>
              <td className="field__row-root data">0</td>
            </tr>
            <tr className="field__row last">
              <th className="field__row-root">Total</th>
              <td className="field__row-root data">0</td>
              <td className="field__row-root data">0%</td>
              <td className="field__row-root data" />
            </tr>
          </tbody>
        </table>
      </div>
      {/* <h3 className="stat-page__header all-time">Statistic for all time</h3> */}
    </div>
  )
}

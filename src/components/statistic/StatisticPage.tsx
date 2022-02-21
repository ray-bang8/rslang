import React from 'react'

export default function StatisticPage() {
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

async function postStatistics(userId, token, data) {
  const { countLearntWords, countFalseWords, longSerie } = data
  const time = new Date()
  const date = time.toLocaleDateString()
  const res = await fetch(
    `https://rslang-team48.herokuapp.com/users/${userId}/statistics`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        learnedWords: countLearntWords,
        optional: {
          game: 'Sprint',
          correctAnswers: countLearntWords,
          falseAnswers: countFalseWords,
          bestSeries: longSerie,
          lastChange: date,
        },
      }),
    }
  )
  const resData = await res.json()
  return resData
}

export default postStatistics

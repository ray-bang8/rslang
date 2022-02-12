function SprintAddScore(score, setScore, scoreLevel, setScoreLevel) {
  if (scoreLevel <= 3) {
    setScore(score + 20)
  } else if (scoreLevel >= 4 && scoreLevel < 7) setScore(score + 40)
  else if (scoreLevel >= 7) setScore(score + 60)
}

export default SprintAddScore

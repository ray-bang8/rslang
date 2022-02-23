import { Dispatch, SetStateAction } from 'react'

function SprintAddScore(
  score: number,
  setScore: Dispatch<SetStateAction<number>>,
  scoreLevel: number,
  setScoreLevel: Dispatch<SetStateAction<number>>,
  setScoreAddAnimation: Dispatch<SetStateAction<boolean>>
) {
  if (scoreLevel <= 3) {
    setScore(score + 20)
  } else if (scoreLevel > 3 && scoreLevel < 7) setScore(score + 40)
  else if (scoreLevel >= 7) setScore(score + 60)
  setScoreLevel(scoreLevel + 1)

  setScoreAddAnimation(true)
  setTimeout(() => {
    setScoreAddAnimation(false)
  }, 700)
}

export default SprintAddScore

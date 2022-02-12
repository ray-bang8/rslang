function SprintCheckResult(data: Word, answer: string) {
  console.log(data.wordTranslate, answer)
  if (data.wordTranslate === answer) return true
  return false
}

export default SprintCheckResult

interface Word {
  word: string
  wordTranslate: string
}

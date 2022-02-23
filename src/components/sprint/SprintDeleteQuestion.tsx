function SprintDeleteQuestion(data: Array<Word>, word: string) {
  let index = 0
  data.map((el, i) => {
    if (el.word === word) index = i
    return el
  })
  data.splice(index, 1)
}

export default SprintDeleteQuestion

interface Word {
  word: string
  wordTranslate: string
}

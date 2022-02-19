function SprintFindWord(word: string, data: Word[]) {
  let foundWord
  data.map((el) => {
    if (el.word === word) {
      foundWord = el
    }
    return el
  })
  return foundWord
}

export default SprintFindWord

interface Word {
  audio: string
  audioExample: string
  audioMeaning: string
  group: number | string
  id: string
  image: string
  page: number | string
  textExample: string
  textExampleTranslate: string
  textMeaning: string
  textMeaningTranslate: string
  transcription: string
  word: string
  wordTranslate: string
}

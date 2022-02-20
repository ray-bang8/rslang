import React, { useEffect } from 'react'
import HardWords from './HardWords'
import WordCardEbook from './WordCardEbook'

function HardWordBlock({
  userData,
  hardWords,
  setHardWords,
  status,
  authStatus,
  setAuthStatus,
}) {
  const { userId, refreshToken, token } = userData

  useEffect(() => {
    // async function fetchHardWords() {
    //   const fetchedHardWords = await HardWords(String(userId), token)
    //   const filteredHardWords = fetchedHardWords.reduce((acc, el) => {
    //     if (el.difficulty === 'hard') {
    //       acc.push(el)
    //       return acc
    //     }
    //   }, [])
    //   // await setHardWords(filteredHardWords)
      // console.log(fetchedHardWords)
    // }

    // fetchHardWords()
  }, [])
  console.log(hardWords)
  return hardWords.map((el) => (
    <WordCardEbook
      authStatus={authStatus}
      data={el.optional}
      hardWords={hardWords}
      key={el.optional.id}
      setAuthStatus={setAuthStatus}
      status={status}
    />
  ))
}

export default HardWordBlock

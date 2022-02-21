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
  setUpdate,
  update,
  showExampleText,
  showExampleTranslate,
  showMeaningText,
  showMeaningTranslate
}) {
  const { userId, refreshToken, token } = userData

  useEffect(() => {}, [])
  return hardWords.map((el) => (
    <WordCardEbook
      authStatus={authStatus}
      data={el.optional}
      hardWords={hardWords}
      key={el.optional.id}
      setAuthStatus={setAuthStatus}
      setUpdate={setUpdate}
      showExampleText={showExampleText}
      showExampleTranslate={showExampleTranslate}
      showMeaningText={showMeaningText}
      showMeaningTranslate={showMeaningTranslate}
      status={status}
      update={update}
    />
  ))
}

export default HardWordBlock

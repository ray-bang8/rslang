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
}) {
  const { userId, refreshToken, token } = userData

  useEffect(() => {
  }, [])
  return hardWords.map((el) => (
    <WordCardEbook
      authStatus={authStatus}
      data={el.optional}
      hardWords={hardWords}
      key={el.optional.id}
      setAuthStatus={setAuthStatus}
      setUpdate={setUpdate}
      status={status}
      update={update}
    />
  ))
}

export default HardWordBlock

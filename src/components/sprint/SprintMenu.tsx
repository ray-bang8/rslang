import React, { Dispatch, SetStateAction, useState } from 'react'

function SprintMenu({
  setGameStatus,
  setGroup,
  setScore,
  setScoreLevel,
  setEnd,
  setTime
}: PropMenu) {
  const [thisGroup, setThisGroup] = useState(9)

  function handleSelect(
    event: MouseEvent | TouchEvent | React.MouseEvent<Document, MouseEvent>
  ) {
    // @ts-ignore
    const element = event.target as HTMLInputElement
    setThisGroup(Number(element.value))
  }

  function handleStartBtn(): void {
    if (thisGroup !== 9) {
      setEnd(false)
      setGroup(thisGroup)
      setScoreLevel(0)
      setScore(0)
      setGameStatus(true)
      setTime(60)
    }
  }

  return (
    <div>
      <div className="sprint-menu">
        <h2 className="sprint-menu__title">Sprint</h2>
        <p className="sprint-menu__des">
          Trains the skill of quick translation from English into Russian. You
          need to choose whether the translation matches the suggested word
        </p>
        <select
          className="sprint-menu__select"
          defaultValue="selected"
          // @ts-ignore
          onClick={handleSelect}
        >
          <option disabled={true} value="selected">
            Select level
          </option>
          <option value="0">1</option>
          <option value="1">2</option>
          <option value="2">3</option>
          <option value="3">4</option>
          <option value="4">5</option>
          <option value="5">6</option>
        </select>
        <button
          className="sprint-menu__start-btn"
          onClick={handleStartBtn}
          type="button"
        >
          START
        </button>
      </div>
    </div>
  )
}

export default SprintMenu

interface PropMenu {
  //   results: Array<Word>
  setGameStatus: Dispatch<SetStateAction<boolean>>
  setGroup: Dispatch<SetStateAction<number>>
  setScore: Dispatch<SetStateAction<number>>
  setScoreLevel: Dispatch<SetStateAction<number>>
  setEnd: Dispatch<SetStateAction<boolean>>
  setTime: Dispatch<SetStateAction<number>>
}

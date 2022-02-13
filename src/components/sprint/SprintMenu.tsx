import React, { Dispatch, SetStateAction, useState } from 'react'

function SprintMenu({
  setGameStatus,
  setGroup,
  setScore,
  setScoreLevel
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
      setGroup(thisGroup)
      setScoreLevel(0)
      setScore(0)
      setGameStatus(true)
    }
  }

  return (
    <div>
      <div className="sprint-menu">
        <h2 className="sprint-menu__title">Sprint</h2>
        <p className="sprint-menu__des">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
          laborum nam. Explicabo illum optio tenetur aliquam vel? Minima ullam
          nulla neque porro, similique deserunt beatae iusto accusamus, commodi
          voluptate animi!
        </p>
        <select
          className="sprint-menu__select"
          defaultValue="selected"
          // @ts-ignore
          onClick={handleSelect}
        >
          <option disabled={true} value="selected">
            Select
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
}

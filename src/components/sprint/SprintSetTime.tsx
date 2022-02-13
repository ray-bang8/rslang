import React, {
  useEffect, useState, Dispatch, SetStateAction
} from 'react'

function SprintSetTime({ setEnd, gameStatus }: PropTime) {
  const [time, setTime] = useState(30)
  useEffect(() => {
    if (gameStatus) {
      if (time > 0) {
        setTimeout(() => {
          setTime(time - 1)
        }, 1000)
      } else {
        setEnd(true)
      }
    }
  }, [time])
  return <div className="time">{time}</div>
}

export default SprintSetTime

interface PropTime {
  setEnd: Dispatch<SetStateAction<boolean>>
  gameStatus: boolean
}
import React, {
  useEffect, Dispatch, SetStateAction
} from 'react'

function SprintSetTime({
  setEnd, gameStatus, time, setTime, end
}: PropTime) {
  useEffect(() => {
    if (gameStatus && !end) {
      if (time > 0) {
        setTimeout(() => {
          setTime(time - 1)
        }, 1000)
      } else {
        setEnd(true)
        setTime(0)
      }
    }
  }, [time, gameStatus])
  return <div className="time">{time}</div>
}

export default SprintSetTime

interface PropTime {
  setEnd: Dispatch<SetStateAction<boolean>>
  gameStatus: boolean
  time: number
  setTime: Dispatch<SetStateAction<number>>
  end: boolean
}

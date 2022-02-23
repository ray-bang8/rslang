import React, { Dispatch, SetStateAction } from 'react'

function SprintSettings({ setAudioStatus, audioStatus }: SettingsProps) {
  const handleGearBtn = () => {
    setAudioStatus(!audioStatus)
  }
  return (
    <img
      alt="gears"
      className="gear-icon"
      onClick={handleGearBtn}
      role="presentation"
      src={
        audioStatus
          ? 'https://cdn-icons-png.flaticon.com/512/3/3745.png'
          : 'http://cdn.onlinewebfonts.com/svg/img_519655.png'
      }
    />
  )
}

interface SettingsProps {
  setAudioStatus: Dispatch<SetStateAction<boolean>>
  audioStatus: boolean
}

export default SprintSettings

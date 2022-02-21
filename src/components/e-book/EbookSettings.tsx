/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Dispatch, SetStateAction } from 'react'


function EbookSettings({
  showExampleText,
  showMeaningText,
  showExampleTranslate,
  showMeaningTranslate,
  setActiveSettings,
  setShowExampleText,
  setShowMeaningText,
  setShowExampleTranslate,
  setShowMeaningTranslate
}: PropSettings) {
  const handleWordMeaning = () => {
    setShowMeaningText(!showMeaningText)
  }
  const handleWordExample = () => {
    setShowExampleText(!showExampleText)
  }
  const handleWordMeaningTranslate = () => {
    setShowExampleTranslate(!showExampleTranslate)
  }
  const handleWordExampleTranslate = () => {
    setShowMeaningTranslate(!showMeaningTranslate)
  }

  const handleCloseBtn = () => {
    setActiveSettings(false)
  }
  return (
    <div className="settings-category">
      <div className="settings-category__wrapper">
        <span
          className="settings__close-icon"
          onClick={handleCloseBtn}
          role="presentation"
        >
          x
        </span>
        <div className="settings__block">
          <span>Show word meaning</span>
          <input
            defaultChecked={true}
            onClick={handleWordMeaning}
            type="checkbox"
          />
        </div>
        <div className="settings__block">
          <span>Show word example</span>
          <input
            defaultChecked={true}
            onClick={handleWordExample}
            type="checkbox"
          />
        </div>
        <div className="settings__block">
          <span>Show word meaning translate</span>
          <input
            defaultChecked={true}
            onClick={handleWordMeaningTranslate}
            type="checkbox"
          />
        </div>
        <div className="settings__block">
          <span>Show word example translate</span>
          <input
            defaultChecked={true}
            onClick={handleWordExampleTranslate}
            type="checkbox"
          />
        </div>
      </div>
    </div>
  )
}

export default EbookSettings

interface PropSettings {
  showExampleText: boolean
  showMeaningText: boolean
  showExampleTranslate: boolean
  showMeaningTranslate: boolean
  setShowExampleText: Dispatch<SetStateAction<boolean>>
  setShowMeaningText: Dispatch<SetStateAction<boolean>>
  setShowExampleTranslate: Dispatch<SetStateAction<boolean>>
  setShowMeaningTranslate: Dispatch<SetStateAction<boolean>>
  setActiveSettings: Dispatch<SetStateAction<boolean>>
}

import React, { useEffect, useState } from 'react'
import EBookCurrentPage from './EBookCurrentPage'
import EBookNavigator from './EBookNavigator'
import EBookNextPage from './EBookNextPage'
import EBookPrevPage from './EBookPrevPage'
import EbookBtn from './EbookBtn'
import EbookSettings from './EbookSettings'
import HardWordBlock from './HardWordBlock'
import HardWords from './HardWords'
import WordCardEbook from './WordCardEbook'
import './ebook.scss'

// eslint-disable-next-line no-unused-vars

function EBook() {
  const [data, setData] = useState([
    {
      word: 'Loading',
      id: 0
    }
  ])

  const [group, setGroup] = useState(1)
  const [page, setPage] = useState(1)
  const [navStatus, setNavStatus] = useState(true)
  const [status, setStatus] = useState('ebook')
  const [authStatus, setAuthStatus] = useState(false)
  const [learntWords, setLearntWords] = useState([])
  const [hardWords, setHardWords] = useState([])
  const [update, setUpdate] = useState(0)
  const [showExampleText, setShowExampleText] = useState(true)
  const [showMeaningText, setShowMeaningText] = useState(true)
  const [showExampleTranslate, setShowExampleTranslate] = useState(true)
  const [showMeaningTranslate, setShowMeaningTranslate] = useState(true)
  const [activeSettings, setActiveSettings] = useState(false)

  const userDataInfo = localStorage.getItem('userData')
  let userId: any
  let refreshToken: any
  let token: any

  if (userDataInfo) {
    userId = JSON.parse(userDataInfo).userId
    refreshToken = JSON.parse(userDataInfo).refreshToken
    token = JSON.parse(userDataInfo).token
  }

  useEffect(() => {
    const basicURL = 'https://rslang-team48.herokuapp.com/'
    const getPage = localStorage.getItem('curPage')
    const getGroup = localStorage.getItem('curGroup')
    const getNavStatus = localStorage.getItem('navStatus')

    if (getNavStatus === 'true') {
      setNavStatus(true)
    } else {
      setNavStatus(false)
      setGroup(Number(getGroup))
      setPage(Number(getPage))
    }

    fetch(`${basicURL}words?group=${group}&page=${page}`)
      .then((i) => i.json())
      .then((i) => {
        setData(i)
      })
      .catch((err) => {
        throw err
      })
  }, [group, page])

  useEffect(() => {
    if (userDataInfo) {
      const {
        userId,
        token
        // @ts-ignore
      } = JSON.parse(userDataInfo)

      // @ts-ignore
      // eslint-disable-next-line no-inner-declarations
      async function fetchHardWords() {
        if (authStatus) {
          const fetchedHardWords = await HardWords(String(userId), token)

          const filteredLearntWords: Array<object> = []
          const filteredHardWords = (fetchedHardWords as Array<object>).reduce(
            // @ts-ignore
            (acc: Array<object>, el: UserData) => {
              // @ts-ignore
              if (el.difficulty === 'hard') {
                acc.push(el)
                // @ts-ignore
              } else if (el.difficulty === 'learnt') {
                filteredLearntWords.push(el)
              }
              return acc
            },
            []
          )

          // @ts-ignore
          setHardWords(filteredHardWords)
          // @ts-ignore
          setLearntWords(filteredLearntWords)
        }
      }

      fetchHardWords()
    }
  }, [update])

  const handleSettingsBtn = () => {
    setActiveSettings(!activeSettings)
  }

  return (
    <div>
      <div className="ebook-btns-wrapper">
        <div className="ebook-icon-top">E-book</div>
        {userDataInfo ? (
          <EbookBtn
            btnName="Ebook Words"
            setStatus={setStatus}
            setUpdate={setUpdate}
            update={update}
          />
        ) : (
          ''
        )}
        {userDataInfo ? (
          <EbookBtn
            btnName="Learnt Words"
            setStatus={setStatus}
            setUpdate={setUpdate}
            update={update}
          />
        ) : (
          ''
        )}
        {userDataInfo ? (
          <EbookBtn
            btnName="Difficult Words"
            setStatus={setStatus}
            setUpdate={setUpdate}
            update={update}
          />
        ) : (
          ''
        )}
        <div className="settings">
          <img
            alt="settings"
            className="settings-icon"
            onClick={handleSettingsBtn}
            role="presentation"
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-gear-512.png"
          />
        </div>
      </div>
      <div className="cards-wrapper">
        {navStatus ? (
          <EBookNavigator
            setGr={setGroup}
            setNavStatus={setNavStatus}
            setPages={setPage}
          />
        ) : (
          ' '
        )}
        {status === 'ebook'
          ? data.map((el) => (
            <WordCardEbook
              authStatus={authStatus}
              data={el}
              hardWords={hardWords}
              key={el.id}
              learntWords={learntWords}
              setAuthStatus={setAuthStatus}
                // @ts-ignore
              setHardWords={setHardWords}
              setLearntWords={setLearntWords}
              setUpdate={setUpdate}
              showExampleText={showExampleText}
              showExampleTranslate={showExampleTranslate}
              showMeaningText={showMeaningText}
              showMeaningTranslate={showMeaningTranslate}
              status={status}
              update={update}
            />
          ))
          : ''}

        {authStatus && status === 'hard' ? (
          <HardWordBlock
            authStatus={authStatus}
            hardWords={hardWords}
            setAuthStatus={setAuthStatus}
            setHardWords={setHardWords}
            setUpdate={setUpdate}
            showExampleText={showExampleText}
            showExampleTranslate={showExampleTranslate}
            showMeaningText={showMeaningText}
            showMeaningTranslate={showMeaningTranslate}
            status={status}
            update={update}
            userData={{ userId, refreshToken, token }}
          />
        ) : (
          ''
        )}

        {status === 'learnt'
          ? learntWords.map((el) => (
            // @ts-ignore
            <WordCardEbook
              authStatus={authStatus}
                // @ts-ignore
              data={el.optional}
                // @ts-ignore
              key={el.id}
              setAuthStatus={setAuthStatus}
              setUpdate={setUpdate}
              showExampleText={showExampleText}
              showExampleTranslate={showExampleTranslate}
              showMeaningText={showMeaningText}
              showMeaningTranslate={showMeaningTranslate}
              update={update}
            />
          ))
          : ''}

        {status === 'ebook' ? (
          <div className="ebook-navigator-menu">
            <button
              className="menu-wrapper"
              onClick={() => {
                setNavStatus(true)
                localStorage.setItem('navStatus', `${true}`)
              }}
              type="button"
            >
              Menu
            </button>
            <EBookPrevPage curPage={page} setPrevPage={setPage} />
            <EBookNextPage curPage={page} setNextPage={setPage} />
            <EBookCurrentPage curPage={page} />
            <div className="blured-opacity"> </div>
          </div>
        ) : (
          ''
        )}
      </div>
      {activeSettings ? (
        <EbookSettings
          setActiveSettings={setActiveSettings}
          setShowExampleText={setShowExampleText}
          setShowExampleTranslate={setShowExampleTranslate}
          setShowMeaningText={setShowMeaningText}
          setShowMeaningTranslate={setShowMeaningTranslate}
          showExampleText={showExampleText}
          showExampleTranslate={showExampleTranslate}
          showMeaningText={showMeaningText}
          showMeaningTranslate={showMeaningTranslate}
        />
      ) : (
        ''
      )}
    </div>
  )
}
export default EBook

interface UserData {
  token: string
  refreshToken: string
  message?: 'authenticated'
  userId?: string
}

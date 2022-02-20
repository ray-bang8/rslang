import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import EBookCurrentPage from './EBookCurrentPage'
import EBookNavigator from './EBookNavigator'
import EBookNextPage from './EBookNextPage'
import EBookPrevPage from './EBookPrevPage'
import EbookBtn from './EbookBtn'
import HardWordBlock from './HardWordBlock'
import HardWords from './HardWords'
import WordCardEbook from './WordCardEbook'
import './ebook.scss'

// eslint-disable-next-line no-unused-vars
const userData = {
  message: 'Authenticated',
  userId: '620e40398872720016070592',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGU0MDM5ODg3MjcyMDAxNjA3MDU5MiIsImlhdCI6MTY0NTM4MjQ5OSwiZXhwIjoxNjQ1Mzk2ODk5fQ.J2GP18nhVHsH1fKj7ozGYIdEOXNeQW0MGvXR2PUCLx8',
  refreshToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGU0MDM5ODg3MjcyMDAxNjA3MDU5MiIsInRva2VuSWQiOiJlN2RjYWYzZC1kOTVlLTRjOWEtOWUwMi03N2VkZmJlMDI2ODAiLCJpYXQiOjE2NDUzNTAwMDksImV4cCI6MTY0NTM2NjIwOX0.CgaCT9lMkq09IpnGasYv_Rp63jscWOkgy7HJ8-m6ijw'
}

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

  return (
    <div>
      <Header />
      <div className="ebook-btns-wrapper">
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
      <Footer />
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

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
import RefreshToken from './RefreshToken'
import WordCardEbook from './WordCardEbook'
import './ebook.scss'

const userData = {
  message: 'Authenticated',
  userId: '620e40398872720016070592',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGU0MDM5ODg3MjcyMDAxNjA3MDU5MiIsImlhdCI6MTY0NTM4MjQ5OSwiZXhwIjoxNjQ1Mzk2ODk5fQ.J2GP18nhVHsH1fKj7ozGYIdEOXNeQW0MGvXR2PUCLx8',
  refreshToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGU0MDM5ODg3MjcyMDAxNjA3MDU5MiIsInRva2VuSWQiOiJlN2RjYWYzZC1kOTVlLTRjOWEtOWUwMi03N2VkZmJlMDI2ODAiLCJpYXQiOjE2NDUzNTAwMDksImV4cCI6MTY0NTM2NjIwOX0.CgaCT9lMkq09IpnGasYv_Rp63jscWOkgy7HJ8-m6ijw',
}
localStorage.setItem('userData', JSON.stringify(userData))

function EBook() {
  const [data, setData] = useState([
    {
      word: 'Loading',
      id: 0,
    },
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
  const {
    userId,
    refreshToken,
    token,
    message,
    // @ts-ignore
  } = JSON.parse(userDataInfo)

  useEffect(() => {
    console.log(token)

    const basicURL = 'https://rslang-team48.herokuapp.com/'
    const getPage = localStorage.getItem('curPage')
    const getGroup = localStorage.getItem('curGroup')
    const getNavStatus = localStorage.getItem('navStatus')

    // const newUserData = RefreshToken(String(userId), refreshToken)
    // console.log(newUserData)

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

    // setTimeout(() => {
    //   setStatus('hard')
    //   setStatus('ebook')
    // }, 1000)
  }, [group, page])

  useEffect(() => {
    async function fetchHardWords() {
      const fetchedHardWords = await HardWords(String(userId), token)

      const filteredLearntWords: Array<object> = []
      const filteredHardWords = (fetchedHardWords as Array<object>).reduce(
        // @ts-ignore
        (acc: Array<object>, el: UserData) => {
          if (el.difficulty === 'hard') {
            acc.push(el)
          } else if (el.difficulty === 'learnt') {
            filteredLearntWords.push(el)
          }
          return acc
        },
        []
      )

      setHardWords(filteredHardWords)
      setLearntWords(filteredLearntWords)
    }

    fetchHardWords()
  }, [update])

  return (
    <div>
      <Header />
      {message === 'Authenticated' ? (
        <EbookBtn btnName="Ebook Words" setStatus={setStatus} />
      ) : (
        ''
      )}
      {message === 'Authenticated' ? (
        <EbookBtn btnName="Learnt Words" setStatus={setStatus} />
      ) : (
        ''
      )}
      {message === 'Authenticated' ? (
        <EbookBtn btnName="Hard Words" setStatus={setStatus} />
      ) : (
        ''
      )}
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
                setHardWords={setHardWords}
                setLearntWords={setLearntWords}
                status={status}
                update={update}
                setUpdate={setUpdate}
              />
            ))
          : ''}

        {status === 'hard' ? (
          <HardWordBlock
            authStatus={authStatus}
            hardWords={hardWords}
            setAuthStatus={setAuthStatus}
            setHardWords={setHardWords}
            status={status}
            userData={{ userId, refreshToken, token }}
            update={update}
            setUpdate={setUpdate}
          />
        ) : (
          ''
        )}

        {status === 'learnt'
          ? learntWords.map((el) => (
              <WordCardEbook
                authStatus={authStatus}
                data={el.optional}
                key={el.id}
                setAuthStatus={setAuthStatus}
                update={update}
                setUpdate={setUpdate}
              />
            ))
          : ''}

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

import React, { Dispatch, SetStateAction, useEffect } from 'react'

function EbookBtn({ btnName, setStatus }: BtnProp) {
  const handleEbookBtn = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).textContent === 'Ebook Words') {
      setStatus('ebook')
    } else if ((e.target as HTMLElement).textContent === 'Learnt Words') {
      console.log((e.target as HTMLElement).textContent)

      setStatus('learnt')
    } else if ((e.target as HTMLElement).textContent === 'Hard Words') {
      setStatus('hard')
    }
  }

  const btns = document.querySelectorAll('.ebook-btns')
  for (let i = 0; i < btns.length; i++) {
    if (btns[i].textContent === 'Ebook Words') {
      ;(btns[i] as HTMLElement).style.backgroundColor = ''
    } else if (btns[i].textContent === 'Learnt Words') {
      ;(btns[i] as HTMLElement).style.backgroundColor = 'green'
    } else if (btns[i].textContent === 'Hard Words') {
      ;(btns[i] as HTMLElement).style.backgroundColor = '#ff253a'
    }
  }
  // useEffect(() => {}, [])

  return (
    <button className="ebook-btns" onClick={handleEbookBtn} type="button">
      {btnName}
    </button>
  )
}

export default EbookBtn

type BtnProp = {
  btnName: string
  setStatus: Dispatch<SetStateAction<string>>
}

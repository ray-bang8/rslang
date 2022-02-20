import React, { Dispatch, SetStateAction } from 'react'

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

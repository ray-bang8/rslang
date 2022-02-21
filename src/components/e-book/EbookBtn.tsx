import React, { Dispatch, SetStateAction } from 'react'

function EbookBtn({
  btnName, setStatus, update, setUpdate
}: BtnProp) {
  const handleEbookBtn = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).textContent === 'Ebook Words') {
      setUpdate(update + 1)
      setStatus('ebook')
    } else if ((e.target as HTMLElement).textContent === 'Learnt Words') {
      setStatus('learnt')
      setUpdate(update + 1)
    } else if ((e.target as HTMLElement).textContent === 'Difficult Words') {
      setStatus('hard')
      setUpdate(update + 1)
    }
  }

  const btns = document.querySelectorAll('.ebook-btns')
  for (let i = 0; i < btns.length; i++) {
    if (btns[i].textContent === 'Ebook Words') {
      (btns[i] as HTMLElement).style.boxShadow = '2px 4px 13px 0px black';
      (btns[i] as HTMLElement).style.backgroundColor = ''
    } else if (btns[i].textContent === 'Learnt Words') {
      (btns[i] as HTMLElement).style.backgroundColor = 'green';
      (btns[i] as HTMLElement).style.boxShadow = '2px 4px 13px 0px black';
      (btns[i] as HTMLElement).style.color = 'white'
    } else if (btns[i].textContent === 'Difficult Words') {
      (btns[i] as HTMLElement).style.backgroundColor = '#ff253a';
      (btns[i] as HTMLElement).style.color = 'white';
      (btns[i] as HTMLElement).style.boxShadow = '2px 4px 13px 0px black'
    }
  }

  return (
    <button
      className="ebook-btns pad-btn"
      onClick={handleEbookBtn}
      type="button"
    >
      {btnName}
    </button>
  )
}

export default EbookBtn

type BtnProp = {
  btnName: string
  setStatus: Dispatch<SetStateAction<string>>
  update: number
  setUpdate: Dispatch<SetStateAction<number>>
}

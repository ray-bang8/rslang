import React from 'react'

function EBookWordBtns() {
  return (
    <div className="card__word-btns">
      <button className="card__set-btn" type="button">
        <img
          alt="lightning"
          className="card__btn"
          src="https://cdn-icons-png.flaticon.com/512/179/179547.png"
        />
      </button>
      <button className="card__delete-btn" type="button">
        <img
          alt="bucket"
          className="card__btn"
          src="https://icon-library.com/images/delete-icon-image/delete-icon-image-17.jpg"
        />
      </button>
    </div>
  )
}

export default EBookWordBtns

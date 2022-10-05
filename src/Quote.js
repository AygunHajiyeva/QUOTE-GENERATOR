import React from 'react'

const Quote = ({quote, author, handleClick}) => {
  return (
    <div className='quote-container'>
   <section className='quote'>{quote}</section>
   <section className='author'>{author}</section>
   <button className='quote-btn' onClick={handleClick}>Change Quote</button>
    </div>
  )
}

export default Quote
import React from 'react'

const Quote = ({ quote, author }) => {
  return (
    <div className='quote-container' >
      <section className='quote'>{quote}</section>
      <section className='author'>{author}</section>
      
    </div>
  )
}

export default Quote
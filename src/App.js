import React from 'react'
import Button from '@mui/material/Button';
import "./App.css"
import Quote from './Quote'
import { useState, useEffect } from 'react'
import library from './images/library.jpg'


const App = () => {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  const getApi = () => {
    const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const dataQuote = data.quotes
        const randomNum = Math.floor(Math.random() * dataQuote.length)
        const currentQuote = dataQuote[randomNum]
        console.log(currentQuote.quote.length)
        if (currentQuote.quote.length < 276) {
          setQuote(currentQuote.quote)
          setAuthor(currentQuote.author)
        }

      })
  }

  useEffect(() => {
    getApi()
  }, [])


  return (
    <div className='app' style={{ backgroundImage: `url(${library})` }}>

      <Quote quote={quote} author={author} />
      <section className="btn">
        <Button variant="contained" color="secondary" size="large" style={{ fontSize: 25 }} className='quote-btn' onClick={() => getApi()}>New Quote</Button>
      </section>
    </div>
  )
}

export default App
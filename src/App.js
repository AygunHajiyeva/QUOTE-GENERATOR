import React from 'react'
import "./App.css"
import Quote from './Quote'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

    const [options, setOptions] = useState(null)


  return (
    <div className='app'>
        <Quote />
    </div>
  )
}

export default App
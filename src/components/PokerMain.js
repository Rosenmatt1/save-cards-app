import React, { useEffect } from 'react'
import '../assets/tailwind.css'
import Deal from './Deal.js'
import data from '../data.js'

//This componenet is where the initial fetch query could be.
const PokerMain = () => {
  let fullDeck = data || null

  useEffect(() => {
    localStorage.setItem('fullDeck', JSON.stringify(data))
  }, [])

  return <Deal data={fullDeck} />
}

export default PokerMain

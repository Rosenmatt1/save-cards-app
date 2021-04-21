import React, { useEffect } from 'react'
import '../assets/tailwind.css'
import data from '../data.js'
import Deal from './Deal.js'

// This componenet is where the initial fetch query could be.
const PokerMain = () => {
  const fullDeck = data || null

  useEffect(() => {
    localStorage.setItem('fullDeck', JSON.stringify(data))
  }, [])

  return <Deal data={fullDeck} />
}

export default PokerMain

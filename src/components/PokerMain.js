import React, { useState, useEffect, useContext } from 'react'
import '../App.css'
import Deal1 from './Deal.js'
import data from '../data.js'

//This componenet is where the initial fetch query would be.
function PokerMain() {
  let fullDeck = data || null

  return <Deal1 data={fullDeck} />
}

export default PokerMain

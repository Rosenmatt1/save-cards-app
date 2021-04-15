import React, { useState, useEffect, useContext } from 'react'
import '../App.css'
import Deal from './Deal.js'
import data from '../data.js'

//This componenet is where the initial fetch query would be.
function PokerMain() {
  let fullDeck = data || null

  return <Deal data={fullDeck} />
}

export default PokerMain

import React, { useState, useEffect } from 'react'
import '../assets/tailwind.css'

import Cards from './Cards.js'
// import Counter from './Counter.js'
import WinOrLose from './WinOrLose.js'
import DealerDeck from './DealerDeck.js'
import PlayAgain from './PlayAgain.js'
// import Reset from './Reset.js'
// import Loader from './shared/Loader.js';
// import Error from './shared/Error.js';
// import data from '../data.js'

const Deal = ({ data }) => {
  let [cards, setCards] = useState(data)
  let [winner, setWinner] = useState(false)
  let card = null
  let activeCards = []
  let randomIndex = null
  let fullDeck = [] || null

  useEffect(() => {
    fullDeck = localStorage.getItem('fullDeck')
    console.log('fullDeck from local storage on Load', fullDeck)
  }, [])

  let generateRandomCards = () => {
    if (cards.length > 2) {
      for (let i = 0; i <= 4; i++) {
        randomIndex = Math.floor(Math.random() * cards.length)
        card = cards[randomIndex]
        activeCards.push(card)
        // console.log('activeCards', activeCards)
        cards.splice(randomIndex, 1)
        console.log('cards length in generateRandomCards', cards.length)
        // console.log('data', data)
      }
      activeCards = []
    } else if (cards.length == 2) {
      activeCards.push(cards[0])
      activeCards.push(cards[1])
      console.log('ActiveCards in Final Two!', activeCards)
      console.log('Game Over')
      checkWin(cards)
      cards = []
      activeCards = []
    }
  }

  let checkWin = () => {
    if (cards[0].name === 'A' || cards[1].name === 'A') {
      console.log('You Win')
      setWinner(true)
    } else {
      console.log('You Lose Sucker')
      setWinner(false)
    }
  }

  let resetDeck = () => {
    setCards(fullDeck)
    console.log('Cards in Reset', cards)
    console.log('fullDeck in Reset', fullDeck)
  }

  return (
    <div className="poker-main w-screen h-screen bg-gradient-to-b from-green-400 to-black ring-1">
      {cards.length !== 0 && <DealerDeck />}

      {cards.length == 0 ? (
        <PlayAgain onClick={() => resetDeck()} />
      ) : (
        <div
          className="deal-container w-96 h-28 rounded-lg flex justify-center items-center text-7xl font-extrabold bg-yellow-300"
          onClick={() => generateRandomCards()}
        >
          <div className="deal"> DEAL </div>
        </div>
      )}

      <div className="counter-container w-32 h-28 rounded-sm border-solid border-4 border-yellow-200 border-opacity-75 flex justify-center items-center text-center text-xl font-bold text-white bg-black">
        <div className="counter">
          <div> {cards.length} </div>
          <div> Cards Left </div>
        </div>
      </div>

      <Cards data={activeCards} />

      {cards.length == 0 && <WinOrLose winner={winner} />}

      <div className="reset-container" onClick={() => resetDeck()}>
        <div className="reset"> Reset </div>
      </div>
    </div>
  )
}

export default Deal

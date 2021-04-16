import React, { useState, useEffect } from 'react'
import '../App.css'

import Cards from './Cards.js'
import Counter from './Counter.js'
import WinOrLose from './WinOrLose.js'
import DealerDeck from './DealerDeck.js'
import PlayAgain from './PlayAgain.js'
// import Reset from './Reset.js'
// import Loader from './shared/Loader.js';
// import Error from './shared/Error.js';
import allcards from '../data.js'

function Deal({ data }) {
  let allCards = data
  // console.log("Deal Data", fullDeck)
  const [fullDeck, setFullDeck] = useState(data)
  const [cards, setCards] = useState(allCards)
  const [winner, setWinner] = useState(false)
  // let cards = data
  let card = null
  let activeCards = []
  let randomIndex = null

  let generateRandomCards = () => {
    if (cards.length > 2) {
      for (let i = 0; i <= 4; i++) {
        randomIndex = Math.floor(Math.random() * cards.length)
        card = cards[randomIndex]
        activeCards.push(card)
        console.log('activeCards', activeCards)
        cards.splice(randomIndex, 1)
        console.log('cards', cards.length)
        console.log('data', data)
      }
      activeCards = []
    } else if (cards.length == 2) {
      activeCards.push(cards[0])
      activeCards.push(cards[1])
      console.log('ActiveCards!', activeCards)
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
    // cards = fullDeck
    console.log('Cards in Reset', cards)
    console.log('full deck in Reset', data)
    console.log('fullDeck', fullDeck)
  }

  return (
    <div className="poker-main">
      {cards.length !== 0 && <DealerDeck />}
      {cards.length == 0 ? (
        <PlayAgain onClick={() => resetDeck()} />
      ) : (
        <div className="deal-container" onClick={() => generateRandomCards()}>
          {' '}
          <div className="deal"> DEAL </div>{' '}
        </div>
      )}
      <Counter data={cards} />
      <Cards data={activeCards} />
      {cards.length == 0 && <WinOrLose winner={winner} />}

      <div className="reset-container" onClick={() => resetDeck()}>
        <div className="reset"> Reset </div>
      </div>
    </div>
  )
}

export default Deal

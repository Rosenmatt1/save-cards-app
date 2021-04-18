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

import { ReactComponent as Winner } from '../assets/Winner.svg'

const Deal = ({ data }) => {
  // let [cards, setCards] = useState(data)
  // console.log("Cards!!!!!", cards)
  let [winner, setWinner] = useState(true)
  let fullDeck = JSON.parse(localStorage.getItem('fullDeck'))
  console.log('fullDeck', fullDeck)
  let cards = data
  console.log('Cards!!!!!', cards)
  let card = null
  let activeCards = []
  let randomIndex = null

  // useEffect(() => {
  //   fullDeck = JSON.parse(localStorage.getItem('fullDeck'))
  //   console.log('fullDeck from local storage on Load', fullDeck)
  // }, [cards])

  let generateRandomCards = () => {
    if (cards.length > 2) {
      for (let i = 0; i <= 4; i++) {
        randomIndex = Math.floor(Math.random() * cards.length)
        card = cards[randomIndex]
        // console.log("Card inRndomCards", card)
        activeCards.push(card)
        // console.log('activeCards inRndomCards', activeCards)
        cards.splice(randomIndex, 1)
        console.log('cards length in generateRandomCards', cards.length)
        // console.log('data', data)
      }
      // activeCards = []
    }
    // else if (cards.length === 2) {
    //   activeCards.push(cards[0])
    //   activeCards.push(cards[1])
    //   console.log('ActiveCards in Final Two!', activeCards)
    //   console.log('Game Over')
    //   checkWin(cards)
    //   // cards = []
    //   activeCards = []
    // }
  }

  // let checkWin = () => {
  //   if (cards[0].name === 'A' || cards[1].name === 'A') {
  //     console.log('You Win')
  //     setWinner(true)
  //   } else {
  //     console.log('You Lose Sucker')
  //     setWinner(false)
  //   }
  // }

  let resetDeck = () => {
    cards = fullDeck
    console.log('Cards in Reset', cards)
    console.log('fullDeck in Reset', fullDeck)
    // setWinner(false)
  }

  return (
    <div className="poker-main w-screen h-screen bg-gradient-to-b from-green-400 to-black ring-1">
      {cards.length !== 0 && <DealerDeck />}

      {cards.length === 0 ? (
        <PlayAgain onClick={() => resetDeck()} />
      ) : (
        <div
          className="deal-container w-96 h-28 rounded-lg flex justify-center items-center text-7xl font-extrabold bg-yellow-300 hover:text-red-900 hover:bg-white"
          onClick={() => generateRandomCards()}
        >
          <div className="deal"> DEAL </div>
        </div>
      )}

      <div className="counter-container block w-36 h-28 rounded-sm border-solid border-4 border-yellow-500 border-opacity-75 flex justify-center items-center text-center text-xl font-bold text-white bg-black">
        <div className="counter">
          <div> {cards.length} </div>
          <div> Cards Left </div>
        </div>
      </div>

      <Cards data={activeCards} />

      {cards.length === 0 && <WinOrLose winner={winner} />}

      {/* <div className="winner z-10"><Winner /></div> */}

      <div
        className="reset-container w-56 h-16 rounded-2xl flex justify-center items-center bg-transparent text-yellow-300 border-2 border-yellow-300 hover:border-red-900 hover:text-red-900 transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
        onClick={() => resetDeck()}
      >
        <div className="reset font-bold text-3xl"> Reset </div>
      </div>
    </div>
  )
}

export default Deal

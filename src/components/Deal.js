import React, { useState, useEffect } from 'react'
import '../assets/tailwind.css'

import Cards from './Cards.js'
// import Counter from './Counter.js'
import WinOrLose from './WinOrLose.js'
import DealerDeck from './DealerDeck.js'
import PlayAgain from './PlayAgain.js'

import { ReactComponent as Diamond } from '../assets/Diamond.svg'
import { ReactComponent as Spade } from '../assets/Spade.svg'
import { ReactComponent as Heart } from '../assets/Heart.svg'
import { ReactComponent as Clover } from '../assets/Clover.svg'

// import Reset from './Reset.js'
// import Loader from './shared/Loader.js';
// import Error from './shared/Error.js';

import { ReactComponent as Winner } from '../assets/Winner.svg'

const Deal = ({ data }) => {
  let [cards, setCards] = useState(data)
  // console.log("Cards!!!!!", cards)
  let [winner, setWinner] = useState(false)
  let fullDeck = JSON.parse(localStorage.getItem('fullDeck'))
  console.log('fullDeck', fullDeck)
  // let cards = data
  console.log('Cards!!!!!', cards)
  let card = null
  let randomIndex = null

  // let [activeCards, setActiveCards] = useState(null)
  // let activeCards = []

  let [card1, setCard1] = useState(null)
  let [card2, setCard2] = useState(null)
  let [card3, setCard3] = useState(null)
  let [card4, setCard4] = useState(null)
  let [card5, setCard5] = useState(null)

  // useEffect(() => {
  //   fullDeck = JSON.parse(localStorage.getItem('fullDeck'))
  //   console.log('fullDeck from local storage on Load', fullDeck)
  // }, [cards])

  let generateRandomCards = () => {
    if (cards.length > 2) {
      randomIndex = Math.floor(Math.random() * cards.length)
      setCard1(cards[randomIndex])
      console.log('Card1', card1)
      // activeCards.push(card1)
      // console.log('activeCards inRndomCards', activeCards)
      cards.splice(randomIndex, 1)
      console.log('cards length in generateRandomCards', cards.length)

      randomIndex = Math.floor(Math.random() * cards.length)
      setCard2(cards[randomIndex])
      console.log('Card2', card2)
      cards.splice(randomIndex, 1)
      console.log('cards length in generateRandomCards', cards.length)

      randomIndex = Math.floor(Math.random() * cards.length)
      setCard3(cards[randomIndex])
      console.log('Card3', card3)
      cards.splice(randomIndex, 1)
      console.log('cards length in generateRandomCards', cards.length)

      randomIndex = Math.floor(Math.random() * cards.length)
      setCard4(cards[randomIndex])
      console.log('Card4', card4)
      cards.splice(randomIndex, 1)
      console.log('cards length in generateRandomCards', cards.length)

      randomIndex = Math.floor(Math.random() * cards.length)
      setCard5(cards[randomIndex])
      console.log('Card5', card5)
      cards.splice(randomIndex, 1)
      console.log('cards length in generateRandomCards', cards.length)
    } else if (cards.length === 2) {
      setCard1(cards[0])
      setCard2(cards[1])
      // console.log('ActiveCards in Final Two!', activeCards)
      console.log('Game Over')
      checkWin(cards)
    }
  }

  // let generateRandomCards = () => {
  //   if (cards.length > 2) {
  //     for (let i = 0; i <= 4; i++) {
  //       randomIndex = Math.floor(Math.random() * cards.length)
  //       card = cards[randomIndex]
  //       // console.log("Card inRndomCards", card)
  //       activeCards.push(card)
  //       // console.log('activeCards inRndomCards', activeCards)
  //       cards.splice(randomIndex, 1)
  //       console.log('cards length in generateRandomCards', cards.length)
  //       // console.log('data', data)
  //     }
  //     // activeCards = []
  //   } else if (cards.length === 2) {
  //     activeCards.push(cards[0])
  //     activeCards.push(cards[1])
  //     console.log('ActiveCards in Final Two!', activeCards)
  //     console.log('Game Over')
  //     checkWin(cards)
  //     // cards = []
  //     activeCards = []
  //   }
  // }

  let checkWin = () => {
    if (cards[0].name === 'A' || card1.name === 'A') {
      console.log('You Win')
      setWinner(true)
    } else {
      console.log('You Lose Sucker')
      setWinner(false)
    }
  }

  let resetDeck = () => {
    cards = fullDeck
    console.log('Cards in Reset', cards)
    console.log('fullDeck in Reset', fullDeck)
    // setWinner(false)
  }

  return (
    <div className="poker-main w-screen h-screen bg-gradient-to-b from-green-400 to-black ring-1 relative">
      {cards.length !== 0 && <DealerDeck />}

      {cards.length === 0 ? (
        <PlayAgain onClick={() => resetDeck()} />
      ) : (
        <div
          className="deal-container w-96 h-28 rounded-lg flex justify-center items-center text-7xl font-extrabold bg-yellow-300 hover:text-red-900 absolute inset top-3/4 right-1/2"
          onClick={() => generateRandomCards()}
        >
          <div className="deal"> DEAL </div>
        </div>
      )}

      <div className="counter-container block w-36 h-28 rounded-sm border-solid border-4 border-yellow-500 border-opacity-75 flex justify-center items-center text-center text-xl font-bold text-white bg-black absolute inset top-24 right-1/2">
        <div className="counter">
          <div> {cards.length} </div>
          <div> Cards Left </div>
        </div>
      </div>

      <Cards card1={card1} card2={card2} card3={card3} card4={card4} card5={card5} />

      {/* {cards.length === 0 && <WinOrLose winner={winner} />} */}

      <div
        className="w-56 h-16 rounded-2xl flex justify-center items-center bg-transparent text-yellow-300 border-2 border-yellow-300 hover:border-red-900 hover:text-red-900 transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 absolute inset bottom-5 right-5"
        onClick={() => resetDeck()}
      >
        <div className="reset font-bold text-3xl"> Reset </div>
      </div>
    </div>
  )
}

export default Deal

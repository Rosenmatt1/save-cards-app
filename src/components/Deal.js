import React, { useState, useEffect } from 'react'
import '../assets/tailwind.css'

import Cards from './Cards.js'
// import Counter from './Counter.js'

import WinOrLose from './WinOrLose.js'
import DealerDeck from './DealerDeck.js'
import { ReactComponent as Winner } from '../assets/Winner.svg'

const Deal = ({ data }) => {
  let fullDeck = JSON.parse(localStorage.getItem('fullDeck'))
  let [cards, setCards] = useState(data)
  let [winner, setWinner] = useState(false)
  let [card1, setCard1] = useState(null)
  let [card2, setCard2] = useState(null)
  let [card3, setCard3] = useState(null)
  let [card4, setCard4] = useState(null)
  let [card5, setCard5] = useState(null)
  let randomIndex = null

  // This useEffect was used to solve a render issue in checkWin() where card1 and card2 was using the previous state value
  useEffect(() => {
    if (card1 && card2 && !card3 && !card4 && !card5) {
      checkWin()
    }
  }, [card1])

  let dealHand = () => {
    if (cards.length > 2) {
      randomIndex = Math.floor(Math.random() * cards.length)
      setCard1(cards[randomIndex])
      cards.splice(randomIndex, 1)

      randomIndex = Math.floor(Math.random() * cards.length)
      setCard2(cards[randomIndex])
      cards.splice(randomIndex, 1)

      randomIndex = Math.floor(Math.random() * cards.length)
      setCard3(cards[randomIndex])
      cards.splice(randomIndex, 1)

      randomIndex = Math.floor(Math.random() * cards.length)
      setCard4(cards[randomIndex])
      cards.splice(randomIndex, 1)

      randomIndex = Math.floor(Math.random() * cards.length)
      setCard5(cards[randomIndex])
      cards.splice(randomIndex, 1)
    } else if (cards.length === 2) {
      lastTwo()
    }
  }

  let lastTwo = () => {
    setCard3(null)
    setCard4(null)
    setCard5(null)
    setCard1(cards[0])
    setCard2(cards[1])
    setCards([])
  }

  let checkWin = () => {
    if (card1.name === 'A' || card2.name === 'A') {
      setWinner(true)
    } else {
      setWinner(false)
    }
  }

  let resetDeck = () => {
    setCard1(null)
    setCard2(null)
    setCard3(null)
    setCard4(null)
    setCard5(null)
    setCards(fullDeck)
    setWinner(false)
  }

  return (
    <div className="poker-main w-screen h-screen bg-gradient-to-b from-green-400 to-black ring-1 relative">
      {cards.length !== 0 && <DealerDeck />}

      {cards.length === 0 ? (
        <div
          onClick={() => resetDeck()}
          className="playAgainContainer w-70 h-16 rounded-2xl bg-transparent text-yellow-300 border-2 border-yellow-300 hover:border-red-900 hover:text-red-900 transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 absolute inset top-3/4 right-1/2 flex justify-center items-center"
        >
          <div className="reset font-bold text-3xl w-64 text-center cursor-pointer">
            {' '}
            Play Again{' '}
          </div>
        </div>
      ) : (
        <div
          onClick={() => dealHand()}
          className="deal-container w-96 h-28 rounded-lg flex justify-center items-center text-7xl font-extrabold bg-yellow-300 hover:text-red-900 absolute inset top-3/4 right-1/2 shadow-lg cursor-pointer"
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

      {/* <Counter data={cards.length} /> */}

      <Cards card1={card1} card2={card2} card3={card3} card4={card4} card5={card5} />

      {cards.length === 0 && <WinOrLose winner={winner} />}

      <div
        onClick={() => resetDeck()}
        className="w-56 h-16 rounded-2xl flex justify-center items-center bg-transparent text-yellow-300 border-2 border-yellow-300 hover:border-red-900 hover:text-red-900 transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 absolute inset bottom-5 right-5 cursor-pointer"
      >
        <div className="reset font-bold text-3xl"> Reset </div>
      </div>
    </div>
  )
}

export default Deal

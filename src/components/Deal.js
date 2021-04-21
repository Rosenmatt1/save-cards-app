import React, { useState, useEffect } from 'react'
import '../assets/tailwind.css'
import _ from 'lodash'
import Counter from './Counter.js'
import Cards from './Cards.js'
import DealerDeck from './DealerDeck.js'
import WinOrLose from './WinOrLose.js'
import flick from '../assets/card-flick.wav'

const Deal = ({ data }) => {
  const fullDeck = JSON.parse(localStorage.getItem('fullDeck'))
  const [cards, setCards] = useState(data)
  const [winner, setWinner] = useState(false)
  const [newDeal, setNewDeal] = useState(true)
  const [card1, setCard1] = useState(null)
  const [card2, setCard2] = useState(null)
  const [card3, setCard3] = useState(null)
  const [card4, setCard4] = useState(null)
  const [card5, setCard5] = useState(null)
  let randomIndex = null
  const sound = new Audio(flick)

  const generateRandomCards = () => {
    _.delay(function() {
      setNewDeal(true)
    }, 10)

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
    sound.play()
  }

  const lastTwo = () => {
    _.delay(function() {
      setNewDeal(true)
    }, 10)
    setCard3(null)
    setCard4(null)
    setCard5(null)
    setCard1(cards[0])
    sound.play()
    setCard2(cards[1])
    setCards([])
  }

  const checkWin = () => {
    if (card1.name === 'A' || card2.name === 'A') {
      setWinner(true)
    } else {
      setWinner(false)
    }
  }

  // This useEffect was used to solve a render issue in checkWin() where card1 and card2 was using the previous state value
  useEffect(() => {
    if (card1 && card2 && !card3 && !card4 && !card5) {
      checkWin()
    }
  }, [card1, card2, card3, card4, card5])

  const dealHand = () => {
    setNewDeal(false)

    if (cards.length > 2) {
      generateRandomCards()
    } else if (cards.length === 2) {
      lastTwo()
    }
  }

  const resetDeck = () => {
    setCard1(null)
    setCard2(null)
    setCard3(null)
    setCard4(null)
    setCard5(null)
    setCards(fullDeck)
    setWinner(false)
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-green-400 to-black ring-1 relative">
      {cards.length !== 0 && <DealerDeck />}

      {cards.length === 0 ? (
        <div
          onClick={() => resetDeck()}
          className="playAgainContainer w-70 h-16 rounded-2xl bg-transparent text-yellow-300 border-2 border-yellow-300 hover:border-red-900 hover:text-red-900 transition transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 absolute inset top-3/4 right-1/2 flex justify-center items-center"
        >
          <div className="reset font-bold text-3xl w-64 text-center cursor-pointer">Play Again</div>
        </div>
      ) : (
        <div
          onClick={() => dealHand()}
          className="deal-container w-96 h-28 rounded-lg flex justify-center items-center text-7xl font-extrabold bg-yellow-300 hover:text-red-900 absolute inset top-3/4 right-1/2 shadow-lg cursor-pointer"
        >
          <div className="deal"> DEAL </div>
        </div>
      )}

      <Counter data={cards.length} />

      <Cards
        card1={card1}
        card2={card2}
        card3={card3}
        card4={card4}
        card5={card5}
        newDeal={newDeal}
      />

      {cards.length === 0 && <WinOrLose winner={winner} />}

      <div
        onClick={() => resetDeck()}
        className="w-56 h-16 rounded-2xl flex justify-center items-center bg-transparent text-yellow-300 border-2 border-yellow-300 hover:border-red-900 hover:text-red-900 transition transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 absolute inset bottom-5 right-5 cursor-pointer"
      >
        <div className="reset font-bold text-3xl"> Reset </div>
      </div>
    </div>
  )
}

export default Deal

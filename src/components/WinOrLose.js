import React from 'react'
// import '../App.css'
import '../assets/tailwind.css'

function WinOrLose({ winner }) {
  return (
    <div className="win-lose">
      <div> {winner ? 'YOU WIN!!' : 'YOU LOSE SUCKER!'} </div>
    </div>
  )
}

export default WinOrLose

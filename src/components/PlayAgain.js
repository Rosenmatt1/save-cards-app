import React from 'react'
// import '../App.css'
import '../assets/tailwind.css'

function PlayAgain() {
  return (
    <div className="playAgainContainer w-70 h-16 rounded-2xl bg-transparent text-yellow-300 border-2 border-yellow-300 hover:border-red-900 hover:text-red-900 transition transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 absolute inset top-3/4 right-1/2 flex justify-center items-center">
      <div className="reset font-bold text-3xl w-64 text-center"> Play Again </div>
    </div>
  )
}

export default PlayAgain

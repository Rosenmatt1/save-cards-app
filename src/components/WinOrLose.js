import React from 'react'
import '../assets/tailwind.css'

import { ReactComponent as Winner } from '../assets/Winner.svg'

function WinOrLose({ winner }) {
  return (
    <div className="">
      <div>
        {winner ? (
          <Winner />
        ) : (
          <div className="win-lose w-42 h-16 text-5xl text-white"> YOU LOSE SUCKER! </div>
        )}
      </div>
    </div>
  )
}

export default WinOrLose

import React from 'react'
import '../assets/tailwind.css'
import { ReactComponent as Winner } from '../assets/Winner.svg'

const WinOrLose = ({ winner }) => {
  return (
    <div>
      {winner ? (
        <div className="winner z-10">
          <Winner />
        </div>
      ) : (
        <div className="loser w-42 h-16 text-5xl text-white bg-transparent absolute inset right-1/2 bottom-2">
          YOU LOSE SUCKER!
        </div>
      )}
    </div>
  )
}

export default WinOrLose

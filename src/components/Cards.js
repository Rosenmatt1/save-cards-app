import React, { useState, useEffect } from 'react'
import '../assets/tailwind.css'

import { ReactComponent as Diamond } from '../assets/Diamond.svg'
// import { ReactComponent as Spade } from '../assets/Spade.svg'
// import { ReactComponent as Heart } from '../assets/Heart.svg'
// import { ReactComponent as Clover } from '../assets/Clover.svg'

// import Loader from './shared/Loader.js'
// import Error from './shared/Error.js'

function Cards({ data }) {
  let cards = data || null
  console.log('Cards Arrived from Deal', cards)

  return (
    // <div className="cards-grid" >
    //   {cards.map(card => (
    //     <div key={card.id}>
    //       <div className="card"  >
    //         <div className={`${card.color}`}> {card.name} </div>
    //         <div className={`${card.color}`}> {card.suit} </div>
    //       </div>
    //     </div>
    //   ))}
    // </div >
    <div className="cards-grid flex justify-center justify-around">
      <div className="card w-52 h-72 rounded-2xl shadow-md bg-white relative">
        <div className="flex-column ml-6">
          <div className="suit-name -mt-1.5"> A </div>
          <Diamond className="h-12 w-12 -mt-5 ml-1" />
        </div>

        <div className="bottom-right-suit ">
          <Diamond className="h-32 w-32" />
        </div>
      </div>
    </div>
  )
}

export default Cards

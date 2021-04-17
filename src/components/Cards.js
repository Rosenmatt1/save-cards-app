import React, { useState, useEffect } from 'react'
// import '../App.css'
import '../assets/tailwind.css'

import { ReactComponent as Diamond } from '../assets/Diamond.svg'

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

    <div className="card">
      <div className="top-left-card">
        <div className="suit-name">A</div>
        <Diamond className="small-suit" />
      </div>
      <div className="bottom-right-suit">
        <Diamond className="large-suit" />
      </div>
    </div>
  )
}

export default Cards

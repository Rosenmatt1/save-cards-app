import React, { useState, useEffect } from 'react'
import '../App.css'

function Counter({ data }) {
  let cards = data || null
  console.log('Counter Data', data.length)

  return (
    <div className="counter-container">
      <div className="counter">
        <div> {cards.length} </div>
        <div> Cards Left </div>
      </div>
    </div>
  )
}

export default Counter

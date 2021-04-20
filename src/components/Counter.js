import React from 'react'
import '../assets/tailwind.css'

const Counter = ({ data }) => {
  return (
    <div className="counter-container block w-36 h-28 rounded-sm border-solid border-4 border-yellow-500 border-opacity-75 flex justify-center items-center text-center text-xl font-bold text-white bg-black absolute inset top-24 right-1/2">
      <div className="counter">
        <div> {data} </div>
        <div> Cards Left </div>
      </div>
    </div>
  )
}

export default Counter

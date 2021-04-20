import React from 'react'
import '../assets/tailwind.css'
import { ReactComponent as Diamond } from '../assets/Diamond.svg'
import { ReactComponent as Spade } from '../assets/Spade.svg'
import { ReactComponent as Heart } from '../assets/Heart.svg'
import { ReactComponent as Clover } from '../assets/Clover.svg'

const Cards = ({ card1, card2, card3, card4, card5 }) => {
  console.log('Card1 from DEAL!', card1)
  console.log('Card2 from Deal!', card2)

  return (
    <div>
      {card1 && card2 && card3 && card4 && card5 && (
        <div className="cards-grid absolute flex justify-center overflow-none space-x-20 inset top-1/3">
          <div className="card1 transform rotate-12 w-52 h-72 rounded-2xl shadow-md bg-white ">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card1.name} </div>
              <Heart className="h-12 w-12 -mt-5 ml-1" />
            </div>

            <div className="absolute inset bottom-6 right-6">
              <Heart className="h-32 w-32" />
            </div>
          </div>

          <div className="card2 transform rotate-6 w-52 h-72  rounded-2xl shadow-md bg-white">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card2.name} </div>
              <Diamond className="h-12 w-12 -mt-5 ml-1" />
            </div>

            <div className="absolute inset bottom-6 right-6">
              <Diamond className="h-32 w-32" />
            </div>
          </div>

          <div className="card3 transform w-52 h-72  rounded-2xl shadow-md bg-white">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card3.name} </div>
              <Clover className="h-12 w-12 -mt-5 ml-1" />
            </div>

            <div className="absolute inset bottom-6 right-6">
              <Clover className="h-32 w-32" />
            </div>
          </div>

          <div className="card4 transform -rotate-6 w-52 h-72 rounded-2xl shadow-md bg-white">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card4.name} </div>
              <Spade className="h-12 w-12 -mt-5 ml-1" />
            </div>

            <div className="absolute inset bottom-6 right-6">
              <Spade className="h-32 w-32" />
            </div>
          </div>

          <div className="card5 transform -rotate-12 w-52 h-72  rounded-2xl shadow-md bg-white">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card5.name} </div>
              <Diamond className="h-12 w-12 -mt-5 ml-1" />
            </div>

            <div className="absolute inset bottom-6 right-6">
              <Diamond className="h-32 w-32" />
            </div>
          </div>
        </div>
      )}

      {card1 && card2 && !card3 && !card4 && !card5 && (
        <div className="cards-grid absolute flex justify-center overflow-none space-x-20 inset left-1/3 top-1/3">
          <div className="last-card1 transform w-52 h-72 rounded-2xl shadow-md bg-white ">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card1.name} </div>
              <Heart className="h-12 w-12 -mt-5 ml-1" />
            </div>

            <div className="absolute inset bottom-6 right-6">
              <Heart className="h-32 w-32" />
            </div>
          </div>

          <div className="last-card2 transform w-52 h-72  rounded-2xl shadow-md bg-white">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card2.name} </div>
              <Diamond className="h-12 w-12 -mt-5 ml-1" />
            </div>

            <div className="absolute inset bottom-6 right-6">
              <Diamond className="h-32 w-32" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cards

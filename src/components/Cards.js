import React from 'react'
import '../assets/tailwind.css'
import { ReactComponent as Diamond } from '../assets/Diamond.svg'
import { ReactComponent as Spade } from '../assets/Spade.svg'
import { ReactComponent as Heart } from '../assets/Heart.svg'
import { ReactComponent as Clover } from '../assets/Clover.svg'

const Cards = ({ card1, card2, card3, card4, card5, newDeal }) => {
  return (
    <div>
      {card1 && card2 && card3 && card4 && card5 && newDeal && (
        <div className="cards-grid absolute flex justify-center overflow-none space-x-20 inset left-52 top-1/3">
          <div className={`card1 transform w-52 h-72 rounded-2xl shadow-md bg-white`}>
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card1.name} </div>
              {card1.suit === 'heart' ? (
                <Heart className="h-12 w-12 -mt-5 ml-1" />
              ) : card1.suit === 'diamond' ? (
                <Diamond className="h-12 w-12 -mt-5 ml-1" />
              ) : card1.suit === 'spade' ? (
                <Spade className="h-12 w-12 -mt-5 ml-1" />
              ) : (
                <Clover className="h-12 w-12 -mt-5 ml-1" />
              )}
            </div>

            <div className="absolute inset bottom-6 right-6">
              {card1.suit === 'heart' ? (
                <Heart className="h-32 w-32" />
              ) : card1.suit === 'diamond' ? (
                <Diamond className="h-32 w-32" />
              ) : card1.suit === 'spade' ? (
                <Spade className="h-32 w-32" />
              ) : (
                <Clover className="h-32 w-32" />
              )}
            </div>
          </div>

          <div className="card2 transform w-52 h-72 rounded-2xl shadow-md bg-white">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card2.name} </div>
              {card2.suit === 'heart' ? (
                <Heart className="h-12 w-12 -mt-5 ml-1" />
              ) : card2.suit === 'diamond' ? (
                <Diamond className="h-12 w-12 -mt-5 ml-1" />
              ) : card2.suit === 'spade' ? (
                <Spade className="h-12 w-12 -mt-5 ml-1" />
              ) : (
                <Clover className="h-12 w-12 -mt-5 ml-1" />
              )}
            </div>

            <div className="absolute inset bottom-6 right-6">
              {card2.suit === 'heart' ? (
                <Heart className="h-32 w-32" />
              ) : card2.suit === 'diamond' ? (
                <Diamond className="h-32 w-32" />
              ) : card2.suit === 'spade' ? (
                <Spade className="h-32 w-32" />
              ) : (
                <Clover className="h-32 w-32" />
              )}
            </div>
          </div>

          <div className="card3 transform w-52 h-72 rounded-2xl shadow-md bg-white">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card3.name} </div>
              {card3.suit === 'heart' ? (
                <Heart className="h-12 w-12 -mt-5 ml-1" />
              ) : card3.suit === 'diamond' ? (
                <Diamond className="h-12 w-12 -mt-5 ml-1" />
              ) : card3.suit === 'spade' ? (
                <Spade className="h-12 w-12 -mt-5 ml-1" />
              ) : (
                <Clover className="h-12 w-12 -mt-5 ml-1" />
              )}
            </div>

            <div className="absolute inset bottom-6 right-6">
              {card3.suit === 'heart' ? (
                <Heart className="h-32 w-32" />
              ) : card3.suit === 'diamond' ? (
                <Diamond className="h-32 w-32" />
              ) : card3.suit === 'spade' ? (
                <Spade className="h-32 w-32" />
              ) : (
                <Clover className="h-32 w-32" />
              )}
            </div>
          </div>

          <div className="card4 transform w-52 h-72 rounded-2xl shadow-md bg-white">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card4.name} </div>
              {card4.suit === 'heart' ? (
                <Heart className="h-12 w-12 -mt-5 ml-1" />
              ) : card4.suit === 'diamond' ? (
                <Diamond className="h-12 w-12 -mt-5 ml-1" />
              ) : card4.suit === 'spade' ? (
                <Spade className="h-12 w-12 -mt-5 ml-1" />
              ) : (
                <Clover className="h-12 w-12 -mt-5 ml-1" />
              )}
            </div>

            <div className="absolute inset bottom-6 right-6">
              {card4.suit === 'heart' ? (
                <Heart className="h-32 w-32" />
              ) : card4.suit === 'diamond' ? (
                <Diamond className="h-32 w-32" />
              ) : card4.suit === 'spade' ? (
                <Spade className="h-32 w-32" />
              ) : (
                <Clover className="h-32 w-32" />
              )}
            </div>
          </div>

          <div className="card5 transform w-52 h-72 rounded-2xl shadow-md bg-white">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card5.name} </div>
              {card5.suit === 'heart' ? (
                <Heart className="h-12 w-12 -mt-5 ml-1" />
              ) : card5.suit === 'diamond' ? (
                <Diamond className="h-12 w-12 -mt-5 ml-1" />
              ) : card5.suit === 'spade' ? (
                <Spade className="h-12 w-12 -mt-5 ml-1" />
              ) : (
                <Clover className="h-12 w-12 -mt-5 ml-1" />
              )}
            </div>

            <div className="absolute inset bottom-6 right-6">
              {card5.suit === 'heart' ? (
                <Heart className="h-32 w-32" />
              ) : card5.suit === 'diamond' ? (
                <Diamond className="h-32 w-32" />
              ) : card5.suit === 'spade' ? (
                <Spade className="h-32 w-32" />
              ) : (
                <Clover className="h-32 w-32" />
              )}
            </div>
          </div>
        </div>
      )}

      {card1 && card2 && !card3 && !card4 && !card5 && newDeal && (
        <div className="cards-grid absolute flex justify-center overflow-none space-x-20 inset left-1/3 top-1/3">
          <div className="last-card1 transform w-52 h-72 rounded-2xl shadow-md bg-white ">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card1.name} </div>
              {card1.suit === 'heart' ? (
                <Heart className="h-12 w-12 -mt-5 ml-1" />
              ) : card1.suit === 'diamond' ? (
                <Diamond className="h-12 w-12 -mt-5 ml-1" />
              ) : card1.suit === 'spade' ? (
                <Spade className="h-12 w-12 -mt-5 ml-1" />
              ) : (
                <Clover className="h-12 w-12 -mt-5 ml-1" />
              )}
            </div>

            <div className="absolute inset bottom-6 right-6">
              {card1.suit === 'heart' ? (
                <Heart className="h-32 w-32" />
              ) : card1.suit === 'diamond' ? (
                <Diamond className="h-32 w-32" />
              ) : card1.suit === 'spade' ? (
                <Spade className="h-32 w-32" />
              ) : (
                <Clover className="h-32 w-32" />
              )}
            </div>
          </div>

          <div className="last-card2 transform w-52 h-72  rounded-2xl shadow-md bg-white">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card2.name} </div>
              {card2.suit === 'heart' ? (
                <Heart className="h-12 w-12 -mt-5 ml-1" />
              ) : card2.suit === 'diamond' ? (
                <Diamond className="h-12 w-12 -mt-5 ml-1" />
              ) : card2.suit === 'spade' ? (
                <Spade className="h-12 w-12 -mt-5 ml-1" />
              ) : (
                <Clover className="h-12 w-12 -mt-5 ml-1" />
              )}
            </div>

            <div className="absolute inset bottom-6 right-6">
              {card2.suit === 'heart' ? (
                <Heart className="h-32 w-32" />
              ) : card2.suit === 'diamond' ? (
                <Diamond className="h-32 w-32" />
              ) : card2.suit === 'spade' ? (
                <Spade className="h-32 w-32" />
              ) : (
                <Clover className="h-32 w-32" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cards

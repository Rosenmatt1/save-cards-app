import React, { useState, useEffect } from 'react'
import '../assets/tailwind.css'

import { ReactComponent as Diamond } from '../assets/Diamond.svg'
import { ReactComponent as Spade } from '../assets/Spade.svg'
import { ReactComponent as Heart } from '../assets/Heart.svg'
import { ReactComponent as Clover } from '../assets/Clover.svg'

function Cards({ card1, card2, card3, card4, card5 }) {
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
    <div>
      {card1 && card2 && card3 && card4 && card5 && (
        <div className="cards-grid absolute flex justify-center overflow-none space-x-20 inset top-1/3">
          <div className="card1 w-52 h-72 rounded-2xl shadow-md bg-white ">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card1.name} </div>
              <Heart className="h-12 w-12 -mt-5 ml-1" />
              {/* <svg className="heart1 h-12 w-12 -mt-5 ml-1" width="98px" height="80px" viewBox="0 0 98 80" version="1.1"  >
            <title>Oval</title>
            <desc>Created with Sketch.</desc>
            <g className="heart2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g className="heart3" transform="translate(-373.000000, -80.000000)" fill="#F64242">
                <g className="heart4" transform="translate(352.000000, 80.000000)">
                  <path d="M69.8544414,80 C83.3659825,71.9730145 93.0473021,65.1262799 98.8984003,59.4597962 C109.052982,49.6256124 118.708883,37.96492 118.708883,23.3162029 C118.708883,9.48987043 112.598656,1.71420124 98.8984003,0.128454582 C89.7648964,-0.928709858 80.0704049,4.53936971 69.8149258,16.5326933 C58.0550862,4.53936971 47.8266952,-0.928709858 39.1297528,0.128454582 C26.0843393,1.71420124 21,9.90359982 21,23.3162029 C21,37.7777681 29.2713959,49.6905292 39.1297528,59.4597962 C44.9687308,65.2460073 55.2102936,72.0927419 69.8544414,80 Z" id="Oval"></path>
                </g>
              </g>
            </g>
          </svg> */}
            </div>

            <div className="absolute inset bottom-6 right-6">
              <Heart className="h-32 w-32" />
              {/* <svg className=" h-32 w-32" width="98px" height="80px" viewBox="0 0 98 80" version="1.1"  >
            <title>Oval</title>
            <desc>Created with Sketch.</desc>
            <g className="heart2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g className="heart3" transform="translate(-373.000000, -80.000000)" fill="#F64242">
                <g className="heart4" transform="translate(352.000000, 80.000000)">
                  <path d="M69.8544414,80 C83.3659825,71.9730145 93.0473021,65.1262799 98.8984003,59.4597962 C109.052982,49.6256124 118.708883,37.96492 118.708883,23.3162029 C118.708883,9.48987043 112.598656,1.71420124 98.8984003,0.128454582 C89.7648964,-0.928709858 80.0704049,4.53936971 69.8149258,16.5326933 C58.0550862,4.53936971 47.8266952,-0.928709858 39.1297528,0.128454582 C26.0843393,1.71420124 21,9.90359982 21,23.3162029 C21,37.7777681 29.2713959,49.6905292 39.1297528,59.4597962 C44.9687308,65.2460073 55.2102936,72.0927419 69.8544414,80 Z" id="Oval"></path>
                </g>
              </g>
            </g>
          </svg> */}
            </div>
          </div>

          <div className="card2 w-52 h-72  rounded-2xl shadow-md bg-white">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card2.name} </div>
              <Diamond className="h-12 w-12 -mt-5 ml-1" />
            </div>

            <div className="absolute inset bottom-6 right-6">
              <Diamond className="h-32 w-32" />
            </div>
          </div>

          <div className="card3 w-52 h-72  rounded-2xl shadow-md bg-white">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card3.name} </div>
              <Clover className="h-12 w-12 -mt-5 ml-1" />
            </div>

            <div className="absolute inset bottom-6 right-6">
              <Clover className="h-32 w-32" />
            </div>
          </div>

          <div className="card4 w-52 h-72 rounded-2xl shadow-md bg-white">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card4.name} </div>
              <Spade className="h-12 w-12 -mt-5 ml-1" />
              {/* <img href="Spade.svg" src='Spade.svg' className="h-12 w-12 -mt-5 ml-1" /> */}
            </div>

            <div className="absolute inset bottom-6 right-6">
              <Spade className="h-32 w-32" />
            </div>
          </div>

          <div className="card5 w-52 h-72  rounded-2xl shadow-md bg-white">
            <div className="flex-column ml-6">
              <div className="suit-name -mt-1.5"> {card5.name} </div>
              <Diamond className="h-12 w-12 -mt-5 ml-1" />
              {/* <img href="../assets/Diamond.svg" /> */}
            </div>

            <div className="absolute inset bottom-6 right-6">
              <Diamond className="h-32 w-32" />
            </div>
          </div>
        </div>
      )}
    </div>

    // <div className="cards-grid flex justify-center justify-around">
    //   <div className="card w-52 h-72 rounded-2xl shadow-md bg-white relative">
    //     <div className="flex-column ml-6">
    //       <div className="suit-name -mt-1.5"> A </div>
    //       <Diamond className="h-12 w-12 -mt-5 ml-1" />
    //     </div>

    //     <div className="bottom-right-suit">
    //       <Diamond className="h-32 w-32" />
    //     </div>
    //   </div>
    // </div>
  )
}

export default Cards

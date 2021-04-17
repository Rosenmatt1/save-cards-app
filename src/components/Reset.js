import React from 'react'
// import '../App.css'
import '../assets/tailwind.css'
import Deal from './Deal.js'

// function Reset( {resetDeck} ) {
//   // console.log(peops.resetDeck)
//   // let resetDeck = data.resetDeck()
//   return (
//     <div className="reset-container" onClick={() => resetDeck("test string")}>
//       <div className="reset"> Reset </div>
//     </div>
//   )
// }

// export default Reset

// import React from 'react'
// import '../App.css'

// class F Reset( { data }) {
//   console.log(data.resetDeck)
//   let resetDeck = data.resetDeck()
//   return (
// <div className="reset-container" onClick={() => resetDeck()}>
//   <div className="reset"> Reset </div>
// </div>
//   )
// }

// export default Reset

class Reset extends React.Component {
  constructor(props) {
    super(props)
    this.resetDeck = this.resetDeck.bind(this)
    this.cards = this.cards.bind(this)
  }

  resetDeck() {
    console.log('Click happened')
  }

  render() {
    return (
      <div className="reset-container" onClick={() => this.resetDeck()}>
        <div className="reset"> Reset </div>
      </div>
    )
  }
}

export default Reset

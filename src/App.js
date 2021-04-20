import React from 'react'
import './App.css'
import PokerMain from './components/PokerMain.js'
import data from './data.js'

export const UserContext = React.createContext()

// This component is where a ME_QUERY could be run and user put into useContext API.
// Also where router could be implemented if app were mutiple screens.
function App() {
  const fullDeck = data

  return (
    <UserContext.Provider value={fullDeck}>
      <PokerMain />
    </UserContext.Provider>
  )
}

export default App

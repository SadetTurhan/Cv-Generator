import { useState } from 'react'
import "./App.css"
import { LeftHeader } from "./components/LeftHeader"
import { InfoContainer } from "./components/InfoContainer"
function App() {

  return (
    <div className='bg-gradient-to-r from-gray-200 via-lavenderWeb to-gray-200 min-h-screen'>
      <LeftHeader />
      <InfoContainer />
    </div>
  )
}

export default App

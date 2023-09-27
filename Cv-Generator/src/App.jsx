import { useState } from 'react'
import "./App.css"
import { LeftHeader } from "./components/LeftHeader"
import { InfoContainer } from "./components/InfoContainer"
function App() {

  return (
    <div className='bg-lavenderWeb min-h-screen'>
      <LeftHeader />
      <InfoContainer />
    </div>
  )
}

export default App

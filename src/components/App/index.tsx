import React, { useState } from 'react'
import { HealthBar } from '..'
import './App.scss'

const App = () => {
  const [health, setHealth] = useState(Math.random())

  const onButtonClick = () => {
    setHealth(Math.random())
  }

  return (
    <div className="App rpgui-container framed">
      <HealthBar value={health} />
      <button className="rpgui-button" type="button" onClick={onButtonClick}>
        Set random health
      </button>
    </div>
  )
}

export default App

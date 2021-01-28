import React, { useState } from 'react'
import { HealthBar } from '..'
import Battleground from '../Battleground'
import styles from './index.module.scss'

const App = () => {
  const [health, setHealth] = useState(Math.random())

  const onButtonClick = () => {
    setHealth(Math.random())
  }

  return (
    <div className={`${styles.App} rpgui-container framed-golden`}>
      <div className={styles.AppContainer}>
        <HealthBar value={health} />
        <button className="rpgui-button" type="button" onClick={onButtonClick}>
          Set random health
        </button>

        <Battleground />
      </div>
    </div>
  )
}

export default App

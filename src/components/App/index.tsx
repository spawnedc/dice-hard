import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { gameStageToViewMap } from './constants'
import { useGameStage } from '../../store/game/selectors'

const App = () => {
  const gameStage = useGameStage()
  const [View, setView] = useState(gameStageToViewMap[gameStage])

  useEffect(() => {
    setView(gameStageToViewMap[gameStage])
  }, [gameStage])

  return (
    <div className={`${styles.App} rpgui-container framed-golden`}>
      <div className={styles.AppContainer}>
        <h1>DICE HARD</h1>

        <hr className="golden" />

        <View />
      </div>
    </div>
  )
}

export default App

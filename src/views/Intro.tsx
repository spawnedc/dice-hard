import { useDispatch } from 'react-redux'
import gameConfig from '../config'
import { updateGameStage } from '../store/game/actions'
import { GameStage } from '../store/game/types'
import styles from './Intro.module.scss'

const Intro = () => {
  const dispatch = useDispatch()

  const onButtonClick = () => {
    dispatch(updateGameStage(GameStage.BATTLE))
  }

  return (
    <div className={styles.Intro}>
      <p>Rules:</p>
      <ol className={styles.Rules}>
        <li>
          Each player rolls {gameConfig.numberOfDice}d{gameConfig.diceFaces}{' '}
          dice each round
        </li>
        <li>Each player has {gameConfig.playerHealth} health points</li>
        <li>
          Whoever scores the lowest total will take damage and lose health
          points.
        </li>
        <li>Damage is determined by the difference of both rolls</li>
        <li>
          Example: if the player rolls a 2 and a 3, and the monster rolls a 4
          and a 5, the player will take (4+5)-(3+2) = 4 damage.
        </li>
      </ol>
      <button className="rpgui-button" type="button" onClick={onButtonClick}>
        Start game
      </button>
    </div>
  )
}

export default Intro

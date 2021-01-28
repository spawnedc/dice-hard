import { useDispatch } from 'react-redux'
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
      <p>Welcome to Dice Hard</p>
      <button className="rpgui-button" type="button" onClick={onButtonClick}>
        Start game
      </button>
    </div>
  )
}

export default Intro

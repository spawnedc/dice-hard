import { useDispatch } from 'react-redux'
import { player } from '../constants'
import { resetBattle } from '../store/battle/actions'
import { useLastRound, useRounds } from '../store/battle/selectors'
import { updateGameStage } from '../store/game/actions'
import { GameStage } from '../store/game/types'
import styles from './GameOver.module.scss'

const GameOver = () => {
  const dispatch = useDispatch()
  const lastRound = useLastRound()
  const rounds = useRounds()

  const isWinner = lastRound?.winner === player.name

  const onButtonClick = () => {
    dispatch(updateGameStage(GameStage.INTRO))
    dispatch(resetBattle())
  }

  return (
    <div className={styles.GameOver}>
      <div className={styles.GameOverText}>
        {isWinner && <p className={styles.winner}>You Win!</p>}
        {!isWinner && <p className={styles.loser}>Game Over</p>}
      </div>
      <p>The game ended after {rounds.length} rounds.</p>
      <button className="rpgui-button" type="button" onClick={onButtonClick}>
        Play again
      </button>
    </div>
  )
}

export default GameOver

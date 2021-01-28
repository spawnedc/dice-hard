import { useDispatch } from 'react-redux'
import { Battleground } from '../components'
import { enemy, player } from '../constants'
import { addNewRound } from '../store/battle/actions'
import { useLastRound } from '../store/battle/selectors'
import { Round } from '../store/battle/types'
import { updateGameStage } from '../store/game/actions'
import { GameStage } from '../store/game/types'
import rollDice from '../utils/rollDice'

const Battle = () => {
  const dispatch = useDispatch()
  const lastRound = useLastRound()

  const onButtonClick = () => {
    const playerRoll = rollDice()
    const enemyRoll = rollDice()
    let playerHealth = lastRound?.playerHealth || player.health
    let enemyHealth = lastRound?.enemyHealth || enemy.health
    let winner: string | undefined
    let loser: string | undefined
    let isDraw = false

    const damage = Math.abs(playerRoll.total - enemyRoll.total)

    if (playerRoll.total > enemyRoll.total) {
      enemyHealth -= damage
      winner = player.name
      loser = enemy.name
    } else if (enemyRoll.total > playerRoll.total) {
      playerHealth -= damage
      winner = enemy.name
      loser = player.name
    } else {
      isDraw = true
    }

    const newRound: Round = {
      playerRoll,
      enemyRoll,
      playerHealth,
      enemyHealth,
      winner,
      loser,
      isDraw,
    }

    dispatch(addNewRound(newRound))

    if (enemyHealth <= 0 || playerHealth <= 0) {
      dispatch(updateGameStage(GameStage.GAME_OVER))
    }
  }

  return (
    <>
      <Battleground />
      <button className="rpgui-button" type="button" onClick={onButtonClick}>
        Attack!
      </button>
    </>
  )
}

export default Battle

import { useDispatch } from 'react-redux'
import { Battleground } from '../components'
import { enemy, player } from '../constants'
import { addNewRound } from '../store/battle/actions'
import { useLastRound } from '../store/battle/selectors'
import { Round } from '../store/battle/types'
import rollDice from '../utils/rollDice'

const Battle = () => {
  const dispatch = useDispatch()
  const lastRound = useLastRound()

  const onButtonClick = () => {
    const playerRoll = rollDice()
    const enemyRoll = rollDice()
    let playerHealth = lastRound?.playerHealth || player.health
    let enemyHealth = lastRound?.enemyHealth || enemy.health

    const damage = Math.abs(playerRoll.total - enemyRoll.total)

    if (playerRoll.total > enemyRoll.total) {
      enemyHealth -= damage
    } else if (enemyRoll.total > playerRoll.total) {
      playerHealth -= damage
    }

    const newRound: Round = {
      playerRoll,
      enemyRoll,
      playerHealth,
      enemyHealth,
    }

    dispatch(addNewRound(newRound))
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

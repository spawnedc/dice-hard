import gameConfig from '../config'
import { enemy, player } from '../constants'
import { useLastRound } from '../store/battle/selectors'
import { Round } from '../store/battle/types'
import rollDice from '../utils/rollDice'

const useAttack = () => {
  const lastRound = useLastRound()

  const attack = (): Round => {
    const playerRoll = rollDice()
    const enemyRoll = rollDice()
    let playerHealth = lastRound?.playerHealth || gameConfig.playerHealth
    let enemyHealth = lastRound?.enemyHealth || gameConfig.playerHealth
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
      damage,
      timestamp: Date.now(),
    }

    return newRound
  }

  return attack
}

export default useAttack

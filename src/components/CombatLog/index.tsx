import { Round } from '../../store/battle/types'
import styles from './index.module.scss'

interface CombatLogProps {
  rounds: Round[]
}

const getCombatLog = ({ winner, loser, isDraw, damage }: Round): string => {
  if (isDraw) {
    return 'It is a draw!'
  }

  return `${winner} hits ${loser} for ${damage}`
}

const CombatLog = ({ rounds }: CombatLogProps) => (
  <div className={styles.CombatLog}>
    <ol className={styles.LogList}>
      {rounds.map((round) => (
        <li key={round.timestamp}>{getCombatLog(round)}</li>
      ))}
    </ol>
  </div>
)

export default CombatLog

import { enemy, player } from '../../constants'
import { useLastRound } from '../../store/battle/selectors'
import Warrior from '../Warrior'
import styles from './index.module.scss'

const Battleground = () => {
  const round = useLastRound()

  return (
    <div className={`${styles.Battleground} rpgui-container framed`}>
      <div className={styles.Warriors}>
        <Warrior
          className={styles.Warrior}
          contender={player}
          health={round?.playerHealth}
          roll={round?.playerRoll}
        />
        <Warrior
          className={styles.Warrior}
          contender={enemy}
          health={round?.enemyHealth}
          roll={round?.enemyRoll}
        />
      </div>
    </div>
  )
}

export default Battleground

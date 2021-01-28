import { enemy, player } from '../../constants'
import Warrior from '../Warrior'
import styles from './index.module.scss'

const Battleground = () => {
  return (
    <div className={`${styles.Battleground} rpgui-container framed`}>
      <div className={styles.Warriors}>
        <Warrior className={styles.Warrior} contender={player} />
        <Warrior className={styles.Warrior} contender={enemy} />
      </div>
    </div>
  )
}

export default Battleground

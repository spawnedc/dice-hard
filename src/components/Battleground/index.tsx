import { HealthBar } from '..'
import styles from './index.module.scss'

const Battleground = () => {
  return (
    <div className={`${styles.Battleground} rpgui-container framed`}>
      <div className={styles.HealthBars}>
        <HealthBar className={styles.HealthBar} value={1} />
        <HealthBar className={styles.HealthBar} value={1} />
      </div>
    </div>
  )
}

export default Battleground

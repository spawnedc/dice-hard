import cn from 'classnames'
import styles from './index.module.scss'

interface DiceProps {
  value: number
}

const Dice = ({ value }: DiceProps) => (
  <div className={cn('rpgui-container', 'framed-golden-2', styles.Dice)}>
    {value}
  </div>
)

export default Dice

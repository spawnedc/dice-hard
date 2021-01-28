import React from 'react'
import cn from 'classnames'
import { Contender } from '../../constants'
import HealthBar from '../HealthBar'
import Dice from '../Dice'
import styles from './index.module.scss'
import { DiceRoll } from '../../store/battle/types'
import usePrevious from '../../hooks/usePrevious'

interface ContenderProps {
  className?: string
  contender: Contender
  health?: number
  roll?: DiceRoll
}

const Warrior = ({ className, contender, health, roll }: ContenderProps) => {
  const { width, height, image, health: maxHealth } = contender
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundImage: `url('${image}')`,
  }

  const previousHealth = usePrevious(health) || maxHealth
  const healthToUse = health || maxHealth
  const currentHealth = healthToUse / maxHealth

  const hasTakenDamage = previousHealth && previousHealth > healthToUse

  return (
    <div className={cn(styles.Warrior, className)}>
      <p className={styles.Name}>{contender.name}</p>
      <HealthBar value={currentHealth} />
      <div className={styles.DiceContainer}>
        {roll?.rolls.map((value, index) => (
          <Dice key={index} value={value}></Dice>
        ))}
      </div>
      <div className={styles.Character} style={style}></div>
      {hasTakenDamage && (
        <p className={styles.Damage}>-{previousHealth! - healthToUse}</p>
      )}
    </div>
  )
}

export default Warrior

import React from 'react'
import cn from 'classnames'
import { Contender } from '../../constants'
import HealthBar from '../HealthBar'
import styles from './index.module.scss'

interface ContenderProps {
  className?: string
  contender: Contender
  health?: number
}

const Warrior = ({ className, contender, health }: ContenderProps) => {
  const { width, height, image, health: maxHealth } = contender
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundImage: `url('${image}')`,
  }

  const currentHealth = (health || maxHealth) / maxHealth

  return (
    <div className={cn(styles.Warrior, className)}>
      <p className={styles.Name}>{contender.name}</p>
      <HealthBar value={currentHealth} />
      <div className={styles.Character} style={style}></div>
    </div>
  )
}

export default Warrior

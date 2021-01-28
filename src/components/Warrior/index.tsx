import React from 'react'
import cn from 'classnames'
import { Contender } from '../../constants'
import HealthBar from '../HealthBar'
import styles from './index.module.scss'

interface ContenderProps {
  className?: string
  contender: Contender
}

const Warrior = ({ className, contender }: ContenderProps) => {
  console.info(contender)
  const { width, height, image, health } = contender
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundImage: `url('${image}')`,
  }

  return (
    <div className={cn(styles.Warrior, className)}>
      <p className={styles.Name}>{contender.name}</p>
      <HealthBar value={health / 100} />
      <div className={styles.Character} style={style}></div>
    </div>
  )
}

export default Warrior

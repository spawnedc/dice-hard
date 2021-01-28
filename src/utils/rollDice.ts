import gameConfig from '../config'
import { DiceRoll } from '../store/battle/types'

const { diceFaces, numberOfDice } = gameConfig

const getRandomDice = (min = 1, max = diceFaces) => {
  const num = Math.random() * (max - min) + min

  return Math.round(num)
}

const rollDice = (): DiceRoll => {
  const rolls = []
  let total = 0

  for (let i = 0; i < numberOfDice; i++) {
    const roll = getRandomDice()
    rolls.push(roll)
    total += roll
  }

  return {
    rolls,
    total,
  }
}

export default rollDice

import { NEW_ROUND } from './actionTypes'

export type DiceRoll = {
  rolls: number[]
  total: number
}

export type Round = {
  playerRoll: DiceRoll
  playerHealth: number
  enemyRoll: DiceRoll
  enemyHealth: number
}

export type BattleState = {
  rounds: Round[]
}

export type NewRound = {
  type: typeof NEW_ROUND
  payload: Round
}

export type GameActions = NewRound

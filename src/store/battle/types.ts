import { NEW_ROUND, RESET_BATTLE } from './actionTypes'

export type DiceRoll = {
  rolls: number[]
  total: number
}

export type Round = {
  playerRoll: DiceRoll
  playerHealth: number
  enemyRoll: DiceRoll
  enemyHealth: number
  winner?: string
  loser?: string
  isDraw: boolean
}

export type BattleState = {
  rounds: Round[]
}

export type NewRound = {
  type: typeof NEW_ROUND
  payload: Round
}

export type ResetBattle = {
  type: typeof RESET_BATTLE
}

export type BattleActions = NewRound | ResetBattle

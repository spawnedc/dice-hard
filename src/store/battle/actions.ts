import { NEW_ROUND, RESET_BATTLE } from './actionTypes'
import { Round, NewRound, ResetBattle } from './types'

export const addNewRound = (payload: Round): NewRound => ({
  type: NEW_ROUND,
  payload,
})

export const resetBattle = (): ResetBattle => ({
  type: RESET_BATTLE,
})

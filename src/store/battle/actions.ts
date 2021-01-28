import { NEW_ROUND } from './actionTypes'
import { Round, NewRound } from './types'

export const addNewRound = (payload: Round): NewRound => ({
  type: NEW_ROUND,
  payload,
})

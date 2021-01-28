import { UPDATE_STAGE } from './actionTypes'
import { GameStage, SetGameStage } from './types'

export const updateGameStage = (payload: GameStage): SetGameStage => ({
  type: UPDATE_STAGE,
  payload,
})

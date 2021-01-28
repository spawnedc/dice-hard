import { UPDATE_STAGE } from './actionTypes'

export enum GameStage {
  INTRO = 'INTRO',
  BATTLE = 'BATTLE',
  GAME_OVER = 'GAME_OVER',
}

export type GameState = {
  stage: GameStage
}

export type SetGameStage = {
  type: typeof UPDATE_STAGE
  payload: GameStage
}

export type GameActions = SetGameStage

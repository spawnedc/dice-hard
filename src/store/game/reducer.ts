import { UPDATE_STAGE } from './actionTypes'

import { GameState, GameStage, GameActions } from './types'

const initialState: GameState = {
  stage: GameStage.INTRO,
}

const reducer = (state = initialState, action: GameActions) => {
  switch (action.type) {
    case UPDATE_STAGE:
      return {
        ...state,
        stage: action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}

export default reducer

import { NEW_ROUND } from './actionTypes'

import { BattleState, GameActions } from './types'

const initialState: BattleState = {
  rounds: [],
}

const reducer = (state = initialState, action: GameActions) => {
  switch (action.type) {
    case NEW_ROUND:
      return {
        ...state,
        rounds: [...state.rounds, action.payload],
      }
    default:
      return {
        ...state,
      }
  }
}

export default reducer

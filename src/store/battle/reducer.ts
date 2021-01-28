import { NEW_ROUND, RESET_BATTLE } from './actionTypes'

import { BattleState, BattleActions } from './types'

const initialState: BattleState = {
  rounds: [],
}

const reducer = (state = initialState, action: BattleActions) => {
  switch (action.type) {
    case NEW_ROUND:
      return {
        ...state,
        rounds: [...state.rounds, action.payload],
      }
    case RESET_BATTLE:
      return initialState
    default:
      return {
        ...state,
      }
  }
}

export default reducer

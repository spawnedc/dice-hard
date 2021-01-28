import { combineReducers } from 'redux'

import gameReducer from './game/reducer'
import battleReducer from './battle/reducer'

const rootReducer = combineReducers({
  game: gameReducer,
  battle: battleReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer

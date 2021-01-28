import { useSelector } from 'react-redux'

import { AppState } from '../rootReducer'

const selectGameStage = (state: AppState) => state.game.stage
const useGameStage = () => useSelector(selectGameStage)

export { useGameStage }

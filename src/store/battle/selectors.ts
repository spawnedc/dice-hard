import { useSelector } from 'react-redux'

import { AppState } from '../rootReducer'
import { Round } from './types'

const selectLastRound = (state: AppState): Round | undefined =>
  state.battle.rounds[state.battle.rounds.length - 1]
const useLastRound = () => useSelector(selectLastRound)

export { useLastRound }

import { GameStage } from '../../store/game/types'
import Battle from '../../views/Battle'
import GameOver from '../../views/GameOver'
import Intro from '../../views/Intro'

const gameStageToViewMap = {
  [GameStage.INTRO]: () => Intro,
  [GameStage.BATTLE]: () => Battle,
  [GameStage.GAME_OVER]: () => GameOver,
}

export { gameStageToViewMap }

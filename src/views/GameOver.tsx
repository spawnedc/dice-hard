import { useDispatch } from 'react-redux'
import { updateGameStage } from '../store/game/actions'
import { GameStage } from '../store/game/types'

const GameOver = () => {
  const dispatch = useDispatch()

  const onButtonClick = () => {
    dispatch(updateGameStage(GameStage.INTRO))
  }

  return (
    <>
      <p>Game Over</p>
      <button className="rpgui-button" type="button" onClick={onButtonClick}>
        Play again
      </button>
    </>
  )
}

export default GameOver

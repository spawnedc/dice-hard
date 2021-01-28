import { useDispatch } from 'react-redux'
import { updateGameStage } from '../store/game/actions'
import { GameStage } from '../store/game/types'

const Intro = () => {
  const dispatch = useDispatch()

  const onButtonClick = () => {
    dispatch(updateGameStage(GameStage.BATTLE))
  }

  return (
    <>
      <p>Welcome to Dice Hard</p>
      <button className="rpgui-button" type="button" onClick={onButtonClick}>
        Start game
      </button>
    </>
  )
}

export default Intro

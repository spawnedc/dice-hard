import { useDispatch } from 'react-redux'
import { Battleground } from '../components'
import CombatLog from '../components/CombatLog'
import useAttack from '../hooks/useAttack'
import { addNewRound } from '../store/battle/actions'
import { useRounds } from '../store/battle/selectors'
import { updateGameStage } from '../store/game/actions'
import { GameStage } from '../store/game/types'

const Battle = () => {
  const dispatch = useDispatch()
  const attack = useAttack()
  const rounds = useRounds()

  const onButtonClick = () => {
    const newRound = attack()
    dispatch(addNewRound(newRound))

    if (newRound.enemyHealth <= 0 || newRound.playerHealth <= 0) {
      dispatch(updateGameStage(GameStage.GAME_OVER))
    }
  }

  return (
    <>
      <Battleground />
      <button className="rpgui-button" type="button" onClick={onButtonClick}>
        Attack!
      </button>
      <CombatLog rounds={rounds} />
    </>
  )
}

export default Battle

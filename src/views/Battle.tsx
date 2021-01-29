import { useState } from 'react'
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
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const onButtonClick = () => {
    setButtonDisabled(true)
    const newRound = attack()
    dispatch(addNewRound(newRound))

    if (newRound.isDraw) {
      setButtonDisabled(false)
    } else {
      setTimeout(() => {
        if (newRound.enemyHealth <= 0 || newRound.playerHealth <= 0) {
          dispatch(updateGameStage(GameStage.GAME_OVER))
        } else {
          setButtonDisabled(false)
        }
      }, 1000)
    }
  }

  return (
    <>
      <Battleground />
      <button
        className="rpgui-button"
        type="button"
        onClick={onButtonClick}
        disabled={buttonDisabled}
      >
        Attack!
      </button>
      <CombatLog rounds={rounds} />
    </>
  )
}

export default Battle

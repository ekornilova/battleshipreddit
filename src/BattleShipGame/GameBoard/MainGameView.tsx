import React from 'react'
import { useBattleShipState } from '../BattleShipContext/BattleShipContext'
import { layoutData } from '../settings'
import { ActionType } from '../types'
import GameBoard from './GameBoard'
import ShipDesk from './ShipDesk'
import WinModal from './WinModal'
import { ShipDeskWrapper, MainGameViewWrapper, RestartBtn } from './styles'

const MainGameView: React.FC = () => {
  const { dispatch, countShips, countSunkShips } = useBattleShipState()
  const fillDefaultBoard = React.useCallback(() => {
    dispatch({
      type: ActionType.FILL_DEFAULT_BOARD,
      payload: {
        layoutData,
      },
    })
  }, [dispatch])
  React.useEffect(() => {
    fillDefaultBoard()
  }, [fillDefaultBoard])
  const isVictory = countShips && countShips === countSunkShips
  return (
    <MainGameViewWrapper>
      {isVictory && <WinModal onClose={fillDefaultBoard} />}
      <GameBoard />
      <ShipDeskWrapper>
        <ShipDesk />
        <RestartBtn onClick={fillDefaultBoard}>Restart Game</RestartBtn>
      </ShipDeskWrapper>
    </MainGameViewWrapper>
  )
}
export default MainGameView

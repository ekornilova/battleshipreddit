import React from 'react'
import { useBattleShipState } from '../BattleShipContext/BattleShipContext'
import { layoutData } from '../settings'
import { ActionType } from '../types'
import { ShipDeskWrapper, MainGameViewWrapper, RestartBtn } from './styles'
import ShipDesk from './ShipDesk'

const MainGameView: React.FC = () => {
  const { dispatch } = useBattleShipState()
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
  return (
    <MainGameViewWrapper>
      <ShipDeskWrapper>
        <ShipDesk />
        <RestartBtn onClick={fillDefaultBoard}>Restart Game</RestartBtn>
      </ShipDeskWrapper>
    </MainGameViewWrapper>
  )
}
export default MainGameView

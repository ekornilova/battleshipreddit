import { ActionsUnion, createActionPayload } from './reducers'
import * as React from 'react'
import { ActionType, LayoutType, BattleShipContext } from '../types'
import { chooseCell, setDefaultField } from './utils'
export const Actions = {
  /**
   * Set default field
   */
  setDefaultField: createActionPayload<
    ActionType.FILL_DEFAULT_BOARD,
    {
      layoutData: LayoutType
    }
  >(ActionType.FILL_DEFAULT_BOARD),

  /**
   * choose cell in th board
   */
  chooseCell: createActionPayload<
    ActionType.CHOOSE_CELL,
    {
      x: number
      y: number
    }
  >(ActionType.CHOOSE_CELL),
}
export type Action = ActionsUnion<typeof Actions>
export type DispatchType = React.Dispatch<Action>

export const BattleShipReducer = (
  state: BattleShipContext,
  action: Action
): BattleShipContext => {
  switch (action.type) {
    case ActionType.FILL_DEFAULT_BOARD:
      return setDefaultField(action.payload.layoutData)
    case ActionType.CHOOSE_CELL:
      return chooseCell(state, action.payload.x, action.payload.y)
    default:
      return state
  }
}

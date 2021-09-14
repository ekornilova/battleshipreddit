import { BattleShipContext } from './types'

export const COUNT_CELLS = 10

export const defaultBattleShipState: BattleShipContext = {
  countSunkShips: 0,
  field: [],
  layoutData: null,
  countShips: 0,
  shipData: null,
}

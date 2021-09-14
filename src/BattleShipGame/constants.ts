import { CellType, BattleShipContext } from './types'

export const MOBILE_WIDTH = 481
export const COUNT_CELLS = 10
export const Colors = {
  cell: {
    [CellType.notTouched]: 'white',
    [CellType.hit]: 'red',
    [CellType.miss]: '#5050c7',
    [CellType.sunk]: 'blue',
  },
  textColor: '#340980',
  textVictoryColor: 'red',
  cellBorder: '#500ec5',
  backgroundColor: 'white',
}
export const SizeCell = {
  mobile: 27,
  desktop: 60,
}

export const defaultBattleShipState: BattleShipContext = {
  countSunkShips: 0,
  field: [],
  layoutData: null,
  countShips: 0,
  shipData: null,
}

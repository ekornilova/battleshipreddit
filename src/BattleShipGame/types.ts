export enum ShipType {
  carrier = 'carrier',
  battleship = 'battleship',
  cruiser = 'cruiser',
  submarine = 'submarine',
  destroyer = 'destroyer',
}
export type Ship = {
  id: number
  type: ShipState
}

export type ShipSetting = {
  size: number
  count: number
}
export type ShipStateSetting = ShipSetting & {
  ships: Ship[]
}
export type ShipSettings = Record<ShipType, ShipSetting>
export type ShipStateSettings = Record<ShipType, ShipStateSetting>
export type LayoutSetting = {
  ship: ShipType
  positions: number[][]
}
export enum ShipState {
  notTouched,
  hit,
  sunk,
}
export enum CellType {
  notTouched,
  hit,
  miss,
  sunk,
}
export type Cell = {
  type: CellType
  shipId: null | number
}

export type LayoutType = {
  shipTypes: ShipSettings
  layout: LayoutSetting[]
}
export type BattleShipContext = {
  countSunkShips: number
  field: Cell[][]
  layoutData: LayoutType | null
  countShips: number
  shipData: ShipStateSettings | null
}
export enum ActionType {
  FILL_DEFAULT_BOARD,
  CHOOSE_CELL,
}

import { Cell, CellType } from '../../types'

export const defaultCell: Cell = {
  shipId: null,
  type: CellType.notTouched,
}
export const cellWithShipId: Cell = {
  shipId: 0,
  type: CellType.notTouched,
}

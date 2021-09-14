import {
  LayoutType,
  BattleShipContext,
  CellType,
  Cell,
  Ship,
  ShipState,
  ShipStateSettings,
  ShipSetting,
  ShipType,
} from '../types'
import { defaultBattleShipState, COUNT_CELLS } from '../constants'
import { layoutData } from '../settings'

export const isCellWithShip: (cell: Cell) => boolean = (cell: Cell) =>
  cell.shipId !== null
export const setDefaultField = (layoutData: LayoutType): BattleShipContext => {
  const countShips = layoutData.layout.length
  const field: Cell[][] = []
  for (let i = 0; i < COUNT_CELLS; i++) {
    const fieldRow: Cell[] = Array.from(
      {
        length: COUNT_CELLS,
      },
      () => {
        return {
          type: CellType.notTouched,
          shipId: null,
        }
      }
    )
    field.push(fieldRow)
  }
  const shipData: ShipStateSettings = Object.keys(layoutData.shipTypes).reduce(
    (acc, shipKey) => {
      acc[shipKey as ShipType] = {
        ...(layoutData.shipTypes[shipKey as ShipType] as ShipSetting),
        ships: [],
      }
      return acc
    },
    {} as ShipStateSettings
  )
  layoutData.layout.forEach((ship, shipIdx) => {
    shipData[ship.ship].ships.push({
      id: shipIdx,
      type: ShipState.notTouched,
    })
    ship.positions.forEach(([x, y]) => {
      field[x][y].shipId = shipIdx
    })
  })
  return {
    ...defaultBattleShipState,
    shipData,
    layoutData,
    countShips,
    field,
  }
}
export const chooseCell = (
  oldState: BattleShipContext,
  x: number,
  y: number
): BattleShipContext => {
  const field = [...oldState.field]
  let countSunkShips = oldState.countSunkShips
  let shipData = oldState.shipData
  const cell = {
    ...field[x][y],
  }
  if (isCellWithShip(cell)) {
    const shipId = cell.shipId
    cell.type = CellType.hit
    /* eslint-disable-next-line   @typescript-eslint/no-non-null-assertion */
    const positions = oldState.layoutData!.layout[shipId!]!.positions
    if (
      positions.every(
        ([xPos, yPos]) =>
          field[xPos][yPos].type === CellType.hit || (xPos === x && yPos === y)
      )
    ) {
      countSunkShips++
      cell.type = CellType.sunk
      positions.forEach(([xPos, yPos]) => {
        field[xPos][yPos] = {
          ...field[xPos][yPos],
          type: CellType.sunk,
        }
      })
    }
    /* eslint-disable-next-line   @typescript-eslint/no-non-null-assertion */
    const shipType: ShipType = layoutData.layout[shipId!].ship
    if (shipData && shipData[shipType]) {
      const ships: Ship[] = [...shipData[shipType].ships]
      const findShipIdx = ships.findIndex((ship) => shipId === ship.id)
      ships[findShipIdx] = {
        ...ships[findShipIdx],
        type: cell.type === CellType.sunk ? ShipState.sunk : ShipState.hit,
      }
      shipData = {
        ...shipData,
        [shipType]: {
          ...shipData[shipType],
          ships,
        },
      }
    }
  } else {
    cell.type = CellType.miss
  }
  field[x][y] = cell
  return {
    ...oldState,
    shipData,
    field,
    countSunkShips,
  }
}

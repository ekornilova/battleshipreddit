import { LayoutType, ShipType } from './types'

export const layoutData: LayoutType = {
  shipTypes: {
    carrier: { size: 5, count: 2 },
    battleship: { size: 4, count: 1 },
    cruiser: { size: 3, count: 1 },
    submarine: { size: 3, count: 1 },
    destroyer: { size: 2, count: 1 },
  },
  layout: [
    {
      ship: ShipType.carrier,
      positions: [
        [2, 9],
        [3, 9],
        [4, 9],
        [5, 9],
        [6, 9],
      ],
    },
    {
      ship: ShipType.carrier,
      positions: [
        [9, 9],
        [9, 8],
        [9, 7],
        [9, 6],
        [9, 5],
      ],
    },
    {
      ship: ShipType.battleship,
      positions: [
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
      ],
    },
    {
      ship: ShipType.cruiser,
      positions: [
        [8, 1],
        [8, 2],
        [8, 3],
      ],
    },
    {
      ship: ShipType.submarine,
      positions: [
        [3, 0],
        [3, 1],
        [3, 2],
      ],
    },
    {
      ship: ShipType.destroyer,
      positions: [
        [0, 0],
        [1, 0],
      ],
    },
  ],
}

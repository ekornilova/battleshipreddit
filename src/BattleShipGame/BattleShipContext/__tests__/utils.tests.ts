import { isCellWithShip, setDefaultField, chooseCell } from '../utils'
import { layoutData } from '../../settings'
import { CellType } from '../../types'

import { cellWithShipId, defaultCell } from '../__mocks__/utils.mocks'

describe('utils', () => {
  describe('isCellWithShip', () => {
    it('should return true if shipId is not null', () => {
      expect(isCellWithShip(cellWithShipId)).toBeTruthy
    })
    it('should return false if shipId is null', () => {
      expect(isCellWithShip(defaultCell)).toBeFalsy
    })
  })

  describe('defaultBattleShipState', () => {
    it('should return exact count of ships', () => {
      expect(setDefaultField(layoutData).countShips).toEqual(
        layoutData.layout.length
      )
    })
  })

  describe('chooseCell', () => {
    it('should change chosen cell', () => {
      const state = setDefaultField(layoutData)
      const x = 0,
        y = 0
      expect(chooseCell(state, x, y).field[x][y].type).toEqual(CellType.hit)
    })
  })
})

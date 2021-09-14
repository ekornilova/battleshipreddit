import React from 'react'
import * as BattleShipContext from '../../BattleShipContext/BattleShipContext'
import { setDefaultField } from '../../BattleShipContext/utils'
import { layoutData } from '../../settings'
import { cleanup } from '@testing-library/react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import GameBoard from '../GameBoard'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('../../BattleShipContext/BattleShipContext')

describe('GameBoard Form Snapshot tests', () => {
  describe('GameBoard', () => {
    beforeEach(() => {
      const defaultState = setDefaultField(layoutData)
      jest
        .spyOn(BattleShipContext, 'useBattleShipState')
        .mockImplementation(() => {
          return {
            ...defaultState,
            dispatch: jest.fn(),
          }
        })
    })
    afterEach(cleanup)

    it(`GameBoard default form`, () => {
      const component = Enzyme.shallow(<GameBoard />)
      expect(component).toMatchSnapshot()
    })
  })
})

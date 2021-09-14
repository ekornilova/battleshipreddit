import React, { createContext, useContext, useReducer } from 'react'
import { BattleShipContext as BattleShipContextType } from '../types'
import { defaultBattleShipState } from '../constants'
import { BattleShipReducer, DispatchType } from './BattleShipReducer'

type ContextType = BattleShipContextType & {
  dispatch: DispatchType
}

export const BattleShipContext = createContext<ContextType>({
  ...defaultBattleShipState,
  dispatch: () => null,
})

export const BattleShipContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    BattleShipReducer,
    defaultBattleShipState
  )
  return (
    <BattleShipContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BattleShipContext.Provider>
  )
}

export const useBattleShipState: () => ContextType = () =>
  useContext(BattleShipContext)

import React from 'react'
import MainGameView from './GameBoard/MainGameView'
import { BattleShipContextProvider } from './BattleShipContext/BattleShipContext'

const BattleShipGame: React.FC = () => (
  <BattleShipContextProvider>
    <MainGameView />
  </BattleShipContextProvider>
)
export default BattleShipGame

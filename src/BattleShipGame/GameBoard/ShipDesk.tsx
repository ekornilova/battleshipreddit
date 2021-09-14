import React from 'react'
import { useBattleShipState } from '../BattleShipContext/BattleShipContext'
import { ShipType, ShipState } from '../types'
import {
  ShipImg,
  LineWrapper,
  TableWrapper,
  ShipStateImg,
  Text,
} from './styles'
import carrier from '../assets/carrier.png'
import cruiser from '../assets/cruiser.png'
import destroyer from '../assets/destroyer.png'
import battleship from '../assets/battleship.png'
import submarine from '../assets/submarine.png'
import emptyCell from '../assets/empty_cell.png'
import DeathCell from '../assets/death.png'
import FullDeathCell from '../assets/full_death.png'

const ShipStateSrc: Record<ShipState, string> = {
  [ShipState.notTouched]: emptyCell,
  [ShipState.hit]: DeathCell,
  [ShipState.sunk]: FullDeathCell,
}
const ShipSrc: Record<ShipType, string> = {
  [ShipType.carrier]: carrier,
  [ShipType.cruiser]: cruiser,
  [ShipType.battleship]: battleship,
  [ShipType.submarine]: submarine,
  [ShipType.destroyer]: destroyer,
}
const ShipDesk: React.FC = () => {
  const { shipData } = useBattleShipState()
  if (!shipData) {
    return <React.Fragment />
  }
  return (
    <TableWrapper>
      <Text isBold size={20}>
        FLEETS
      </Text>
      <Text isBold size={20}>
        Size
      </Text>
      <Text isBold size={20}>
        State
      </Text>
      {Object.keys(shipData).map((key) => {
        return (
          <React.Fragment key={key}>
            <ShipImg src={ShipSrc[key as ShipType]} alt={key} />
            <Text isBold>{shipData[key as ShipType].size}</Text>
            <LineWrapper>
              {shipData[key as ShipType].ships.map((ship) => {
                return (
                  <ShipStateImg key={ship.id} src={ShipStateSrc[ship.type]} />
                )
              })}
            </LineWrapper>
          </React.Fragment>
        )
      })}
    </TableWrapper>
  )
}
export default ShipDesk

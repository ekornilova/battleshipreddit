import React from 'react'
import { useBattleShipState } from '../BattleShipContext/BattleShipContext'
import Cell from '../Cell/Cell'
import { CellType, ActionType } from '../types'
import { FieldWrapper } from './styles'

const GameBoard: React.FC = () => {
  const { field, dispatch } = useBattleShipState()
  const onCellClick = (type: CellType, x: number, y: number) => () => {
    if (type !== CellType.notTouched) {
      return
    }
    dispatch({
      type: ActionType.CHOOSE_CELL,
      payload: {
        x,
        y,
      },
    })
  }
  return (
    <FieldWrapper>
      {field.map((fieldRow, x) => {
        return fieldRow.map((cell, y) => (
          <Cell
            key={`${x}_${y}`}
            onClick={onCellClick(cell.type, x, y)}
            type={cell.type}
          />
        ))
      })}
    </FieldWrapper>
  )
}
export default GameBoard

import React from 'react'
import { CellType } from '../types'
import { CellView, CellImgView } from './styles'
import DeathCell from '../assets/death.png'
import FullDeathCell from '../assets/full_death.png'

type CellProps = {
  type: CellType
  onClick: () => void
}

const Cell: React.FC<CellProps> = ({ type, onClick }) => {
  const isDisabled = CellType.notTouched !== type
  const withImg = [CellType.hit, CellType.sunk].includes(type)
  return withImg ? (
    <CellImgView src={type === CellType.hit ? DeathCell : FullDeathCell} />
  ) : (
    <CellView isDisabled={isDisabled} type={type} onClick={onClick} />
  )
}
export default Cell

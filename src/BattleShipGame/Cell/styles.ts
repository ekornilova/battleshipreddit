import styled from 'styled-components'
import { Colors, MOBILE_WIDTH, SizeCell } from '../constants'
import { CellType } from '../types'

type CellViewAttr = {
  type: CellType
  isDisabled?: boolean
}
export const CellView = styled.div`
  ${(props: CellViewAttr) => `
    color: ${Colors.cell[props.type]};
    border: 2px solid  ${Colors.cellBorder};
    width: ${SizeCell.desktop}px;
    height: ${SizeCell.desktop}px;
    background-color: ${Colors.cell[props.type]};
    
    &:hover {
        cursor: ${props.isDisabled ? 'default' : 'pointer'};
    }

  @media (max-width: ${MOBILE_WIDTH}px) {
    width: ${SizeCell.mobile}px;
    height: ${SizeCell.mobile}px;
  }
    `}
`

export const CellImgView = styled.img`
  border: 2px solid ${Colors.cellBorder};
  width: ${SizeCell.desktop}px;
  height: ${SizeCell.desktop}px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: ${SizeCell.mobile}px;
    height: ${SizeCell.mobile}px;
  }
`

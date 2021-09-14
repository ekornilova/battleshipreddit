import styled from 'styled-components'
import { Colors, MOBILE_WIDTH } from '../constants'

export const MainGameViewWrapper = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  background-color: ${Colors.backgroundColor};
  justify-content: space-around;
  @media (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
    height: unset;
  }
`
export const ShipDeskWrapper = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  margin: 10px;
`
export const RestartBtn = styled.button`
  background-color: ${Colors.cellBorder};
  border: 2px solid ${Colors.cellBorder};
  color: ${Colors.backgroundColor};
  border-radius: 50px;
  font-size: 20px;
  font-weight: bold;
  height: 30px;
`
type TextAttr = {
  isBold?: boolean
  size?: number
}
export const Text = styled.div`
  ${(props: TextAttr) => props.isBold && `font-weight: bold;`}
  font-size: ${(props: TextAttr) => props.size || 16}px;
  align-self: center;
  color: ${Colors.textColor};
`

export const ShipImg = styled.img`
  width: 100px;
  height: 60px;
`
export const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: 40% 20% 30%;
  align-items: center;
  grid-auto-rows: 60px;
  justify-items: center;
`
export const LineWrapper = styled.div`
  display: flex;
`
export const ShipStateImg = styled.img`
  margin-left: 5px;
  border: 2px solid ${Colors.cellBorder};
  width: 20px;
  height: 20px;
`

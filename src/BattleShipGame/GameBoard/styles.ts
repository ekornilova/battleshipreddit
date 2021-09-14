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

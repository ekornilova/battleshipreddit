import React from 'react'
import { Modal } from '../../Components/Modal'
import { Text, RestartBtn, ModalMessage, ModalBackGround } from './styles'

type WinModalProps = {
  onClose: () => void
}
const WinModal: React.FC<WinModalProps> = ({ onClose }) => {
  return (
    <Modal>
      <ModalBackGround>
        <ModalMessage>
          <RestartBtn onClick={onClose}>X</RestartBtn>
          <Text isBold> Congratulations You Win! </Text>
        </ModalMessage>
      </ModalBackGround>
    </Modal>
  )
}
export default WinModal

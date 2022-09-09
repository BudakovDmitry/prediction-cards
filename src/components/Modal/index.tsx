import * as Styled from 'src/components/Modal/styles'

type ModalProps = {
  active: boolean
  setActive?: (active: boolean) => void
  children: JSX.Element
}

const Modal = ({ active, setActive = () => {}, children }: ModalProps) => {
  return (
    <Styled.ModalContainer active={active} onClick={() => setActive(false)}>
      <Styled.ModalContent active={active} onClick={e => e.stopPropagation()}>
        {children}
      </Styled.ModalContent>
    </Styled.ModalContainer>
  )
}

export default Modal

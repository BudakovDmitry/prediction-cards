import * as Styled from 'src/components/Modal/styles'

const Modal = ({ active, setActive, children }) => {
  return (
    <Styled.ModalContainer active={active} onClick={() => setActive(false)}>
      <Styled.ModalContent active={active} onClick={e => e.stopPropagation()}>
        {children}
      </Styled.ModalContent>
    </Styled.ModalContainer>
  )
}

export default Modal

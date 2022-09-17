import * as Styled from 'src/components/Modal/styles'

type ModalProps = {
  active: boolean
  setActive?: (active: boolean) => void
  children: JSX.Element | null
}

const Modal = ({
  active = false,
  setActive = () => {},
  children = null,
}: ModalProps) => {
  return (
    <Styled.ModalContainer active={active} onClick={() => setActive(false)}>
      <Styled.ModalContent
        active={active}
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
          event.stopPropagation()
        }
      >
        {children}
      </Styled.ModalContent>
    </Styled.ModalContainer>
  )
}

export default Modal

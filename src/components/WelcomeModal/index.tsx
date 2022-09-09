import * as Styled from 'src/components/WelcomeModal/styles'

const WelcomeModal = ({ setActive }) => {
  return (
    <Styled.WelcomeModalContainer>
      <Styled.WelcomeModalHeader>Добро пожаловать!</Styled.WelcomeModalHeader>
      <Styled.WelcomeModalDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Styled.WelcomeModalDescription>

      <a className='welcome-text__link' onClick={() => setActive(false)}>
        <span>Поїхали!</span>
        <div className="wave"></div>
      </a>
    </Styled.WelcomeModalContainer>
  )
}

export default WelcomeModal

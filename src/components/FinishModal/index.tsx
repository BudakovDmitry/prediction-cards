import * as Styled from 'src/components/WelcomeModal/styles'

const FinishModal = () => {
  return (
    <Styled.WelcomeModalContainer>
      <Styled.WelcomeModalHeader>
        Спасибо за уделенное время!
      </Styled.WelcomeModalHeader>
      <p className="text-modal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
        <a
          href="https://t.me/BudakovDmitry"
          target="_blank"
          className="text-modal__link"
        >
          telegram
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </a>
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        <a
          href="https://www.instagram.com/darya_budakova/"
          target="_blank"
          className="text-modal__link"
        >
          instagram
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </a>
        non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </Styled.WelcomeModalContainer>
  )
}

export default FinishModal

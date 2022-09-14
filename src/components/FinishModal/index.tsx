import { useFinishModal } from 'src/components/FinishModal/useFinishModal'
import * as Styled from 'src/components/FinishModal/styles'

const FinishModal = () => {
  const { copyToClipboard, copyLink } = useFinishModal()

  return (
    <Styled.WelcomeModalContainer>
      <Styled.FinishModalHeader>
        Дякую, що ти все-таки довірився!
      </Styled.FinishModalHeader>
      <Styled.FinishModalDescription className="text-modal">
        Сподіваюся тобі все-таки це певною мірою допомогло, в тому питанні який
        у тебе був! Якщо тобі було цікаво, то ти можеш продовжити стежити за
        мною в
        <a
          href="https://www.instagram.com/darya_budakova"
          target="_blank"
          className="text-modal__link"
        >
          інстаграм
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </a>
        , там я розповідаю про свої ігри, або можеш одразу записатися на одну з
        них, написавши мені в
        <a
          href="https://t.me/budakova_daria"
          target="_blank"
          className="text-modal__link"
        >
          телеграм
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </a>
        .
        <br />
        <br />
        Так само хочу тебе подякувати і подарувати знижку на одну з моїх ігор,
        для цього тобі потрібно просто сказати, що у тебе є знижка і написати
        промокод{' '}
        <em>
          <b>"T-GAMES"</b>
        </em>
        .
        <br />
        Так само, якщо ти вважаєш, що цей інструмент може допомогти або буде
        цікавий комусь із твоїх знайомих, просто поділися з ними
        <a
          onClick={event => {
            event.preventDefault()
            copyLink()
          }}
          className="text-modal__link"
        >
          ось цим
          <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
          </svg>
        </a>
        посиланням!
      </Styled.FinishModalDescription>
      {copyToClipboard && <Styled.CopiedText>Скопійовано</Styled.CopiedText>}
      <Styled.FinishModalFooter>
        Та й до зустрічі, на іграх!
      </Styled.FinishModalFooter>
    </Styled.WelcomeModalContainer>
  )
}

export default FinishModal

import * as Styled from 'src/components/WelcomeModal/styles'

const Photo = require('../../images/photo.jpg')

type WelcomeModalProps = {
  setActive: (active: boolean) => void
}

const WelcomeModal = ({ setActive = () => {} }: WelcomeModalProps) => {
  return (
    <Styled.WelcomeModalContainer>
      <Styled.AboutMe>
        <Styled.Photo src={Photo} />
        <Styled.DescriptionMe>
          Привіт! Для тих хто не знайомий зі мною, я - ведуча трансформаційних
          ігор.
        </Styled.DescriptionMe>
      </Styled.AboutMe>
      <Styled.WelcomeModalDescription>
        Хочу познайомити тебе з інструментом, який допоможе тобі знайти
        відповідь або підказку на питання, що хвилює тебе.
        <Styled.Instruction>
          <Styled.InstructionItem>
            По-перше, тобі потрібно подумати про те, що наразі важливо для тебе!
          </Styled.InstructionItem>
          <Styled.InstructionItem>
            Потім, тобі треба вирішити обирати долю самому, або довірити долю
            випадковості, та обрати карту!
          </Styled.InstructionItem>
          <Styled.InstructionItem>Довіритись!</Styled.InstructionItem>
        </Styled.Instruction>
      </Styled.WelcomeModalDescription>

      <a className="welcome-text__link" onClick={() => setActive(false)}>
        <span>Поїхали!</span>
        <div className="wave"></div>
      </a>
    </Styled.WelcomeModalContainer>
  )
}

export default WelcomeModal

import * as Styled from 'src/components/LeftField/styles'

const LeftField = () => {
  return (
    <Styled.LeftFieldContainer>
      <Styled.HeaderText>
        Введи цифру от 0 до 100 и получи напутствие!
      </Styled.HeaderText>
      <Styled.Input />
      <Styled.Button>
        Хочу знать!
      </Styled.Button>
    </Styled.LeftFieldContainer>
  )
}

export default LeftField
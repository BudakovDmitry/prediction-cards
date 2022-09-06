import * as Styled from 'src/components/RightField/styles'

const RightField = () => {
  return (
    <Styled.RightFieldContainer>
      <Styled.HeaderText>
        Доверь свою судьбу случайности!
      </Styled.HeaderText>
      <Styled.NumberContainer>
        <Styled.Number>7</Styled.Number>
      </Styled.NumberContainer>
      <Styled.Button>Нажимай</Styled.Button>
    </Styled.RightFieldContainer>
  )
}

export default RightField
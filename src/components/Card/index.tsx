import * as Styled from 'src/components/Card/styles'

const Card = ({ id, title, description, handleViewCard, setActiveModal }) => {
  return (
    <>
      <Styled.Card>
        <Styled.CardNumber>&#9883; {id} &#9883;</Styled.CardNumber>
        <Styled.CardTitle>{title}</Styled.CardTitle>
        <p>{description}</p>
      </Styled.Card>
      <Styled.Button onClick={setActiveModal}>Закрити</Styled.Button>
    </>
  )
}

export default Card

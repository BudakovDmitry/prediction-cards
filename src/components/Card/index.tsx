import * as Styled from 'src/components/Card/styles'

const Card = ({id, title, description, handleViewCard}) => {
  return (
    <>
      <Styled.Card>
        <h3>{id}</h3>
        <h1>{title}</h1>
        <p>{description}</p>
      </Styled.Card>
      <Styled.Button onClick={handleViewCard}>Закрыть</Styled.Button>
    </>
  )
}

export default Card
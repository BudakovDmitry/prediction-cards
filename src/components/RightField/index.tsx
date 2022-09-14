import { useRightField } from 'src/components/RightField/useRightField'
import * as Styled from 'src/components/RightField/styles'
import Loader from 'src/components/Loader'
import Card from 'src/components/Card'

const RightField = ({ setActiveModal }) => {
  const {
    randomNumber,
    getRandomNumber,
    loading,
    handleViewCard,
    card,
    viewCard,
  } = useRightField()

  return (
    <Styled.RightFieldContainer>
      {viewCard ? (
        <Card
          id={card.id}
          title={card.title}
          description={card.description}
          handleViewCard={handleViewCard}
          setActiveModal={setActiveModal}
        />
      ) : (
        <>
          <Styled.HeaderText>Довір свою долю випадковості!</Styled.HeaderText>
          <Styled.NumberContainer>
            {loading ? (
              <Loader color="#ffffff" />
            ) : (
              <Styled.Number>{randomNumber}</Styled.Number>
            )}
          </Styled.NumberContainer>
          {randomNumber ? (
            <Styled.Button onClick={handleViewCard}>
              Відкрити карту
            </Styled.Button>
          ) : (
            <Styled.Button onClick={getRandomNumber}>Натискай</Styled.Button>
          )}
        </>
      )}
    </Styled.RightFieldContainer>
  )
}

export default RightField

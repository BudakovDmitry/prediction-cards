import { Dispatch, SetStateAction } from 'react'
import { useRightField } from 'src/components/RightField/useRightField'
import * as Styled from 'src/components/RightField/styles'
import Loader from 'src/components/Loader'
import Card from 'src/components/Card'

type RightFieldProps = {
  setActiveModal: Dispatch<SetStateAction<boolean>>
  disabled: boolean
  setDisabledOppositeField: Dispatch<SetStateAction<boolean>>
}

const RightField = ({
  setActiveModal = () => {},
  disabled = false,
  setDisabledOppositeField = () => {},
}: RightFieldProps) => {
  const {
    randomNumber,
    getRandomNumber,
    loading,
    handleViewCard,
    card,
    viewCard,
  } = useRightField()

  return (
    <Styled.RightFieldContainer disabled={disabled}>
      {viewCard ? (
        <Card
          id={card.id}
          title={card.title}
          description={card.description}
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
            <Styled.Button
              onClick={() => {
                getRandomNumber()
                setDisabledOppositeField(true)
              }}
            >
              Натискай
            </Styled.Button>
          )}
        </>
      )}
    </Styled.RightFieldContainer>
  )
}

export default RightField

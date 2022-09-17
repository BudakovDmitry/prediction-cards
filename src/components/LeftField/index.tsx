import { Dispatch, SetStateAction } from 'react'
import * as Styled from 'src/components/LeftField/styles'
import Card from 'src/components/Card'
import { useLeftField } from 'src/components/LeftField/useLeftField'
import Loader from 'src/components/Loader'
import Form from 'src/components/Form'

type LeftFieldProps = {
  setActiveModal: Dispatch<SetStateAction<boolean>>
  disabled: boolean
  setDisabledOppositeField: Dispatch<SetStateAction<boolean>>
}

const LeftField = ({
  setActiveModal = () => {},
  disabled = false,
  setDisabledOppositeField = () => {},
}: LeftFieldProps) => {
  const { viewCard, handleViewCard, loading, card } = useLeftField()

  return (
    <Styled.LeftFieldContainer disabled={disabled}>
      {loading ? (
        <Loader color="#ffffff" />
      ) : (
        <>
          {viewCard ? (
            <Card
              id={card.id}
              title={card.title}
              description={card.description}
              setActiveModal={setActiveModal}
            />
          ) : (
            <Form
              handleViewCard={handleViewCard}
              setDisabledOppositeField={setDisabledOppositeField}
            />
          )}
        </>
      )}
    </Styled.LeftFieldContainer>
  )
}

export default LeftField

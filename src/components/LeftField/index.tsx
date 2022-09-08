import * as Styled from 'src/components/LeftField/styles'
import Card from 'src/components/Card'
import { useLeftField } from 'src/components/LeftField/useLeftField'
import Loader from 'src/components/Loader'
import Form from 'src/components/Form'


const LeftField = () => {
  const { viewCard, handleViewCard, loading, card } = useLeftField()

  return (
    <Styled.LeftFieldContainer>
      {loading ? <Loader color="#ffffff" /> : <>
        {viewCard ?
          <Card id={card.id} title={card.title} description={card.description} handleViewCard={handleViewCard} /> : 
          <Form handleViewCard={handleViewCard} />
        }
      </>}
    </Styled.LeftFieldContainer>
  )
}

export default LeftField
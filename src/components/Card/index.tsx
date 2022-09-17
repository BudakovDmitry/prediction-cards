import { Dispatch, SetStateAction } from 'react'
import * as Styled from 'src/components/Card/styles'

type CardProps = {
  id: number
  title: string
  description: string
  setActiveModal: Dispatch<SetStateAction<boolean>>
}

const Card = ({
  id = 0,
  title = '',
  description = '',
  setActiveModal = () => {},
}: CardProps) => {
  return (
    <>
      <Styled.Card>
        <Styled.CardNumber>&#9883; {id} &#9883;</Styled.CardNumber>
        <Styled.CardTitle>{title}</Styled.CardTitle>
        <Styled.CardDescription>{description}</Styled.CardDescription>
      </Styled.Card>
      <Styled.Button onClick={setActiveModal}>Закрити</Styled.Button>
    </>
  )
}

export default Card

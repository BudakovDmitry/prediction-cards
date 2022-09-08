import * as Styled from './styles'

type LoaderProps = {
  color: string
}

const Loader = ({ color }: LoaderProps) => {
  return (
    <Styled.Loader>
      <Styled.LoaderDot positionLeft="8px" animation="first" color={color} />
      <Styled.LoaderDot positionLeft="8px" animation="second" color={color} />
      <Styled.LoaderDot positionLeft="32px" animation="second" color={color} />
      <Styled.LoaderDot positionLeft="56px" animation="third" color={color} />
    </Styled.Loader>
  )
}

export default Loader

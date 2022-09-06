import LeftField from "src/components/LeftField"
import RightField from "src/components/RightField"
import * as Styled from 'src/app/styles'

const App = () => {
  return (
    <Styled.HomeContainer>
      <LeftField />
      <RightField />
    </Styled.HomeContainer>
  )
}

export default App
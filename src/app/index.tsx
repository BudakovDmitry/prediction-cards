import LeftField from 'src/components/LeftField'
import RightField from 'src/components/RightField'
import * as Styled from 'src/app/styles'
import Modal from 'src/components/Modal'
import { useState } from 'react'

const App = () => {
  const [modalActive, setModalActive] = useState(true)

  return (
    <Styled.HomeContainer>
      <LeftField />
      <RightField />
      <Modal active={modalActive} setActive={setModalActive}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Modal>
    </Styled.HomeContainer>
  )
}

export default App

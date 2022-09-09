import LeftField from 'src/components/LeftField'
import RightField from 'src/components/RightField'
import * as Styled from 'src/app/styles'
import Modal from 'src/components/Modal'
import { useState } from 'react'
import WelcomeModal from 'src/components/WelcomeModal'
import FinishModal from 'src/components/FinishModal'

const App = () => {
  const [modalActive, setModalActive] = useState(true)
  const [finishModalActive, setFinishModalActive] = useState(false)

  if (finishModalActive) {
    return (
      <Modal active={finishModalActive}>
        <FinishModal />
      </Modal>
    )
  }

  return (
    <Styled.HomeContainer>
      <LeftField setActiveModal={setFinishModalActive} />
      <RightField setActiveModal={setFinishModalActive} />
      <Modal active={modalActive} setActive={setModalActive}>
        <WelcomeModal setActive={setModalActive} />
      </Modal>
    </Styled.HomeContainer>
  )
}

export default App

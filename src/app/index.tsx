import LeftField from 'src/components/LeftField'
import RightField from 'src/components/RightField'
import * as Styled from 'src/app/styles'
import Modal from 'src/components/Modal'
import { useState } from 'react'
import WelcomeModal from 'src/components/WelcomeModal'
import FinishModal from 'src/components/FinishModal'

const ArrowIcon = require('../images/arrow-down-icon.png')

const App = () => {
  const [modalActive, setModalActive] = useState<boolean>(true)
  const [finishModalActive, setFinishModalActive] = useState<boolean>(false)
  const [disabledRightField, setDisabledRightField] = useState<boolean>(false)
  const [disabledLeftField, setDisabledLeftField] = useState<boolean>(false)

  return (
    <Styled.HomeContainer>
      <LeftField
        setActiveModal={setFinishModalActive}
        disabled={disabledLeftField}
        setDisabledOppositeField={setDisabledRightField}
      />
      <Styled.ArrowIcon src={ArrowIcon} />
      <RightField
        setActiveModal={setFinishModalActive}
        disabled={disabledRightField}
        setDisabledOppositeField={setDisabledLeftField}
      />
      {modalActive ? (
        <Modal active={modalActive} setActive={setModalActive}>
          <WelcomeModal setActive={setModalActive} />
        </Modal>
      ) : finishModalActive ? (
        <Modal active={finishModalActive}>
          <FinishModal />
        </Modal>
      ) : null}
    </Styled.HomeContainer>
  )
}

export default App

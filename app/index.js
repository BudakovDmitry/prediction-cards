import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LeftField from 'src/components/LeftField';
import RightField from 'src/components/RightField';
import * as Styled from 'src/app/styles';
import Modal from 'src/components/Modal';
import { useState } from 'react';
import WelcomeModal from 'src/components/WelcomeModal';
import FinishModal from 'src/components/FinishModal';
const ArrowIcon = require('../images/arrow-down-icon.png');
const App = () => {
    const [modalActive, setModalActive] = useState(true);
    const [finishModalActive, setFinishModalActive] = useState(false);
    const [disabledRightField, setDisabledRightField] = useState(false);
    const [disabledLeftField, setDisabledLeftField] = useState(false);
    return (_jsxs(Styled.HomeContainer, { children: [_jsx(LeftField, { setActiveModal: setFinishModalActive, disabled: disabledLeftField, setDisabledOppositeField: setDisabledRightField }), _jsx(Styled.ArrowIcon, { src: ArrowIcon }), _jsx(RightField, { setActiveModal: setFinishModalActive, disabled: disabledRightField, setDisabledOppositeField: setDisabledLeftField }), modalActive ? (_jsx(Modal, { active: modalActive, setActive: setModalActive, children: _jsx(WelcomeModal, { setActive: setModalActive }) })) : finishModalActive ? (_jsx(Modal, { active: finishModalActive, children: _jsx(FinishModal, {}) })) : null] }));
};
export default App;

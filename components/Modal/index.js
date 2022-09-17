import { jsx as _jsx } from "react/jsx-runtime";
import * as Styled from 'src/components/Modal/styles';
const Modal = ({ active = false, setActive = () => { }, children = null, }) => {
    return (_jsx(Styled.ModalContainer, { active: active, onClick: () => setActive(false), children: _jsx(Styled.ModalContent, { active: active, onClick: (event) => event.stopPropagation(), children: children }) }));
};
export default Modal;

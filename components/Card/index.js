import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import * as Styled from 'src/components/Card/styles';
const Card = ({ id = 0, title = '', description = '', setActiveModal = () => { }, }) => {
    return (_jsxs(_Fragment, { children: [_jsxs(Styled.Card, { children: [_jsxs(Styled.CardNumber, { children: ["\u269B ", id, " \u269B"] }), _jsx(Styled.CardTitle, { children: title }), _jsx(Styled.CardDescription, { children: description })] }), _jsx(Styled.Button, { onClick: setActiveModal, children: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438" })] }));
};
export default Card;

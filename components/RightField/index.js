import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRightField } from 'src/components/RightField/useRightField';
import * as Styled from 'src/components/RightField/styles';
import Loader from 'src/components/Loader';
import Card from 'src/components/Card';
const RightField = ({ setActiveModal = () => { }, disabled = false, setDisabledOppositeField = () => { }, }) => {
    const { randomNumber, getRandomNumber, loading, handleViewCard, card, viewCard, } = useRightField();
    return (_jsx(Styled.RightFieldContainer, { disabled: disabled, children: viewCard ? (_jsx(Card, { id: card.id, title: card.title, description: card.description, setActiveModal: setActiveModal })) : (_jsxs(_Fragment, { children: [_jsx(Styled.HeaderText, { children: "\u0414\u043E\u0432\u0456\u0440 \u0441\u0432\u043E\u044E \u0434\u043E\u043B\u044E \u0432\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u043E\u0441\u0442\u0456!" }), _jsx(Styled.NumberContainer, { children: loading ? (_jsx(Loader, { color: "#ffffff" })) : (_jsx(Styled.Number, { children: randomNumber })) }), randomNumber ? (_jsx(Styled.Button, { onClick: handleViewCard, children: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043A\u0430\u0440\u0442\u0443" })) : (_jsx(Styled.Button, { onClick: () => {
                        getRandomNumber();
                        setDisabledOppositeField(true);
                    }, children: "\u041D\u0430\u0442\u0438\u0441\u043A\u0430\u0439" }))] })) }));
};
export default RightField;

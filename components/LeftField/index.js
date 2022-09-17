import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import * as Styled from 'src/components/LeftField/styles';
import Card from 'src/components/Card';
import { useLeftField } from 'src/components/LeftField/useLeftField';
import Loader from 'src/components/Loader';
import Form from 'src/components/Form';
const LeftField = ({ setActiveModal = () => { }, disabled = false, setDisabledOppositeField = () => { }, }) => {
    const { viewCard, handleViewCard, loading, card } = useLeftField();
    return (_jsx(Styled.LeftFieldContainer, { disabled: disabled, children: loading ? (_jsx(Loader, { color: "#ffffff" })) : (_jsx(_Fragment, { children: viewCard ? (_jsx(Card, { id: card.id, title: card.title, description: card.description, setActiveModal: setActiveModal })) : (_jsx(Form, { handleViewCard: handleViewCard, setDisabledOppositeField: setDisabledOppositeField })) })) }));
};
export default LeftField;

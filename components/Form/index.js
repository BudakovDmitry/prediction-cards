import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as Styled from 'src/components/Form/styles';
import { useForm } from 'react-hook-form';
const Form = ({ handleViewCard = () => { }, setDisabledOppositeField = () => { }, }) => {
    const { register, formState: { errors }, handleSubmit, } = useForm();
    return (_jsxs(_Fragment, { children: [_jsx(Styled.HeaderText, { children: "\u0412\u0432\u0435\u0434\u0438 \u0446\u0438\u0444\u0440\u0443 \u0432\u0456\u0434 1 \u0434\u043E 44 \u0442\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u0439 \u043D\u0430\u043F\u0443\u0442\u0442\u044F!" }), _jsxs(Styled.Form, { onSubmit: handleSubmit(handleViewCard), children: [_jsx(Styled.Input, { type: "number", ...register('luckyNumber', {
                            required: "Це поле обов'язково до заповнення",
                            min: { value: 1, message: 'Мінімально 1' },
                            max: { value: 44, message: 'Максимально 44' },
                        }) }), errors.luckyNumber && (_jsx(Styled.ErrorText, { children: errors.luckyNumber.message })), _jsx(Styled.Button, { onClick: () => setDisabledOppositeField(true), children: "\u0425\u043E\u0447\u0443 \u0437\u043D\u0430\u0442\u044C!" })] })] }));
};
export default Form;

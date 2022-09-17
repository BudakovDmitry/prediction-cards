import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Styled from './styles';
const Loader = ({ color }) => {
    return (_jsxs(Styled.Loader, { children: [_jsx(Styled.LoaderDot, { positionLeft: "8px", animation: "first", color: color }), _jsx(Styled.LoaderDot, { positionLeft: "8px", animation: "second", color: color }), _jsx(Styled.LoaderDot, { positionLeft: "32px", animation: "second", color: color }), _jsx(Styled.LoaderDot, { positionLeft: "56px", animation: "third", color: color })] }));
};
export default Loader;

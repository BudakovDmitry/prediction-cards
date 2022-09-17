import { useState } from "react";
import copy from 'copy-to-clipboard';
export const useFinishModal = () => {
    const [copyToClipboard, setCopyToClipboard] = useState(false);
    const copyLink = () => {
        setCopyToClipboard(true);
        copy('https://budakovdmitry.github.io/prediction-cards/');
        setTimeout(() => {
            setCopyToClipboard(false);
        }, 1000);
    };
    return {
        copyToClipboard,
        copyLink
    };
};

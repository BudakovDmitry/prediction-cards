import { useState } from 'react';
import json from 'src/json/cards.json';
export const useLeftField = () => {
    const [viewCard, setViewCard] = useState(false);
    const [loading, setLoading] = useState(false);
    const [card, setCard] = useState({
        id: 0,
        title: '',
        description: ''
    });
    const handleViewCard = (data) => {
        viewCard ? setViewCard(false) : openCard(data.luckyNumber);
    };
    const openCard = (id = 0) => {
        setCard({ ...json.cards[id - 1] });
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setViewCard(true);
        }, 1500);
    };
    return {
        viewCard,
        handleViewCard,
        loading,
        card
    };
};

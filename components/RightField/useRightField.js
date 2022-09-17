import { useState } from "react";
import json from 'src/json/cards.json';
export const useRightField = () => {
    const [randomNumber, setRandomNumber] = useState(null);
    const [loading, setLoading] = useState(false);
    const [viewCard, setViewCard] = useState(false);
    const [card, setCard] = useState({
        id: 0,
        title: '',
        description: ''
    });
    const getRandomNumber = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setRandomNumber(Math.floor(Math.random() * (45 - 1)) + 1);
        }, 1500);
    };
    const handleViewCard = () => {
        viewCard ? hideCard() : randomNumber && openCard(randomNumber);
    };
    const hideCard = () => {
        setViewCard(false);
        setRandomNumber(null);
    };
    const openCard = (id) => {
        setCard({ ...json.cards[id - 1] });
        setViewCard(true);
    };
    return {
        randomNumber,
        getRandomNumber,
        loading,
        card,
        handleViewCard,
        viewCard
    };
};

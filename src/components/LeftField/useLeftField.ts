import { useState } from 'react'
import json from 'src/json/cards.json'

export const useLeftField = () => {
  const [viewCard, setViewCard] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [ card, setCard ] = useState({
    id: 0,
    title: '',
    description: ''
  })

  const handleViewCard = (card?: any): void => {
    viewCard ? setViewCard(false) : openCard(card.luckyNumber)
  }

  const openCard = (id: number = 0) => {
    setCard({...json.cards[id - 1]})
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setViewCard(true)
    }, 1500)
  }

  return {
    viewCard,
    handleViewCard,
    loading,
    card
  }
}
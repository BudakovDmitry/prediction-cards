import { useState } from 'react'
import json from 'src/json/cards.json'
import { CardType } from 'src/types'
import { SubmitHandler, FieldValues } from 'react-hook-form'

export const useLeftField = () => {
  const [viewCard, setViewCard] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [ card, setCard ] = useState<CardType>({
    id: 0,
    title: '',
    description: ''
  })

  const handleViewCard = <TFieldValues extends FieldValues>(data: TFieldValues): void => {
    viewCard ? setViewCard(false) : openCard(data.luckyNumber)
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
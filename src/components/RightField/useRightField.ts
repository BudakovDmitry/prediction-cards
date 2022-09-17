import { useState } from "react"
import json from 'src/json/cards.json'
import { CardType } from 'src/types'

export const useRightField = () => {
  const [randomNumber, setRandomNumber] = useState<number | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [viewCard, setViewCard] = useState<boolean>(false)
  const [ card, setCard ] = useState<CardType>({
    id: 0,
    title: '',
    description: ''
  })

  const getRandomNumber = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setRandomNumber(Math.floor(Math.random() * (45 - 1)) + 1)
    }, 1500)
  }

  const handleViewCard = (): void => {
    viewCard ? hideCard() : randomNumber && openCard(randomNumber)
  }

  const hideCard = () => {
    setViewCard(false)
    setRandomNumber(null)
  }

  const openCard = (id: number) => {
    setCard({...json.cards[id - 1]})
    setViewCard(true)
  }

  return {
    randomNumber,
    getRandomNumber,
    loading,
    card,
    handleViewCard,
    viewCard
  }
}
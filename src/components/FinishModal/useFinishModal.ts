import { useState } from "react"
import copy from 'copy-to-clipboard'

export const useFinishModal = () => {

  const [copyToClipboard, setCopyToClipboard] = useState<boolean>(false)

  const copyLink = (): void => {
    setCopyToClipboard(true)
    copy('https://budakovdmitry.github.io/prediction-cards/')
    setTimeout(() => {
      setCopyToClipboard(false)
    }, 1000)
  }

  return {
    copyToClipboard,
    copyLink
  }
}
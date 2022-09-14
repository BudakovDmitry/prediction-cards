import { useState } from "react"
import copy from 'copy-to-clipboard'

export const useFinishModal = () => {

  const [copyToClipboard, setCopyToClipboard] = useState<boolean>(false)

  const copyLink = () => {
    setCopyToClipboard(true)
    copy('https://budakova_darya.com')
    setTimeout(() => {
      setCopyToClipboard(false)
    }, 1000)
  }

  return {
    copyToClipboard,
    copyLink
  }
}
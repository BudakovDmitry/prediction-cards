import styled, { keyframes } from 'styled-components'
import { DotType } from './types'

const firstAnimation = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`

const secondAnimation = keyframes`
  from {
    transform: translate(0, 0);
  }

  to {
    transform: translate(24px, 0);
  }
`

const thirdAnimation = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0);
  }
`

export const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)

`

export const LoaderDot = styled.div<DotType>`
  position: absolute;
  top: 33px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${props => props.color ?? '#ffffff'};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
  left: ${props => props.positionLeft ?? '8px'};
  animation: ${props => {
      switch (props.animation) {
        case 'first':
          return firstAnimation
        case 'second':
          return secondAnimation
        case 'third':
          return thirdAnimation
        default:
          return firstAnimation
      }
    }}
    0.6s infinite;
`

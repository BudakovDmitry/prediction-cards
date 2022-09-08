import styled from 'styled-components'

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center; 
  justify-content: center;
  opacity: ${props => props.active ? '1' : '0'};
  pointer-events: ${props => props.active ? 'all' : 'none'};
  transition: 0.6s;
`

export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: #ffffff;
  width: 85%;
  height: 85%;
  transition: 0.4s;
  transform: ${props => props.active ? 'scale(1)' : 'scale(0)'}
`

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
`
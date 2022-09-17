import styled from 'styled-components';
export const ModalContainer = styled.div `
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center; 
  justify-content: center;
  opacity: ${props => props.active ? '1' : '0'};
  pointer-events: ${props => props.active ? 'all' : 'none'};
  transition: 0.6s all;
`;
export const ModalContent = styled.div `
  padding: 20px;
  border-radius: 12px;
  background-color: #ffffff;
  width: 85%;
  height: 85%;
  transform: ${props => props.active ? 'scale(1)' : 'scale(0)'};
  transition: 0.4s all;
  @media screen and (max-width: 430px) {
    width: 90%;
    overflow-y: auto;
    padding: 30px 10px;
  }
`;

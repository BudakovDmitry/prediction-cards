import styled from 'styled-components';
export const WelcomeModalContainer = styled.div `
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
`;
export const FinishModalHeader = styled.h2 `
  margin: 40px 0 50px 0;
  @media screen and (max-width: 430px) {
  }
`;
export const FinishModalDescription = styled.p `
  font-size: 18px;
  margin-bottom: 10px;
  @media screen and (max-width: 430px) {
    padding: 0 10px;
    margin-bottom: 30px;
  }
`;
export const FinishModalFooter = styled.h3 `
  @media screen and (max-width: 430px) {
    padding-bottom: 30px;
  }
`;
export const CopiedText = styled.span `
  text-style: italic;
  display: block;
  margin: 0 auto;
  padding: 0;
  color: grey;
`;

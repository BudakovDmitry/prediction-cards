import styled from 'styled-components';
export const Card = styled.div `
  width: 300px;
  height: 350px;
  background: #ffffff;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 5px 10px;
  text-align: center;
  overflow-y: auto;
  @media screen and (max-width: 430px) {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 30px;
    overflow-y: auto;
    padding: 10px 10px;
  }
`;
export const Button = styled.button.attrs({
    type: "submit"
}) `
  display: block;
  margin: 0 auto;
  width: 356px;
  height: 45px;
  background-color: #2ea44f;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  margin-top: 45px;
  &:hover{
    background-color: #236130; 
  }
  @media screen and (max-width: 430px) {
    width: 256px;
  }
`;
export const CardNumber = styled.h3 `
  font-size: 16px;
  font-weight: bold;
`;
export const CardTitle = styled.h2 `
  font-size: 20px;
`;
export const CardDescription = styled.p `
  font-size: 18px;
  height: 100%;
`;

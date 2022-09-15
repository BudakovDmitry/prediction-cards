import styled from 'styled-components'

export const HeaderText = styled.h2`
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
  color: #ffffff;
  line-height: 2;
  font-size: 30px;
  text-align: center;
  @media screen and (max-width: 430px) {
    font-size: 20px;
    width: 250px;
  }
`

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  width: 350px;
  height: 50px;
  backdrop-filter: blur(7px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.6);
  border: 1px solid #4b5663;
  color: #fff;
  border-radius: 5px;
  margin-top: 50px;
  padding-left: 10px;
  font-size: 30px;
  ::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
  :focus{
    border: 1px solid yellow;
  };
  :active{
    border: 1px solid yellow;
  }
  @media screen and (max-width: 430px) {
    width: 250px;
  }
`

export const Button = styled.button.attrs({
  type: "submit"
})`
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
  margin-top: 65px;
  &:hover{
    background-color: #236130; 
  }
  @media screen and (max-width: 430px) {
    width: 256px;
  }
`

export const Form = styled.form`
  width: 100%;
`

export const ErrorText = styled.p`
  width: 350px;
  margin: 0 auto;
  padding: 5px 0 0 0;
  color: red;
  font-size: 12px;
  @media screen and (max-width: 430px) {
    width: 256px;
  }
`
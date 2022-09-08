import styled from 'styled-components'

export const HeaderText = styled.h2`
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
  color: #ffffff;
  line-height: 2;
  font-size: 30px;
  text-align: center;
`

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  width: 350px;
  height: 50px;
  background-color: #1f2a37;
  border: 1px solid #4b5663;
  color: #fff;
  border-radius: 5px;
  margin-top: 50px;
  padding-left: 10px;
  font-size: 30px;
  &::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus{
    border: 1px solid red;
  };
  &:active{
    border: 1px solid red;
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
`
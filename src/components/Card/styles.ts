import styled from 'styled-components'

export const Card = styled.div`
  width: 300px;
  height: 350px;
  background: #ffffff;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 5px 10px;
  text-align: center;
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
  margin-top: 45px;
  &:hover{
    background-color: #236130; 
  }
`

export const CardNumber = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const CardTitle = styled.h2`
  font-size: 26px;
`
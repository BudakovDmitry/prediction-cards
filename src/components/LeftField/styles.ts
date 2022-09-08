import styled from 'styled-components'

export const LeftFieldContainer = styled.div`
  margin: 20px 0;
  width: 500px;
  height: 550px;
  backdrop-filter: blur(7px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.6);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
`

export const Button = styled.button.attrs({
  type: "submit"
})`
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
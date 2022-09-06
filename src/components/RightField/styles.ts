import styled from 'styled-components'

export const RightFieldContainer = styled.div`
  margin: 20px 0;
  width: 500px;
  height: 550px;
  backdrop-filter: blur(7px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.6);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  text-align: center;
`

export const Button = styled.button`
  width: 356px;
  height: 40px;
  background-color: #2ea44f;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  margin-top: 50px;
  &:hover{
    background-color: #236130; 
  }
`

export const HeaderText = styled.h2`
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 20px;
  color: #ffffff;
  line-height: 2;
  font-size: 30px;
`

export const NumberContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  backdrop-filter: blur(7px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.6);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  text-align: center;
  color: #ffffff;
  position: relative;
  padding: 0;
`

export const Number = styled.p`
  font-size: 52px;
  font-weight: bold;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
`
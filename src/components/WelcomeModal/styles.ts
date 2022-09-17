import styled from 'styled-components'

export const WelcomeModalContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
`

export const WelcomeModalHeader = styled.h2`
  margin: 70px 0 50px 0;
`

export const WelcomeModalDescription = styled.p`
  line-height: 2;
  padding: 0 50px;
  font-size: 20px;
  margin-bottom: 50px;
  @media screen and (max-width: 430px) {
    margin: 0;
    padding: 0;
    font-size: 18px;
  }
`

export const AboutMe = styled.div`
  display: flex;
  justify-content: center;
  width: 700px;
  height: 100px;
  margin: 0 auto;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: 430px) {
    flex-direction: column-reverse;
    width: 90%;
    margin-top: 70px;
    margin-bottom: 70px;
  }
`

export const Photo = styled.img`
  display: block;
  width: 125px;
  margin-right: 30px;
  @media screen and (max-width: 430px) {
    margin: 0;
    padding-top: 10px;
  }
`

export const DescriptionMe = styled.h3`
  font-style: italic;
  line-height: 1.5;
  @media screen and (max-width: 430px) {
    margin: 0;
    padding: 0;
  }
`

export const Instruction = styled.ul`
  font-style: italic;
  font-size: 16px;
  text-align: start;
  margin: 10px 0 20px 0;
  line-height: 2;
  @media screen and (max-width: 430px) {
    margin: 0;
    padding: 10px 20px;
  }
`

export const InstructionItem = styled.li`
`
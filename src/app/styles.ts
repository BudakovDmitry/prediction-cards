import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 430px) {
    flex-direction: column;
    width: 100%;
  }
`

export const ArrowIcon = styled.img`
  display: none;
  @media screen and (max-width: 430px) {
    width: 50px;
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
  }

`
import styled from "styled-components"

export const Container = styled.div`
  padding: 185px 2rem 0 2rem;
  position: relative;
  z-index: 5;
  background-color:rgba(0,0,0,0);
  max-width: 980px;
  margin: auto;
`

export const PageTitle = styled.div`
  font-family: lightAgen;
  font-size: 57px;
  line-height: 1.4814814814814814;
  font-weight: 500;
  word-break: keep-all;
`

export const PageSubTitle = styled.div`
  letter-spacing: 0.4em;
  font-size: 14px;
  margin-top: 22px;

  @media (min-width: 769px) {
    margin-top: 25px;
  }
`

export const ContentBox = styled.div`
  margin-top: 50px;
  font-size: 12px;
  letter-spacing: 0.2em;
  line-height: 2.33333;
  
  @media (min-width: 769px) {
    line-height: 2.66667;
  }
`

export const Extra = styled.div`
  height: 40px;
`

import React from 'react'
import styled from 'styled-components'
import logo from '../../images/Logo.png'

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #005F6B;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-bottom: 35px;
  }

  h1 {
    color: #005F6B;
    font-weight: 700;
    font-size: 24px;
  }
`

const Box = styled.div`
  width: 600px;
  height: 300px;
  background-color: rgba(255, 255, 255, .5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`

const PageNotFound: React.FC = () => {
  return (
    <Page>
      <Box>
        <img src={logo} alt='logo da aplicação' />
        <h1>Desculpe, página não encontrada.</h1>
      </Box>
    </Page>
  )
}

export default PageNotFound

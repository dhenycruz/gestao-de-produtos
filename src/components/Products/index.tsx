import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import styled from 'styled-components'
import iconAddProduct from '../../images/package-add-icon.png'
import iconAddCategorie from '../../images/add-category-icon.png'
import iconProduct from '../../images/icon-product.png'
import iconCategorie from '../../images/category-icon.png'

const Main = styled.main`
  width: 100%;
`
const Section = styled.section`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 52px 0 52px;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.195em;
  }
`

const ButtonAdd = styled.button<{ bg: string, color: string }>`
  width: 247px;
  height: 44.72px;
  color: ${({ color }) => color};
  background-color: ${({ bg }) => bg};
  border-radius: 5px;
  border: solid 1px #343838;
  margin-left: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.195em;

  img {
    margin-right: 8px;
  }
`
const CardTotal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 22.51px;
`
const Cardbody = styled.div<{ bg: string }>`
  width: 400px;
  height: 119px;
  background-color: ${({ bg }) => bg};
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const ValueTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.195em;
  color: #fff;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: 0.195em;
    color: #fff;
  }
`

const Products: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Main>
        <Header />
        <Section>
          <h2>Produtos</h2>
          <div>
            <ButtonAdd bg='#fff' color='#343838'>
              <img src={iconAddProduct} alt='icon add product' />
              ADICIONAR PRODUTO
            </ButtonAdd>
            <ButtonAdd bg='#343838' color='#fff'>
              <img src={iconAddCategorie} alt='icon add categorie' />
              ADICIONAR GATEGORIA
            </ButtonAdd>
          </div>
        </Section>
        <CardTotal>
          <Cardbody bg='#529766'>
            <img src={iconProduct} alt='icon product' />
            <ValueTotal>
              Produtos
              <span>15</span>
            </ValueTotal>
          </Cardbody>
          <Cardbody bg='#FF9811'>
            <img src={iconCategorie} alt='icon categorie' />
            <ValueTotal>
              Categorias
              <span>4</span>
            </ValueTotal>
          </Cardbody>
        </CardTotal>
      </Main>
    </>
  )
}

export default Products

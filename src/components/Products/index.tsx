import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import iconAddProduct from '../../images/package-add-icon.png'
import iconAddCategorie from '../../images/add-category-icon.png'
import iconProduct from '../../images/icon-product.png'
import iconCategorie from '../../images/category-icon.png'
import Footer from '../footer'
import Table from '../TableProduct'
import { Main, Section, ButtonAdd, CardTotal, Cardbody, ValueTotal } from './style'

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
        <Table />
      <Footer />
      </Main>
    </>
  )
}

export default Products

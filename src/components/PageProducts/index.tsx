import React, { useContext, useState } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import iconProduct from '../../images/icon-product.png'
import iconCategorie from '../../images/category-icon.png'
import Footer from '../footer'
import TableProduct from '../TableProduct'
import { Main, Section, CardTotal, Cardbody, ValueTotal } from './style'
import ModalAddProduct from '../Modals/ModalAddProduct'
import ModalAddCategorie from '../Modals/ModalAddCategorie'
import ButtonAddProduct from '../ButtonAddProduct'
import ButtonAddCategorie from '../ButtonAddCategorie'
import { GlobalConext } from '../../context/globalContext'

const Products: React.FC = () => {
  const { productTotal, categoryTotal } = useContext(GlobalConext)

  // Open modal add Product
  const [isOpenProduct, setIsOpenProduct] = useState(false)
  const openModalProduct = (): void => { setIsOpenProduct(!isOpenProduct) }

  // Open modal add Categorie
  const [isOpenCategorie, setIsOpenCategorie] = useState(false)
  const openModalCategorie = (): void => { setIsOpenCategorie(!isOpenCategorie) }

  return (
    <>
      <Sidebar />
      <Main>
        <Header />
        <Section>
          <h1>Produtos</h1>
          <div>
            <ButtonAddProduct openModalProduct={openModalProduct} />
            <ButtonAddCategorie openModalCategorie={openModalCategorie} />
          </div>
        </Section>
        <CardTotal>
          <Cardbody bg='#529766'>
            <img src={iconProduct} alt='icon product' />
            <ValueTotal>
              Produtos
              <span>{productTotal}</span>
            </ValueTotal>
          </Cardbody>
          <Cardbody bg='#FF9811'>
            <img src={iconCategorie} alt='icon categorie' />
            <ValueTotal>
              Categorias
              <span>{categoryTotal}</span>
            </ValueTotal>
          </Cardbody>
        </CardTotal>
        <TableProduct />
        <Footer />
      </Main>
      { /* Modals */}
      <ModalAddProduct isOpen={isOpenProduct} toggle={openModalProduct} />
      <ModalAddCategorie isOpen={isOpenCategorie} toggle={openModalCategorie} />
    </>
  )
}

export default Products

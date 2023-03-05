import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import Footer from '../footer'
import ModalAddCategorie from '../Modals/ModalAddCategorie'
import ModalAddProduct from '../Modals/ModalAddProduct'
import ButtonAddCategorie from '../ButtonAddCategorie'
import ButtonAddProduct from '../ButtonAddProduct'
import TableCategories from '../TableCategories'
import { Main, Section, CardTotal, Cardbody, ValueTotal } from './style'
import iconProduct from '../../images/icon-product.png'
import iconCategorie from '../../images/category-icon.png'

const Categoires: React.FC = () => {
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
          <h2>Categorias</h2>
          <div>
            <ButtonAddCategorie openModalCategorie={openModalCategorie} />
            <ButtonAddProduct openModalProduct={openModalProduct} />
          </div>
        </Section>
        <CardTotal>
          <Cardbody bg='#FF9811'>
            <img src={iconCategorie} alt='icon categorie' />
            <ValueTotal>
              Categorias
              <span>4</span>
            </ValueTotal>
          </Cardbody>
          <Cardbody bg='#529766'>
            <img src={iconProduct} alt='icon product' />
            <ValueTotal>
              Produtos
              <span>15</span>
            </ValueTotal>
          </Cardbody>
        </CardTotal>
        <TableCategories />
        <Footer />
      </Main>
      { /* Modals */ }
      <ModalAddProduct isOpen={isOpenProduct} toggle={openModalProduct} />
      <ModalAddCategorie isOpen={isOpenCategorie} toggle={openModalCategorie} />
    </>
  )
}

export default Categoires

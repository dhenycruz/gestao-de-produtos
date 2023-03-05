import React from 'react'
import iconAddProduct from '../../images/package-add-icon.png'
import { ButtonAdd } from './style'

interface Props {
  openModalProduct: () => void
}

const ButtonAddProduct: React.FC<Props> = ({ openModalProduct }) => {
  return (
    <ButtonAdd
      bg='#fff'
      color='#343838'
      onClick={openModalProduct}
    >
      <img src={iconAddProduct} alt='icon add product' />
      ADICIONAR PRODUTO
    </ButtonAdd>
  )
}

export default ButtonAddProduct

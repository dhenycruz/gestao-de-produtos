import React from 'react'
import iconAddCategorie from '../../images/add-category-icon.png'
import { ButtonAdd } from './style'

interface Props {
  openModalCategorie: () => void
}

const ButtonAddCategorie: React.FC<Props> = ({ openModalCategorie }) => {
  return (
    <ButtonAdd
    bg='#343838'
    color='#fff'
      onClick={openModalCategorie}
    >
      <img src={iconAddCategorie} alt='icon add product' />
      ADICIONAR GATEGORIA
    </ButtonAdd>
  )
}

export default ButtonAddCategorie

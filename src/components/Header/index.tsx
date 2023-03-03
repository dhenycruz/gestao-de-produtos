import React from 'react'
import perfil from '../../images/perfil.png'
import { HeadarApp } from './style'
const Header: React.FC = () => {
  return (
    <HeadarApp>
      <h3>Olá, Usuário!</h3>
      <img src={perfil} alt='foto de perfil'width={50} height={50} />
    </HeadarApp>
  )
}

export default Header

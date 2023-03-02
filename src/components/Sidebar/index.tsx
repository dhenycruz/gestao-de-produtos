import React from 'react'
import { Aside, Diviser, Button } from './style'
import logo from '../../images/Logo.png'

const Sidebar: React.FC = () => {
  return (
    <Aside>
      <img src={logo} alt="image logo" width='80%'/>
      <Diviser />
      <span>Menu</span>
      <Button>Produtos</Button>
      <Button>Categorias</Button>
    </Aside>
  )
}

export default Sidebar

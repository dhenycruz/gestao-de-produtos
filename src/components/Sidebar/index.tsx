import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Aside, Diviser, Button } from './style'
import logo from '../../images/Logo.png'

const Sidebar: React.FC = () => {
  const navigate = useNavigate()

  const redirect = (url: string): void => {
    navigate(url)
  }

  const location = window.location.pathname

  return (
    <Aside>
      <img src={logo} alt="image logo" width='80%'/>
      <Diviser />
      <span>Menu</span>
      <Button
        bg={ location === '/' ? '#02c4dd' : '#008C9E'}
        onClick={() => { redirect('/') }}
      >
        Produtos
      </Button>
      <Button
        bg='#008C9E'
        onClick={() => { redirect('/categorias') }}
      >
        Categorias
      </Button>
    </Aside>
  )
}

export default Sidebar

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categoires from './components/Categories'
import PageNotFound from './components/PageNotFound'
import Products from './components/Products'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={ <Products />}/>
      <Route path='/categorias' element={ <Categoires />} />
      <Route path='*' element={ <PageNotFound />} />
    </Routes>
  )
}

export default App

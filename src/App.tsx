import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import Products from './components/Products'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={ <Products />}/>
      <Route path='/categorias' element={<h1>Categories</h1>} />
      <Route path='*' element={ <PageNotFound />} />
    </Routes>
  )
}

export default App

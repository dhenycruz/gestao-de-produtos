import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={ <Products />}/>
      <Route path='/categorias' element={<h1>Categories</h1>} />
      <Route path='*' element={<h1>404 Page not found.</h1>} />
    </Routes>
  )
}

export default App
